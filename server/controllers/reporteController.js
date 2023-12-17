import Reporte from '../models/Reporte.js'

const obtenerReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find()

    res.json({ reportes })
  } catch (error) {
    console.log(error)
  }
}

const obtenerReporte = async (req, res) => {
  const { ccEst } = req.params
  try {
    const reporte = await Reporte.find({ ccEst })

    res.json({ reporte })
  } catch (error) {
    console.log(error)
  }
}

const realizarReporte = async (req, res) => {
  const reporte = new Reporte(req.body)

  try {
    await reporte.save()

    res.json({ msg: 'Reporte Realizado Correctamente' })
  } catch (error) {
    console.log(error)
  }
}

const actualizarEstadoReporte = async (req, res) => {
  const { id } = req.params

  try {
    const reporte = await Reporte.findById(id)

    reporte.estado = true
    reporte.tecnico = req.tecnico._id

    await reporte.save()
    console.log(reporte)

    res.json({ msg: 'Reporte Actualizado' })
  } catch (error) {
    console.log(error)
  }
}

const deleteReporte = async (req, res) => {
  const { id } = req.params

  try {
    await Reporte.findByIdAndDelete(id)

    res.json({ msg: 'Reporte Eliminado' })
  } catch (error) {
    console.log(error)
  }
}

export {
  obtenerReportes,
  obtenerReporte,
  realizarReporte,
  actualizarEstadoReporte,
  deleteReporte
}
