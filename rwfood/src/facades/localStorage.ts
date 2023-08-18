export const saveToken = (value: string) => {
    localStorage.setItem('authToken', value)
}

export const getToken = () => {
    return localStorage.getItem('authToken')
}

export const saveCompany = (value: number) => {
    localStorage.setItem('authCompany', value.toString())
}

export const getCompany = () => {
    return localStorage.getItem('authCompany')
}

export const clearStorage = () => {
    localStorage.clear()
}
