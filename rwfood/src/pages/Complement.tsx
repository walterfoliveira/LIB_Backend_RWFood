import React, { useEffect, useState, useRef } from 'react'

import Loading from '../components/Loading'
import CustomButton from '../components/CustomButton'
import { FaSync, FaFolderPlus, FaFilter } from 'react-icons/fa'
import toast from 'react-hot-toast'

import ModalFormItem from '../components/modal/ModalFormItem'
import { IComplement } from '../interfaces/complement'
import { IItem } from "../interfaces/company";
import complementService from '../services/complementService'
import CardSimple from '../components/card/CardSimple'
import PrivateRoute from './PrivateRoute'

const Complement = () => {

  const initState: IComplement = {
    id: 0,
    idCompany: 1,
    status: 1,
    name: '',
    createdAt: '',

  }

  const [dataSource, setDataSource] = useState<IItem>({ id: initState.id, name: initState.name, cell: '' });

  //Trata o Modal
  const openModal = () => {
    setDataSource({ ...initState, cell: '' })
    setModalIsOpen(true)
  }

  const inputRef = useRef(null)

  const [itemList, setItemList] = useState<IComplement[]>([])
  const [itemListFilter, setItemListFilter] = useState<IComplement[]>([])

  const [loading, setLoading] = useState(true)
  const [filterInput, setFilterInput] = useState('')

  const [respModal, setRespModal] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  //Carrega a lista
  useEffect(() => {
    filterCompanyAll()
  }, [filterInput])

  //Carrega a lista
  useEffect(() => {
    setItemListFilter(itemList)
  }, [itemList])

  useEffect(() => {

    closeModal()

  }, [respModal])

  const handleInsert = async (confimado: boolean, data: IItem) => {
    setRespModal(!respModal)

    if (confimado) {

      //criar Model Complement
      const newModel: IComplement = { id: 0, status: 1, idCompany: 1, name: data.name, createdAt: '' }

      //faz requisicao de Insert (POST)      
      var response = await complementService.insertComplement(newModel)
      //console.log('response: ' + response);
      if (response > 0) {

        //Ajusta o model
        newModel.id = response;

        //Adiciono o card na LISTA
        setItemList([...itemList, newModel])
        //console.log('Operação realizada com sucesso!');
        toast.success('Operação realizada com sucesso!')
        return
      }

      toast.error('Falha ao executar essa operação!')
    }
  }


  const closeModal = () => {
    //setDataSource((dataSource) => initState)
    setModalIsOpen(false)
  }

  //Funcao de Busca da Lista por Filtro
  const filterCompanyAll = () => {
    if (filterInput !== '') {
      const res = itemList.filter(
        (item) =>
          item.name.toLowerCase().includes(filterInput.toLowerCase())
      )
      setItemListFilter(res)
      return
    }

    handleGetCompanyAll()
  }

  const handleGetCompanyAll = async () => {

    setFilterInput('')
    setLoading(true)

    var response = await complementService.getAllComplement(1)
    setItemList(response)
    setItemListFilter(response)
    setLoading(false)
    //if (inputRef.current) inputRef.current.focus()
  }

  return (
    <>
      <PrivateRoute />
      {/* filtro */}
      {!loading && (
        <div className="flex justify-between items-center justify-center ml-0 mr-0 mb-5">
          <div className="w-full flex flex-row text-2xl text-gray-700 ">
            <div className="w-full md:w-1/3">
              <label className="block font-bold text-gray-700 text-xl font-bold mb-0" htmlFor="grid-city">
                Filtrar
              </label>
              <div className="relative text-slate-500 focus-within:text-gray-400 ">
                <span className="absolute inset-y-0 left-0 flex justify-center items-center pl-2">
                  <CustomButton
                    icon={<FaFilter size={18} />}
                    title=""
                    onClick={() => filterCompanyAll()}
                    classcss="p-1 text-slate-500 focus:outline-none focus:shadow-outline flex justify-center"
                    children={""}
                  />
                </span>
                <input
                  className="w-full max-w-md p-2.5 text-slate-500 border border-slate-200 rounded py-2 px-9 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                  id="grid-city"
                  type="search"
                  ref={inputRef}
                  //autocomplete="off"
                  placeholder="Pesquisar..."
                  //maxlength="50"
                  value={filterInput}
                  onChange={(e) => setFilterInput(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row text-lg font-bold text-gray-700 font-semibold">
            <CustomButton
              icon={<FaFolderPlus size={23} />}
              title="Adicionar"
              onClick={openModal}
              classcss="flex items-center justify-center px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none  focus:ring-blue-400 rounded ml-2"
              children={""}
            />

            <CustomButton
              icon={<FaSync size={23} />}
              title="Atualizar"
              onClick={handleGetCompanyAll}
              classcss="flex flex-row bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded ml-2"
              children={""}
            />
          </div>
        </div>
      )}

      {/* visual carregando  */}
      {loading && <Loading label="Carregando" />}

      {/* Lista de Itens   */}
      {!loading && (
        <div className="flex flex-col w-full justify-between mb-5">
          <div className="grid grid-cols-4 gap-4">
            {itemListFilter.map((item) => (
              <CardSimple key={item.id} item={item} itemList={itemList} setItemList={setItemList} isItem={1} />
            ))}
          </div>
        </div>
      )}

      <ModalFormItem
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirmed={handleInsert}
        dataSource={dataSource}
        isCloseEsc={false}
        isCloseOnOverlay={false}
        isItem={1} //1-Complemento 2-Categoria 3-Entregador 4-Garcon 
      ></ModalFormItem>
    </>
  )
}

export default Complement
