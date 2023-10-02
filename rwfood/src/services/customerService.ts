import { ICustomer } from '../interfaces/customer'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Product/1 -->> 1ºparametro : Product
//Details: Product/1/id/3 -->> 1ºparametro : Product 2º ID: resorce

export class CustomersService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getCustomer(idCompany: number, id: number) {
        return this.apiService.get<ICustomer>(`Customer/${idCompany}/${id}`)
    }

    public getAllCustomer(id: number) {
        return this.apiService.get<ICustomer[]>(`Customer/${id}`)
    }

    public deleteCustomerById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Customer/${idCompany}/${id}`, {})
    }

    public insertCustomer(model: ICustomer) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        //console.log('[insertCustomer]: ' + JSON.stringify(model))
        return this.apiService.post<number>('Customer', model)
    }

    public updateCustomer(model: ICustomer) {
        console.log('[updateCustomer]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Customer', model)
    }
}

const customersService = new CustomersService(apiService)
export default customersService
