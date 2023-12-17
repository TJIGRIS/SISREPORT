import express from 'express'
import {
  obtenerReportes,
  obtenerReporte,
  realizarReporte,
  actualizarEstadoReporte,
  deleteReporte
} from '../controllers/reporteController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.route('/').get(checkAuth, obtenerReportes).post(realizarReporte)
router.route('/:ccEst').get(obtenerReporte)
router.put('/:id', checkAuth, actualizarEstadoReporte)
router.delete('/:id', checkAuth, deleteReporte)

export default router
