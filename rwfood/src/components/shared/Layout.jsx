import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { Toaster } from 'react-hot-toast'

export default function Layout() {
    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>

            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    //icon: '👏',
                    // style: {
                    //   background: '#363636',
                    //   color: '#fff',
                    // },

                    style: {
                        border: '1px solid #d1d5db',
                        padding: '16px',
                        minWidth: '250px',
                        color: '#9ca3af #713200',
                        fontSize: '16px'
                    },
                    iconTheme: {
                        //primary: '#713200',
                        secondary: '#fff'
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black'
                        }
                    }
                }}
            />
        </div>
    )
}
