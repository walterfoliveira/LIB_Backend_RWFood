import { IUser, IAuthUser, IAuthenticationUser } from '../interfaces/user'

import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Company
//Details: Users/1/id/3 -->> 1ºparametro : Company 2º ID: resorce

export class AuthService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getAuth(idCompany: number, userName: string, passWord: string) {
        const model: IAuthUser = { idCompany: idCompany, userName: userName, passWord: passWord }
        return this.apiService.post<IAuthenticationUser>(`Authentication/login`, model)
    }
}

const autheticationService = new AuthService(apiService)
export default autheticationService
