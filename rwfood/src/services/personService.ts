import { IPerson } from '../interfaces/person'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Person
//Details: Person/1/id/3 -->> 1ºparametro : Person 2º ID: resorce

export class PersonService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getPerson(idCompany: number, id: number) {
        return this.apiService.get<IPerson>(`Person/${idCompany}/${id}`)
    }

    public getAllPerson(id: number) {
        return this.apiService.get<IPerson[]>(`Person/${id}`)
    }

    public deletePersonById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Person/${idCompany}/${id}`, {})
    }

    public insertPerson(model: IPerson) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        //console.log('[insertPerson]: ' + JSON.stringify(model))
        return this.apiService.post<number>('Person', model)
    }

    public updatePerson(model: IPerson) {
        console.log('[updatePerson]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Person', model)
    }
}

const personService = new PersonService(apiService)
export default personService
