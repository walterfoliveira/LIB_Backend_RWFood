import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlineOfficeBuilding,
    HiOutlineTruck,
    HiOutlineUser,
    HiOutlineLogout,
    HiOutlineClipboardList
} from 'react-icons/hi'

//export const URL_BASE = 'http://bkend.rwconsultoria.com.br:20021/api/v1/api/'
export const URL_BASE = 'https://localhost:7113/api/'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid size={28} />
    },
    {
        key: 'products',
        label: 'Produtos',
        path: '/products',
        icon: <HiOutlineCube size={28} />
    },
    {
        key: 'customers',
        label: 'Clientes',
        path: '/customers',
        icon: <HiOutlineUsers size={28} />
    },
    {
        key: 'category',
        label: 'Categoria',
        path: '/category',
        icon: <HiOutlineDocumentText size={28} />
    },

    {
        key: 'complement',
        label: 'Complemento',
        path: '/complement',
        icon: <HiOutlineClipboardList size={28} />
    },
    {
        key: 'deliveryman',
        label: 'Entregador',
        path: '/deliveryman',
        icon: <HiOutlineTruck size={28} />
    },
    {
        key: 'waiter',
        label: 'Garçon',
        path: '/waiter',
        icon: <HiOutlineUser size={28} />
    }
    // {
    //     key: 'orders',
    //     label: 'Pedidos',
    //     path: '/orders',
    //     icon: <HiOutlineShoppingCart size={28} />
    // }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'company',
        label: 'Empresas',
        path: '/company',
        icon: <HiOutlineOfficeBuilding size={28} />
    },
    {
        key: 'users',
        label: 'Usuário',
        path: '/users',
        icon: <HiOutlineUsers size={28} />
    },
    {
        key: 'messages',
        label: 'Mensagens',
        path: '/messages',
        icon: <HiOutlineAnnotation size={28} />
    },
    // {
    //     key: 'settings',
    //     label: 'Configuração',
    //     path: '/settings',
    //     icon: <HiOutlineCog size={28} />
    // },
    // {
    //     key: 'support',
    //     label: 'Suporte',
    //     path: '/support',
    //     icon: <HiOutlineQuestionMarkCircle size={28} />
    // },
    {
        key: 'profile',
        label: 'Perfil',
        path: '/profile',
        icon: <HiOutlineUser size={28} />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LOGOUT = [
    {
        key: 'login',
        label: 'Sair',
        path: '/login',
        icon: <HiOutlineLogout size={28} />
    }
]
