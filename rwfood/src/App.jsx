import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Company from './pages/Company'
import Complement from './pages/Complement'
import Category from './pages/Category'
import Person from './pages/Person'
import DeliveryMan from './pages/DeliveryMan'
import Users from './pages/Users'
import Profile from './pages/Profile'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Customers from './pages/Customers'
import { useState, useEffect } from 'react'

import autheticationService from './services/authenticationService'
import { clearStorage, getToken, saveToken } from './facades/localStorage'
import Messages from './pages/Messages'

/*Para usar parametro na pagina

https://reactrouter.com/en/main/hooks/use-params
*/

function App() {
    const [logged, setLogged] = useState(true)

    useEffect(() => {
        var token = getToken()
        if (token !== null) {
            setLogged(true)
            //console.log('[getAuthenticationToken]: ' + token)
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={logged ? <Layout /> : <Login />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="company" element={<Company />} />
                    <Route path="complement" element={<Complement />} />
                    <Route path="category" element={<Category />} />
                    <Route path="deliveryman" element={<DeliveryMan typePage={1} />} />
                    <Route path="waiter" element={<Person typePage={2} />} />
                    <Route path="users" element={<Users />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="messages" element={<Messages />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App
{
    /* 
https://reactrouter.com/en/main/hooks/use-navigate
<Route path="contacts/:id" element={<Contact />} />
<Route
  path="contacts/:id/edit"
  element={<EditContact />}
/> */
}
