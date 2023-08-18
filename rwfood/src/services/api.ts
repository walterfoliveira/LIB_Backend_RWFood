//import axios from 'axios'
import axios, { AxiosError, AxiosResponse, Method } from 'axios'
import { formatErrorMessage } from '../facades/errorFormater'
//import { getToken } from '../facades/localStorage';

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> {}
}

export class ApiService {
    public async get<T>(url: string, params?: any): Promise<T> {
        const response = await this.request('GET', url, params)
        return response.data
    }

    public async del<T>(url: string, params?: any): Promise<T> {
        const response = await this.request('DELETE', url, params)
        return response.data
    }

    public async post<T>(url: string, body: any): Promise<T> {
        const response = await this.request('POST', url, body)
        return response.data
    }

    public async put<T>(url: string, body: any): Promise<T> {
        const response = await this.request('PUT', url, body)
        return response.data
    }

    public async patch<T>(url: string, body: any): Promise<T> {
        const response = await this.request('PATCH', url, body)
        return response.data
    }

    private async request<T = any>(method: Method, url: string, data: any = null): Promise<AxiosResponse<T>> {
        try {
            const response = await axios.request({
                baseURL: 'http://bkend.rwconsultoria.com.br:20021/api/v1/api/', //process.env.REACT_APP_API_URL,
                url,
                method,
                timeout: 30000,
                headers: {
                    'Content-type': 'application/json'
                    //'authorization': `Bearer ${getToken()}`
                },
                params: method === 'GET' ? data : null,
                data: method !== 'GET' ? data : null
            })

            return response
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error as AxiosError
                //console.log(err.response?.data)

                if (err.response?.status === 401) {
                    window.location.href = '/login'
                }

                // console.log(err.response?.data)
                if (!err?.response) {
                    console.log('No Server Response')
                } else if (err.response?.status === 400) {
                    console.log('Missing Username or Password')
                } else if (err.response?.status === 401) {
                    console.log('Unauthorized')
                } else {
                    console.log('Login Failed')
                }

                throw formatErrorMessage(err)
            } else {
                throw new Error('different error than axios')
            }
        }
    }
}

const apiService = new ApiService()
export default apiService
