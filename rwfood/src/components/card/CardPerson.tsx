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

  var localLocale = Moment().locale('pt-br')
  localLocale.format('LL') // dimanche 15 juillet 2012 11:01
  const formatDate2 = localLocale.format('DD/MMM/YYYY')

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
      //Edita Model Complement
      const editModel: IPerson = { ...dataSource, name: data.name, cell: data.cell as string, document: data.document as string }

      //faz requisicao de Update (PUT) 
      var response = await personService.updatePerson(editModel)

      if (response === dataSource.id) {
        setDataSource(data as IPerson);
        toast.success('Operação realizada com sucesso!')
        return
      }

      toast.error('Falha ao executar essa operação!')
    }
  }

  useEffect(() => {
    closeModal()
  }, [respModal, dataSource])

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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirmed={handleEdit}
        dataSource={dataSource}
        isCloseEsc={false}
        isCloseOnOverlay={false}
        isItem={item.type === 1 ? 3 : 4} //1-Complemento 2-Categoria 3-Entregador 4-Garcon 
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
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{dataSource.id.toString().padStart(3, '0')}</span>
          </div>
          <div className="flex items-baseline">
            <span className="font-bold text-gray-500 text-xl font-semibold">
              {isItem === 1 && 'Complemento:'}
              {isItem === 2 && 'Categoria:'}
              {isItem === 3 && 'Entregador:'}
              {isItem === 4 && 'Garçon:'}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{dataSource.name}</span>
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

