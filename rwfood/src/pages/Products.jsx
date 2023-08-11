import React from 'react'
import RecentOrders from '../components/RecentOrders'

export default function Products() {
    return (
        <div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
            </div>
        </div>
    )
}
