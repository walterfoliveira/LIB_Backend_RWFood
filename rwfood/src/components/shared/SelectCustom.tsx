import React, { Component } from 'react'
import Select from 'react-select'

type Props = {
  id: string;
  label: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectCustom = ({ id, label, options, value, setValue }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-slate-500 font-bold mb-2">{label}</label>
      {/* <Select id={id} value={value} onChange={(item) => setValue(item?.value as string)} className='bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
        <option value="" disabled>Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select> */}
    </div>
  )
}

export default Select
