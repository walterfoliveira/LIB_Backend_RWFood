import React, { useEffect, useState } from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import toast from 'react-hot-toast'

import personService from '../services/personService'

export default function Dashboard() {
    useEffect(() => {
        getEntregadorAll()
    }, [])

    const getEntregadorAll = async () => {
        var response = await personService.getAllPerson(1)

        //Filtro pelo Type: Entregador, Garçon ...
        const respFilterByType = response.filter((item) => item.type === 1) //Entregador
        //console.log('[getEntregadorAll]: ' + JSON.stringify(respFilterByType))

        toast.success('Seja Bem-vido(a).')
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
