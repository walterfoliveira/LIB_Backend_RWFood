export interface ICompany {
    id: number
    idCompany: number
    status: number
    name: string
    telefone: string
    site: string
    funcionamento: string
    createdAt: string
}

export interface IItem {
    id: number | string
    name: string
    cell?: string
    document?: string
}
