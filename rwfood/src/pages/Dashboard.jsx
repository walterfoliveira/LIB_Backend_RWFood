import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import toast from 'react-hot-toast'

import personService from '../services/personService'
import productService from '../services/productService'
import categoryService from '../services/categoryService'
import { GlobalContext } from '../contexts/GlobalContext'

import { getToken } from '../facades/localStorage'
import Loading from '../components/Loading'

export default function Dashboard() {
    //const history = useHistory()

    const navigate = useNavigate()
    const globalContext = useContext(GlobalContext)
    const [autorized, setAutorized] = useState(false)

    useEffect(() => {
        const tokenJWT = getToken()
        //console.log('Dashboard-tokenJWT', tokenJWT)

        if (tokenJWT !== null && tokenJWT !== '' && globalContext?.user?.id !== 0) {
            getCategoriaAll()
            getEntregadorAll()
            getProductAll()
            setAutorized(true)
            console.log('Dashboard-setAutorized')

            toast.success(`Seja Bem-vido(a) ${globalContext?.user.surname}.`)
        } else {
            globalContext?.logout()
            navigate('/login')
        }
    }, [])

    const getCategoriaAll = async () => {
        var response = await categoryService.getAllCategory(1)
        //console.log('[getCategoriaAll]: ' + JSON.stringify(response))
        globalContext?.setCategory(response)
    }

    const getEntregadorAll = async () => {
        var response = await personService.getAllPerson(1)

        //Filtro pelo Type: Entregador, Garçon ...
        const respFilterByType = response.filter((item) => item.type === 1) //Entregador
        //console.log('[getEntregadorAll]: ' + JSON.stringify(respFilterByType))
    }

    const getProductAll = async () => {
        var response = await productService.getAllProduct(1)
        //console.log('[getProductAll]: ' + JSON.stringify(response))
    }

    return (
        <>
            {!autorized && <Loading label="Carregando" />}
            {autorized && (
                <div className="flex flex-col gap-4">
                    <DashboardStatsGrid />
                    <div className="flex flex-row gap-4 w-full">
                        <TransactionChart />
                        <BuyerProfilePieChart />
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                        <RecentOrders />
                        <PopularProducts />
                    </div>
                </div>
            )}
        </>
    )
}
