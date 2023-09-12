import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Company from './pages/Company'
import Complement from './pages/Complement'
import Category from './pages/Category'
import DeliveryMan from './pages/DeliveryMan'
import Users from './pages/Users'

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Customers from './pages/Customers'

/*Para usar parametro na pagina

https://reactrouter.com/en/main/hooks/use-params
*/

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="company" element={<Company />} />
                    <Route path="complement" element={<Complement />} />
                    <Route path="category" element={<Category />} />
                    <Route path="deliveryman" element={<DeliveryMan typePage={1} />} />
                    <Route path="waiter" element={<DeliveryMan typePage={2} />} />
                    <Route path="users" element={<Users />} />
                    <Route path="customers" element={<Customers />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
