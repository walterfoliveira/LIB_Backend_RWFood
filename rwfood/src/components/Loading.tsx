import { type } from 'os'
import React from 'react'

type Props = {
    label: string
}

const Loading = ({ label }: Props) => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="grid grid-cols-1">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600" />
                <h1 className="text-gray-600 mt-1">{label}</h1>
            </div>
        </div>
    )
}

export default Loading
