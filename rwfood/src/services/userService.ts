import { IUser } from '../interfaces/user'

import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

//0=Atendente, 1=Gerente, 2=Admin, 3=SuperAdmin

export class UsersService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getProfile(idCompany: number, idUser: number) {
        return this.apiService.get<IUser>(`Users/${idCompany}/id/${idUser}`)
    }

    public getAllUser(idCompany: number) {
        return this.apiService.get<IUser[]>(`Users/${idCompany}`)
    }

    public deleteUserById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Users/${idCompany}/id/${id}`, {})
    }

    public insertUser(model: IUser) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()
        model.updated = today.toISOString()

        console.log('[IUser]: ' + JSON.stringify(model))

        return this.apiService.post<number>('Users', model)
    }

    public updateUser(model: IUser) {
        console.log('[IUser]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Users', model)
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

const usersService = new UsersService(apiService)
export default usersService
