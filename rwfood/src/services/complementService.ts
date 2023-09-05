import { IComplement } from '../interfaces/complement'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Complement
//Details: Complement/1/id/3 -->> 1ºparametro : Complement 2º ID: resorce

export class ComplementService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getComplement(idCompany: number, id: number) {
        return this.apiService.get<IComplement>(`Complement/${idCompany}/id/${id}`)
    }

    public getAllComplement(id: number) {
        return this.apiService.get<IComplement[]>(`Complement/${id}`)
    }

    public deleteComplementById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Complement/${idCompany}/id/${id}`, {})
    }

    public insertComplement(model: IComplement) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        return this.apiService.post<number>('Complement', model)
    }

    public updateComplement(model: IComplement) {
        console.log('[IComplement]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Complement', model)
    }
}

const complementService = new ComplementService(apiService)
export default complementService
