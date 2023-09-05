import React, { useState } from 'react'
import Input from '../shared/Input'

type Props = {
  type: number;
  idItem: string;
  item: string;
  onClose: () => void;
}

const Form = ({ type, idItem, item }: Props) => {

  //Fields - State
  const [id, setId] = useState<string>(idItem);
  const [idCompany, setIdCompany] = useState<number>(1);
  const [status, setStatus] = useState<number>(1);
  const [createdAt, setCreatedAt] = useState<string>('');
  const [name, setName] = useState<string>(item);

  //
  const [fieldForm, setFieldForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    contato: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(fieldForm);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFieldForm({ ...fieldForm, [id]: value })
  }

  const InputField = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
      place: 'Nome'
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      place: 'E-mail'
    },
    {
      id: 'telefone',
      label: 'Telefone',
      type: 'tel',
      place: 'Telefone'
    },
    {
      id: 'celular',
      label: 'Celular',
      type: 'tel',
      place: 'Celular'
    },
    {
      id: 'contato',
      label: 'Contato',
      type: 'text',
      place: 'Contato'
    },
  ];

  return (

    <div className="w-full">

      <form className='bg-white rounded  pt-6 pb-8 mb-4' onSubmit={handleSubmit}>

        <div className="block text-2xl text-gray-700 text-slate-500 font-bold mb-2 p-8">
          {idItem === '0' ? 'Novo Item' : 'Editando Item'}

        </div>

        <div className="mb-4">
          <Input
            type='text'
            id='id'
            label='Identificador'
            place='Identificador'
            value={id}
            setValue={setId}
            disabled={true}
            className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full:1/3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>
        <div className="mb-4">
          <Input
            type='text'
            id='name'
            label='Nome'
            place='Nome'
            value={name}
            setValue={setName}
            disabled={false}
            className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>

      </form>
    </div>



  )
}

export default Form
