import React from 'react'
import Header from './components/Header/Header'
import Container from './components/UserProduct/Container.tsx'
import Footer from './components/Footer/Footer'
import AddProduct from './components/Products/AddProduct/AddProduct.tsx'
import TotalProduct from './components/Products/Total/TotalProduct.tsx'
import Users from './components/Users/Users.tsx'
import Category from './components/Category/Category.tsx'
import RegisterLoginPage from './pages/Register_login/register_login_page.tsx'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Register from './components/Register/Register.tsx'
import Admin from './pages/admin/Admin.tsx'
import CategoryUser from './components/CategoryUser/CategoryUser.tsx'
import User from './pages/user/User.tsx'
export default function App() {
  console.log(111,import.meta.env.VITE_KEY_FIREBASE);

  return (
    <div>
      <Routes>
          <Route path='/user' element={<User></User>}>
              <Route  index element={<CategoryUser></CategoryUser>}></Route>
              <Route path='products/:find?' element={<Container></Container>}></Route>
          </Route>
          <Route path='/page' element={<RegisterLoginPage></RegisterLoginPage>}>
              <Route path='login' element={<Login></Login>} ></Route>
              <Route path='register' element={<Register></Register>}></Route>
          </Route>
          <Route path='/admin' element={<Admin></Admin>}>
              <Route   element={<Users></Users>}></Route>
              <Route path='allProducts' element={<TotalProduct></TotalProduct>}></Route>
              <Route path='categories' element={<Category></Category>}></Route>
              <Route path='product/:action/:productId?' element={<AddProduct></AddProduct>}></Route>
          </Route>
      </Routes>
    </div>
  )
}

