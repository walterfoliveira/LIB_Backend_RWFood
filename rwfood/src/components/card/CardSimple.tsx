import React, { useState, useEffect, useContext } from 'react'
import Moment from 'moment'
import toast from 'react-hot-toast'
import ModalFormItem from '../../components/modal/ModalFormItem'
import ModalDialog from '../modal/ModalDialog'
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa'
import {
  HiDocumentText,
  HiClipboardList,

} from 'react-icons/hi'

import { GlobalContext } from '../../contexts/GlobalContext'
import { IItem } from "../../interfaces/company";
import { IComplement } from '../../interfaces/complement'
import { ICategory } from '../../interfaces/category'
import complementService from '../../services/complementService'
import categoryService from '../../services/categoryService'




//https://react-icons.github.io/react-icons/icons?name=hi
//https://tailwindcss.com/docs/customizing-colors
//https://tailwindcss.com/docs/background-color

type Props = {
  item: IComplement | ICategory;
  itemList: IComplement[];
  isItem: number;
  setItemList: React.Dispatch<React.SetStateAction<IComplement[] | ICategory[]>>;
}

const CardSimple = ({ item, itemList, setItemList, isItem }: Props) => {

  const globalContext = useContext(GlobalContext)

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

      if (isItem === 1) //complemento
        response = await complementService.deleteComplementById(1, dataSource.id as number)
      else
        if (isItem === 2) //categoria
          response = await categoryService.deleteCategoryById(1, dataSource.id as number)

      if (response) {

        //remover o item da lista 
        if (isItem === 1) {
          const newListItem: IComplement[] = itemList.filter((ls) => ls.id !== item.id);
          setItemList(newListItem);
        }
        else
          if (isItem === 2) {
            const newListItem: ICategory[] = itemList.filter((ls) => ls.id !== item.id);
            setItemList(newListItem);
            //category
            globalContext?.setCategory(newListItem)
            //console.log('[Context: Categoria]: ' + JSON.stringify(listCategoryCxt?.category))

          }

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
    console.log('handleEdit[confimado]', confimado)
    if (confimado) {
      //console.log('data: ' + JSON.stringify(data));

      //Edita Model Complement
      const editModel: IComplement | ICategory = { ...dataSource, name: data.name }
      //setDataSource({ ...dataSource, name: data.name })

      //faz requisicao de Update (PUT) 
      var response = 0;
      if (isItem === 1) //complemento
        response = await complementService.updateComplement(editModel)
      else
        if (isItem === 2) //category 
          response = await categoryService.updateCategory(editModel)


      //console.log('response: ' + response);
      if (response === dataSource.id) {
        //atualiza o State: dataSource
        setDataSource(editModel as IComplement | ICategory);

        //category
        if (isItem === 2) {
          //listCategoryCxt?.setCategory()
        }

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
        {isItem === 1 && <HiClipboardList size={36} className="text-2x1 text-gray-400" />}
        {isItem === 2 && <HiDocumentText size={36} className="text-2x1 text-gray-400" />}
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
        isItem={isItem}
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

export default CardSimple

