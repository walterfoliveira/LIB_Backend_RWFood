import { trace } from 'console'
import { type } from 'os'
import React, { Component, useRef, useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido!'
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido'
  }
}


type Props = {
  id: string;
  label: string;
  value: string;

  type: string;
  className: string;
  //props: string | JSX.Element | JSX.Element[];
  place: string;
  disabled: boolean;
  required: boolean;
  focused: boolean;
  //children: string | JSX.Element | JSX.Element[];

  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ id, label, type, value, setValue, className, place, disabled, required, focused }: Props) => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<null | string>(null)


  React.useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const validate = (strValue: string) => {
    //Para campo que nao precisa de validacao
    //if (type === false) return true
    console.log('validate', strValue);

    if (strValue.length === 0) {
      setError('Preencha um valor!')
      return false
    } else if (!types.cep.regex.test(strValue)) {
      setError(types.cep.message)
      return false
    } else {
      console.log('sempre ELSE', error)
      setError(null)
      return true
    }
  }

  const handleChange = (strValue: string) => {
    console.log('Error', error)
    validate(strValue);
    setValue(strValue)
  }


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      console.log('Clicou em ENTER')
    }
    if (e.key == 'Escape') {
      console.log('Clicou em ESC')
      handleLimpaInput();
    }
  };

  const handleLimpaInput = () => {
    setValue('')
  };

  return (
    <div className="mb-4">
      <div className="relative">
        {/* <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" /> */}
        <div >
          <label htmlFor={id} className="block text-gray-700 text-slate-500 font-bold mb-2">{label}</label>
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            //onChange={({ target }) => setValue(target.value)}
            onChange={({ target }) => handleChange(target.value)}
            onKeyUp={handleKeyPress}
            className={className}
            placeholder={place}
            disabled={disabled}
            required={required}
            ref={focused ? inputRef : null}
          // {...children}
          />
          {error && <span className='text-orange-400 font-semibold'>{error}</span>}
        </div>

      </div>



    </div>
  )
}

export default Input
