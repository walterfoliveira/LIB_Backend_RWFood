export interface ICompany {
    id: number
    idCompany: number
    status: number
    name: string
    telefone: string
    site: string
    image1: string
    funcionamento: string
    createdAt: string
}

export interface IItem {
    id: number | string
    name: string
    cell?: string
    document?: string
}
