import { ICategory } from '../interfaces/category'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Users/1 -->> 1ºparametro : Category
//Details: Category/1/id/3 -->> 1ºparametro : Category 2º ID: resorce

export class CategoryService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getCategory(idCompany: number, id: number) {
        return this.apiService.get<ICategory>(`Category/${idCompany}/${id}`)
    }

    public getAllCategory(id: number) {
        return this.apiService.get<ICategory[]>(`Category/${id}`)
    }

    public deleteCategoryById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Category/${idCompany}/${id}`, {})
    }

    public insertCategory(model: ICategory) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        return this.apiService.post<number>('Category', model)
    }

    public updateCategory(model: ICategory) {
        console.log('[ICategory]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Category', model)
    }
}

const categoryService = new CategoryService(apiService)
export default categoryService
