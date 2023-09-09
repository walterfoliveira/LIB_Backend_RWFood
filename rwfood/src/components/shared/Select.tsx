import { type } from 'os'
import React, { Component } from 'react'

type Props = {
  id: string;
  label: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ id, label, options, value, setValue }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-slate-500 font-bold mb-2">{label}</label>
      <select id={id} value={value} onChange={({ target }) => setValue(target.value)} className='bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
        <option value="" disabled>Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
