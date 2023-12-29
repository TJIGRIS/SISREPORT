import axios from './axios'

export const loginApi = tecnico => axios.post('/tecnicos/login', tecnico)

export const isCheckLoginApi = () => axios.get('/tecnicos/check-login')

export const isLogoutApi = () => axios.get('/tecnicos/logout')
