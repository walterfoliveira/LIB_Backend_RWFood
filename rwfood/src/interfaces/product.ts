export interface IProduct {
    id: number
    idCompany: number
    idCategory: number
    status: number
    createdAt: string
    name: string
    code1: string
    code2: string
    description: string
    image1: string
    image2: string
    amount1: number
    amount2: number
    amount3: number
    amount4: number
}

export interface IProductCategory {
    id: number
    idCompany: number
    idCategory: number
    status: number
    createdAt: string
    name: string
    code1: string
    code2: string
    description: string
    image1: string
    image2: string
    amount1: number
    amount2: number
    amount3: number
    amount4: number
    category: string
}
