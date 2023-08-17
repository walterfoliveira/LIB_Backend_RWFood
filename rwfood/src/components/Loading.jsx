import React, { Component } from 'react'

const Loading = ({ label }) => {
    return (
        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl ">
            <div className="grid justify-center justify-items-center flex justify-center items-center ">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600" />
                <h1 className="text-gray-600 mt-1">{label}</h1>
            </div>
        </div>
    )
}

export default Loading
