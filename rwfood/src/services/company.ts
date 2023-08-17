import { ICompany } from '../interfaces/company'

import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

export class CompanyService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getCompany() {
        return this.apiService.get<ICompany>('Company/1/id/3')
    }

    public getAllCompany() {
        return this.apiService.get<ICompany[]>('Company/1')
    }

    // public create(model: IUserCreate) {
    //   return this.apiService.post<IUserCreateResponse>('admin/create', model);
    // }

    // public disableTwoFa(model: IDisableTwoFa) {
    //   return this.apiService.post<{ message: string }>('admin/disable-two-fa', model);
    // }

    // public resetPassword(model: IResetPassword) {
    //   return this.apiService.post<{ newPassword: string }>('admin/reset-password', model);
    // }

    // public changeUserEmail(model: IChangeUserEmail) {
    //   return this.apiService.post('admin/change-email', model);
    // }
}

const companyService = new CompanyService(apiService)
export default companyService
