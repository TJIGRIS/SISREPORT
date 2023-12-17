import generarJWT from '../helpers/generarJWT.js'
import jwt from 'jsonwebtoken'
import Tecnico from '../models/Tecnico.js'

const registrar = async (req, res) => {
  const { identificacion } = req.body

  try {
    const existeTecnico = await Tecnico.findOne().where({ identificacion })

    if (existeTecnico) {
      const error = new Error('Tecnico Registado Previamente')
      return res.status(400).json({ msg: error.message })
    }

    const tecnico = new Tecnico(req.body)

    await tecnico.save()

    res.json({ meg: 'Tecnico Registrado' })
  } catch (error) {
    console.log(error)
  }
}

const login = async (req, res) => {
  const { identificacion, password } = req.body

  try {
    const tecnico = await Tecnico.findOne().where({ identificacion })

    if (!tecnico) {
      const error = new Error('Tecnico NO Registado')
      return res.status(400).json({ msg: error.message })
    }

    if (tecnico.password.toString() !== password.toString()) {
      const error = new Error('Contraseña Incorrecta')
      return res.status(400).json({ msg: error.message })
    }

    const token = generarJWT(tecnico._id)

    res.cookie('token', token)

    res.json({
      _id: tecnico._id,
      nombre: tecnico.nombre,
    })
  } catch (error) {
    console.log(error)
  }
}

const logout = (req, res) => {
  res.clearCookie('token')
  res.json({ msg: 'Sesion Cerrada' })
}

const checkLogin = async (req, res) => {
  try {
    const tecnicoFound = await Tecnico.findById(req.tecnico._id)

    if (!tecnicoFound) return res.status(404).json({ message: 'Admin not found' })

    return res.json({
      name: tecnicoFound.nombre,
    })
  } catch (error) {
    console.log(error)
  }
}

export { registrar, login, logout, checkLogin }
