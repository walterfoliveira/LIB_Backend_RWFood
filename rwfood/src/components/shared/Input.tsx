import { type } from 'os'
import React, { Component } from 'react'

type Props = {
  id: string;
  label: string;
  value: string;
  place: string;
  type: string;
  className: string;
  disabled: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ id, label, place, type, value, setValue, className, disabled }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-slate-500 font-bold mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={place}
        onChange={({ target }) => setValue(target.value)}
        className={className}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
