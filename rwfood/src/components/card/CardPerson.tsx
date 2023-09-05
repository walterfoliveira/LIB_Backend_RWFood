import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import toast from 'react-hot-toast'
import ModalFormItem from '../../components/modal/ModalFormItem'
import ModalDialog from '../modal/ModalDialog'
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { HiOutlinePhone, HiTruck, HiUser, HiOutlineIdentification } from 'react-icons/hi'

import { IItem } from "../../interfaces/company";
import { IPerson } from '../../interfaces/person'
import personService from '../../services/personService'



//https://react-icons.github.io/react-icons/icons?name=hi
//https://tailwindcss.com/docs/customizing-colors
//https://tailwindcss.com/docs/background-color

type Props = {
  item: IPerson;
  itemList: IPerson[];
  isItem: number;
  setItemList: React.Dispatch<React.SetStateAction<IPerson[]>>;
}

const CardPerson = ({ item, itemList, setItemList, isItem }: Props) => {

  const [respModal, setRespModal] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalDialogIsOpen, setModalDialogIsOpen] = useState(false)
  const [dataSource, setDataSource] = useState(item)

  //moment.locale('pt-br')
  //const formatDate = Moment().locale('pt-br').format('MMM Do YY')
  const formatDate = Moment().locale('pt-br').format('LL')
  var localLocale = Moment().locale('pt-br')
  localLocale.format('LL') // dimanche 15 juillet 2012 11:01
  const formatDate2 = localLocale.format('DD/MMM/YYYY')

  //Para formatar Valor
  // totalPago.toLocaleString('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   })

  const openModalDialog = () => {
    setModalDialogIsOpen(true)
  }

  const closeModalDialog = () => {
    setModalDialogIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleRemove = async (confimado: boolean) => {
    setRespModal(!respModal);

    if (confimado) {
      //faz requisicao de Delete 
      var response = false;

      response = await personService.deletePersonById(1, dataSource.id as number)

      if (response) {

        //remover o item da lista 
        const newListItem: IPerson[] = itemList.filter((ls) => ls.id !== item.id);
        setItemList(newListItem);

        //console.log('Operação realizada com sucesso!');
        toast.success('Operação realizada com sucesso!')
        return
      }

      //console.log('Falha ao executar essa operação!');
      toast.error('Falha ao executar essa operação!')
    }
  }

  const handleEdit = async (confimado: boolean, data: IItem) => {
    setRespModal(!respModal);

    if (confimado) {
      //console.log('data: ' + JSON.stringify(data));

      //Edita Model Complement
      const editModel: IPerson = { ...dataSource, name: data.name }
      //setDataSource({ ...dataSource, name: data.name })

      //faz requisicao de Update (PUT) 
      var response = await personService.updatePerson(editModel)

      //console.log('response: ' + response);
      if (response === dataSource.id) {
        //atualiza o State: dataSource
        setDataSource(data as IPerson);

        //console.log('Operação realizada com sucesso!');
        toast.success('Operação realizada com sucesso!')
        return
      }

      toast.error('Falha ao executar essa operação!')
    }
  }

  useEffect(() => {
    closeModal()
  }, [respModal, dataSource])

  // useEffect(() => {
  //     //console.log('card atualizado: ' + dataSource.name);
  // }, [dataSource]);

  return (
    <div className="max-w-md space-x-0 bg-white rounded-xl shadow-md overflow-hidden shadow-md hover:scale-105 transition transform duration-300 cursor-pointer">
      <div className="rounded-full z-30 p-1 inline-block absolute mx-4 mt-2">
        {/* https://flowbite.com/icons/ */}
        {/* <img
          alt="user 1"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-12 w-12 rounded-full border-2 border-blue object-cover object-center hover:z-10 focus:z-10"
        /> */}

        {item.type === 1 && <HiTruck size={36} className="text-2x1 text-gray-400" />}
        {item.type === 2 && <HiUser size={36} className="text-2x1 text-gray-400" />}

        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg> */}

        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        </svg> */}


        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg> */}

        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M1 9h14M2 5h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        </svg> */}

        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg> */}

        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
        </svg> */}

      </div>

      <div className="text-right p-4">
        <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">{formatDate2}</span>
      </div>

      <div className="border-t border-gray-200 z-20 w-full mt-2"></div>

      <div className="md:flex">
        {/* <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src="https://source.unsplash.com/100x100?macbook"
                        alt="Modern building architecture"
                    />
                </div> */}
        <div className="p-5">
          <div >

            <h2 className="flex flex-row text-xl font-bold text-gray-700 font-semibold mb-2">{dataSource.name}</h2>

            <div className="flex flex-row items-center text-slate-500 mb-1">
              <div>
                <HiOutlinePhone fontSize={23} />
              </div>
              <div className="ml-1">{dataSource.cell}</div>
            </div>

            <div className="flex flex-row items-center text-slate-500 mb-5">
              <div>
                <HiOutlineIdentification fontSize={23} />
              </div>
              <div className="ml-1">{dataSource.document}</div>
            </div>

          </div>
          <div className="flex flex-row text-slate-500">

            <div onClick={openModal} className="has-tooltip border-2 border-gray-200 rounded-full h-9 w-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 mr-3">
              <FaPencilAlt size={16} className="text-2xl text-gray-400" />
              <span className='tooltip rounded transition duration-150 ease-in-out shadow-lg p-1 bg-gray-100 text-gray-500 absolute z-5 invisible inline-block px-3 py-1 -mt-20 mr-5'>Editar</span>
            </div>

            <div onClick={openModalDialog} className="has-tooltip border-2 border-gray-200 rounded-full h-9 w-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 mr-3">
              <FaRegTrashAlt size={16} className="text-2xl text-gray-400" />
              <span className='tooltip rounded transition duration-150 ease-in-out shadow-lg p-1 bg-gray-100 text-gray-500 absolute z-5 invisible inline-block px-3 py-1 -mt-20 mr-5'>Excluir</span>
            </div>
            <div className="w-3/4 h-9 w-9" />

          </div>

        </div>

      </div>


      {/* <ModalForm
        title="Empresa"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirmed={handleEdit}
       dataSource={dataSource}
      >
      </ModalForm> */}

      <ModalFormItem
        title="Complemento"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirmed={handleEdit}
        dataSource={dataSource}
        isCloseEsc={false}
        isCloseOnOverlay={false}
        isItem={1}
      ></ModalFormItem>

      <ModalDialog
        title="Aviso de Sistema"
        titleButton1="Sim"
        titleButton2="Não"
        isOpen={modalDialogIsOpen}
        isCloseEsc={false}
        isCloseOnOverlay={false}
        setIsOpen={setModalDialogIsOpen}
        onRequestClose={closeModalDialog}
        onConfirmed={handleRemove}
      //icon={<FaInfoCircle className="mr-2 text-2xl text-gray-600" />}
      //style={customStyles}
      //onAfterOpen={afterOpenModal}
      //onAfterSaveModal={afterSaveModal}
      >

        <div className="grid grid-flow-row auto-rows-max">
          <div className="flex items-baseline">
            <span className="font-bold text-gray-500 text-xl font-semibold">Identificador: </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{item.id.toString().padStart(3, '0')}</span>
          </div>
          <div className="flex items-baseline">
            <span className="font-bold text-gray-500 text-xl font-semibold">
              {isItem === 1 && 'Complemento:'}
              {isItem === 2 && 'Categoria:'}
              {isItem === 3 && 'Entregador:'}
              {isItem === 4 && 'Garçon:'}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{item.name}</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold font-bold text-gray-700 mt-4 mb-2">

              {isItem === 1 && 'Deseja mesmo excluir este Complemento?'}
              {isItem === 2 && 'Deseja mesmo excluir esta Categoria?'}
              {isItem === 3 && 'Deseja mesmo excluir este Entregador?'}
              {isItem === 4 && 'Deseja mesmo excluir este Garçon?'}
            </h2>
          </div>

        </div>

      </ModalDialog>
    </div>
  )
}

export default CardPerson

