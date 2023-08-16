import React, { useEffect, useState } from 'react'
import { GetAll, GetById } from '../api/company'
import Card from '../components/Card'
import Loading from '../components/Loading'

export default function Company() {
    const [empresa, setEmpresa] = useState([])
    const [loading, setLoading] = useState(true)

    const handleGetCompanyAll = async () => {
        setLoading(true)
        //var responseById = await GetById(1)
        var responseAll = await GetAll(1)

        if (responseAll.status === 400) {
            console.log('Erro:', responseAll.statusText)
            return
        }
        setEmpresa(responseAll.data)
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
                        <button className="bg-indigo-500 text-white p-3 rounded-md" onClick={handleGetCompanyAll}>
                            Buscar
                        </button>
                    </div> */}
                </div>

                {loading && (
                    <div className="flex items-center">
                        <Loading />
                    </div>
                )}

                {!loading && (
                    <div className="grid grid-cols-3 gap-4">
                        {empresa.map((item) => (
                            <Card item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
