import React from 'react'
import RecentOrders from '../components/RecentOrders'
import Form from '../components/form/form'

export default function Products() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 content-center">
                <Form idType={'1'} type={1} />
            </div>
        </>
    )
}
