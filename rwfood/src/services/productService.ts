import { IProduct, IProductCategory } from '../interfaces/product'
import apiService, { ApiService } from './api'

//BaseURL: http://bkend.rwconsultoria.com.br:20021/api/v1/api/
//Resource: //ListAll: Product/1 -->> 1ºparametro : Product
//Details: Product/1/id/3 -->> 1ºparametro : Product 2º ID: resorce

export class ProductService {
    constructor(private apiService: ApiService) {
        this.apiService = apiService
    }

    public getProduct(idCompany: number, id: number) {
        return this.apiService.get<IProduct>(`Product/${idCompany}/${id}`)
    }

    public getAllProduct(id: number) {
        return this.apiService.get<IProduct[]>(`Product/${id}`)
    }

    public getAllProductCategory(id: number) {
        return this.apiService.patch<IProductCategory[]>(`Product/ProductByCategory?idCompany=${id}`, null)
    }

    public deleteProductById(idCompany: number, id: number) {
        return this.apiService.del<boolean>(`Product/${idCompany}/${id}`, {})
    }

    public insertProduct(model: IProduct) {
        //Ajusta a data CreateAt
        const today = new Date()
        today.setHours(today.getHours() - 3) // Remove 3 horas
        model.createdAt = today.toISOString()

        //console.log('[insertProduct]: ' + JSON.stringify(model))
        return this.apiService.post<number>('Product', model)
    }

    public updateProduct(model: IProduct) {
        console.log('[updateProduct]: ' + JSON.stringify(model))
        return this.apiService.put<number>('Product', model)
    }
}

const productService = new ProductService(apiService)
export default productService
