import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { useNavigate, useLocation } from 'react-router-dom'

import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

import {
    HiOutlineBell,
    HiOutlineSearch,
    HiOutlineChatAlt,
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

import classNames from 'classnames'
import { GlobalContext } from '../../contexts/GlobalContext'

// key: 'dashboard',
// label: 'Dashboard',
// path: '/',
// icon: <HiOutlineViewGrid />

export default function Header() {
    const globalContext = useContext(GlobalContext)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [rota, setRota] = useState('')
    const [icon, setIcon] = useState('')

    const pathName = pathname.replace('/', '') === '' ? 'dashboard' : pathname.replace('/', '')

    useEffect(() => {
        DASHBOARD_SIDEBAR_LINKS.map((item) => {
            if (item.key === pathName) {
                setIcon(item.icon)
                setRota(item.label)
            }
        })

        DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
            if (item.key === pathName) {
                setIcon(item.icon)
                setRota(item.label)
            }
        })
    }, [pathName])

    const handleSair = () => {
        globalContext?.logout()
        navigate('/login')
    }

    const handleMessage = () => {
        navigate('/messages')
    }

    return (
        <div className="bg-gray-200 h-16 px-4 flex items-center justify-between border-1 border-slate-100">
            <div className="relative ml-0">
                {/* <Inputsearch /> */}

                <div className="flex flex-row text-2xl font-bold text-gray-700 font-bold">
                    {<div className="mr-2">{icon}</div>}
                    {rota}
                </div>
            </div>

            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Mensagens</strong>
                                        <div
                                            onClick={() => handleMessage()}
                                            className="hover:cursor-pointer mt-2 py-1 text-sm"
                                        >
                                            Nenhuma mensagem.
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 cursor-pointer focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Notificações</strong>
                                        <div
                                            onClick={() => handleMessage()}
                                            className="hover:cursor-pointer mt-2 py-1 text-sm"
                                        >
                                            Nenhuma notificação.
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                <span className="sr-only">Marc Backes</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/profile')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Meu Perfil
                                    </div>
                                )}
                            </Menu.Item>
                            {/* <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/settings')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Configuração
                                    </div>
                                )}
                            </Menu.Item> */}
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => handleSair()}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Sair
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
