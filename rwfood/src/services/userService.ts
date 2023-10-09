import { getToken } from '../facades/localStorage'
import { IUser, IToken, ILoginUser } from '../interfaces/user'

import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

//0=Atendente, 1=Gerente, 2=Admin, 3=SuperAdmin

export class UsersService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    //http://bkend.rwconsultoria.com.br:20021/api/v1/api/Users/1/walter%40rwconsultoria.com.br/1122
    public getLogin(idCompany: number, mail: string, password: string) {
        const model: ILoginUser = { idCompany: idCompany, mail: mail, password: password }
        //console.log('[getLogin]: ' + JSON.stringify(model))
        return this.apiService.post<IUser>(`Users/login`, model)
    }

    public getAuth() {
        const model: IToken = { token: getToken() as string }
        console.log('getAuth: [token]: ' + JSON.stringify(model))
        return this.apiService.post<IUser>(`Users/Auth`, model)
    }

    public getProfile(idCompany: number, idUser: number) {
        return this.apiService.get<IUser>(`Users/${idCompany}/${idUser}`)
    }

    public getAllUser(idCompany: number) {
        //console.log('getAllUser: [token]: ' + getToken())
        return this.apiService.get<IUser[]>(`Users/${idCompany}`)
    }

    public deleteUserById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Users/${idCompany}/${id}`, {})
    }

    public insertUser(model: IUser) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()
        model.updated = today.toISOString()

        //console.log('[IUser]: ' + JSON.stringify(model))

        return this.apiService.post<number>('Users', model)
    }

    public updateUser(model: IUser) {
        //console.log('[IUser]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Users', model)
    }
}

const usersService = new UsersService(apiService)
export default usersService
