import axios from 'axios'

const api = axios.create({
    baseURL: 'http://bkend.rwconsultoria.com.br:20021/api/v1/api/Company'
})

export const GetAll = (id: number) => api.get('?idCompany=1')

export const GetById = (id: number) => api.get('/Company/{3}?idCompany=1')