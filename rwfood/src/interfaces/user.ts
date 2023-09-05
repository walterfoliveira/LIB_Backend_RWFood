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
    mail: string
    pass: string
}

export interface IUserCreate {
    name: string
    email: string
    password: string
    roles: string[]
}

export interface IDisableTwoFa {
    pin: string
    userIdentificator: string
}

export interface IResetPassword {
    pin: string
    userIdentificator: string
}

export interface IChangeUserEmail {
    pin: string
    userIdentificator?: string
    userEmail: string
}

export interface IUserCreateResponse {
    email: string
    qrCode: string
    secret: string
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
