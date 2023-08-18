import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import CustomButton from '../components/CustomButton'
import { openNotification } from '../facades/notification'
import { FaInfoCircle, FaSync, FaFolderPlus, FaRegAddressCard, FaFilter } from 'react-icons/fa'

import companyService from '../services/companyService'
import toast from 'react-hot-toast'

export default function Company() {
    const [empresaList, setEmpresaList] = useState([])
    const [empresa, setEmpresa] = useState([])
    const [loading, setLoading] = useState(true)
    const [seekList, setSeekList] = useState('')

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        toast.success('Empresa salvo com sucesso!')
    }

    const handleGetCompanyById = async () => {
        // var response = await GetById(1)
        // if (response.status === 400) {
        //     console.log('Erro:', response.statusText)
        //     return
        // }
        // setEmpresa(response.data)
        // console.log('dados', response.data)
        // setLoading(false)
    }

    const handleGetCompanyAll = async () => {
        setLoading(true)

        var response = await companyService.getAllCompany(1)
        if (response.status === 400) {
            console.log('Erro:', response.statusText)
            setLoading(false)
            return
        }
        setEmpresaList(response)
        setLoading(false)
    }

    useEffect(() => {
        handleGetCompanyAll()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center justify-center ml-5 mr-5 mb-5">
                <div className="w-full flex flex-row text-2xl text-gray-700 ">
                    <div className="w-full md:w-1/3">
                        <label className="block font-bold text-gray-700 text-xl font-bold mb-0" for="grid-city">
                            Filtrar
                        </label>
                        <div class="relative text-slate-500 focus-within:text-gray-400 ">
                            <span className="absolute inset-y-0 left-0 flex justify-center items-center pl-2">
                                <CustomButton
                                    icon={<FaFilter size={18} />}
                                    title=""
                                    onClick={() => alert('Search')}
                                    classcss="p-1 text-slate-500 focus:outline-none focus:shadow-outline flex justify-center"
                                />
                            </span>
                            <input
                                className="w-full max-w-md p-2.5 text-slate-500 border border-slate-200 rounded py-2 px-9 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                                id="grid-city"
                                type="search"
                                autocomplete="off"
                                placeholder="Pesquisar..."
                                maxlength="50"
                                value={seekList}
                                onChange={(e) => setSeekList(e.target.value)}
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
                    />

                    <CustomButton
                        icon={<FaSync size={23} />}
                        title="Atualizar"
                        onClick={handleGetCompanyAll}
                        classcss="flex flex-row bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded ml-2"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full justify-between mb-5">
                {loading && (
                    <div className="flex items-center">
                        <Loading label="Carregando" />
                    </div>
                )}

                {!loading && (
                    <div className="grid grid-cols-4 gap-4">
                        {empresaList.map((item) => (
                            <Card onRequestOpen={openModal} item={item} />
                        ))}
                    </div>
                )}
            </div>

            <Modal
                title="Modal Exemplo"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                icon={<FaInfoCircle className="mr-2 text-2xl text-gray-600" />}
            >
                <h2 className="text-xl font-semibold mb-4">Conteúdo do Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem, optio dolorem
                    accusantium fuga molestias nobis sequi autem ducimus laudantium beatae amet earum, quia reiciendis
                    corporis animi modi pariatur impedit!
                </p>
            </Modal>
        </div>
    )
}
