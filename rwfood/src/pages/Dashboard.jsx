import React, { useContext, useEffect, useState } from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import toast from 'react-hot-toast'

import { GlobalContext } from '../contexts/GlobalContext'
import personService from '../services/personService'
import productService from '../services/productService'
import categoryService from '../services/categoryService'
import userService from '../services/userService'

import { getToken } from '../facades/localStorage'

export default function Dashboard() {
    //const history = useHistory()
    const globalContext = useContext(GlobalContext)

    // useEffect(() => {
    //     const token = getToken()

    //     if (!token) {
    //         history.push('/login')
    //         return
    //     }

    //     getProfile(1, 2)
    //     getCategoriaAll()

    //     toast.success('Seja Bem-vido(a).')
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        getProfile(1, 2)
        getCategoriaAll()
        getEntregadorAll()
        getProductAll()

        toast.success('Seja Bem-vido(a).')
    }, [])

    const getProfile = async (idCompany, idUser) => {
        var response = await userService.getProfile(idCompany, idUser)
        globalContext?.setUser(response)
        //console.log('[getProfile]: ' + JSON.stringify(response))
    }

    const getCategoriaAll = async () => {
        var response = await categoryService.getAllCategory(1)
        globalContext?.setCategory(response)
        //console.log('[getCategoriaAll]: ' + JSON.stringify(response))
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
    )
}
