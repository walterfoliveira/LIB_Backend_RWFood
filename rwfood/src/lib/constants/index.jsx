import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const URL_BASE = 'http://bkend.rwconsultoria.com.br:20021/api/v1/api/'

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
        key: 'orders',
        label: 'Pedidos',
        path: '/orders',
        icon: <HiOutlineShoppingCart size={28} />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers size={28} />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <HiOutlineDocumentText size={28} />
    },
    {
        key: 'messages',
        label: 'Menssagens',
        path: '/messages',
        icon: <HiOutlineAnnotation size={28} />
    },
    {
        key: 'company',
        label: 'Empresas',
        path: '/company',
        icon: <HiOutlineUsers size={28} />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog size={28} />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle size={28} />
    }
]
