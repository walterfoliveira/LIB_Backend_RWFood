import React, { useEffect, useState } from 'react'
import { GetAll, GetById, DeleteById } from '../api/company'
import Card from '../components/Card'
import Loading from '../components/Loading'
import CustomButton from '../components/CustomButton'

export default function Company() {
    const [empresaList, setEmpresaList] = useState([])
    const [empresa, setEmpresa] = useState([])
    const [loading, setLoading] = useState(true)

    const handleGetCompanyById = async () => {
        var response = await GetById(1)
        if (response.status === 400) {
            console.log('Erro:', response.statusText)
            return
        }
        setEmpresa(response.data)
        console.log('dados', response.data)
        setLoading(false)
    }

    const handleGetCompanyAll = async () => {
        setLoading(true)

        var responseAll = await GetAll(1)
        if (responseAll.status === 400) {
            console.log('Erro:', responseAll.statusText)
            return
        }
        setEmpresaList(responseAll.data)
        console.log('dados', responseAll.data)
        setLoading(false)
    }

    useEffect(() => {
        handleGetCompanyAll()
    }, [])

    return (
        <div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row">
                    <div class="flex flex-row text-xl font-bold text-gray-700 font-semibold ml-10">
                        Lista de Empresas
                    </div>
                    {/* <div>
                        <CustomButton label="Buttom Customizado" onClick={handleGetCompanyAll} />
                        <button className="bg-indigo-500 text-white p-3 rounded-md" onClick={handleGetCompanyAll}>
                            Buscar
                        </button>
                    </div> */}
                </div>

                {loading && (
                    <div className="flex items-center">
                        <Loading label="Carregando" />
                    </div>
                )}

                {!loading && (
                    <div className="grid grid-cols-3 gap-4">
                        {empresaList.map((item) => (
                            <Card item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
