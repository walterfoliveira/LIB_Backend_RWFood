import React, { Component } from 'react'

type Props = {
    label: string;
}

const Loading = ({ label }: Props) => {
    return (
        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
            <div className="py-12 grid justify-items-center flex items-center">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
        </div>
    )
}

export default Loading