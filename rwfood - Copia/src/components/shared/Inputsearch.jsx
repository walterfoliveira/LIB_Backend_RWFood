import React, { Component } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Inputsearch = () => {
    return (
        <div className="relative">
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
            <input
                type="text"
                placeholder="Search..."
                className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
            />
        </div>
    )
}

export default Inputsearch
