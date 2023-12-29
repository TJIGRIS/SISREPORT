import axios from './axios'

export const createReportesApi = (report) => axios.post('/reportes', report)
export const getAllReportesApi = () => axios.get('/reportes')
export const getOneReportApi = (id) => axios.get(`/reportes/${id}`)
export const putReportApi = (id) => axios.put(`/reportes/${id}`)
export const deleteReportApi = (id) => axios.delete(`/reportes/${id}`)
