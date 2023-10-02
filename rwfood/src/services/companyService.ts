import { ICompany } from '../interfaces/company'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

export class CompanyService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getCompany(idCompany: number, id: number) {
        return this.apiService.get<ICompany>(`Company/${idCompany}/${id}`)
    }

    public getAllCompany(id: number) {
        return this.apiService.get<ICompany[]>(`Company/${id}`)
    }

    public deleteCompanyById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Company/${idCompany}/${id}`, {})
    }

    public insertCompany(model: ICompany) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        // console.log('[Service]: insertCompany')
        // console.log('[ICompany]: ' + JSON.stringify(model))

        return this.apiService.post<number>('Company', model)
    }

    public updateCompany(model: ICompany) {
        //console.log('[Service]: updateCompany')
        //console.log('[ICompany]: ' + JSON.stringify(model))

        return this.apiService.put<number>('Company', model)
    }

    //http://bkend.rwconsultoria.com.br:20021/api/v1/api/Company

    // public create(model: IUserCreate) {
    //   return this.apiService.post<IUserCreateResponse>('admin/create', model);
    // }

    // public disableTwoFa(model: IDisableTwoFa) {
    //   return this.apiService.post<{ message: string }>('admin/disable-two-fa', model);
    // }

    // public resetPassword(model: IResetPassword) {
    //   return this.apiService.post<{ newPassword: string }>('admin/reset-password', model);
    // }
}

const companyService = new CompanyService(apiService)
export default companyService
