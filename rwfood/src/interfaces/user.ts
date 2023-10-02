export interface IUser {
    id: number
    idCompany: number
    level: number
    status: number
    createdAt: string
    updated: string
    name: string
    surname: string
    cell: string
    document: string
    image1: string
    mail: string
    pass: string
}

export interface IAuthenticationUser {
    token: string
    user: IAuthUser
}

export interface ILoginUser {
    mail: string
    pass: string
}

export interface IAuthUser {
    id?: number
    idCompany: number
    role?: string
    userName: string
    passWord: string
}

export enum RoleEnum {
    ADMIN = 'admin',
    ADMIN_FULL = 'adminFull',
    ADMIN_CUSTOMER_SUPPORT = 'adminCustomerSupport',
    ADMIN_NETWORK_SUPPORT = 'adminNetworkSupport',
    ADMIN_FINANCIAL = 'adminFinancial',
    CLIENT = 'client',
    CONSULTANT = 'consultant'
}

export const rolesArray = [
    { name: 'Admin', value: RoleEnum.ADMIN_FULL },
    { name: 'Customer Support', value: RoleEnum.ADMIN_CUSTOMER_SUPPORT },
    { name: 'Network Support', value: RoleEnum.ADMIN_NETWORK_SUPPORT },
    { name: 'Financial', value: RoleEnum.ADMIN_FINANCIAL }
]
