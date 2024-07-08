import React from 'react'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import AddProduct from './components/Products/AddProduct/AddProduct.tsx'
import TotalProduct from './components/Products/Total/TotalProduct.tsx'
import Users from './components/Users/Users.tsx'
import Category from './components/Category/Category.tsx'
import RegisterLoginPage from './pages/Register_login/register_login_page.tsx'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Register from './components/Register/Register.tsx'
export default function App() {
  console.log(111,import.meta.env.VITE_KEY_FIREBASE);
  return (
    <div>
      <Routes>
          <Route path='/page' element={<RegisterLoginPage></RegisterLoginPage>}>
              <Route path='login' element={<Login></Login>} ></Route>
              <Route path='register' element={<Register></Register>}></Route>
          </Route>
      </Routes>
      {/* <Header></Header>
      <Container></Container>
      <Footer></Footer>  */}
       {/* <AddProduct></AddProduct> */}
      {/* <TotalProduct></TotalProduct> */}
      {/* <Users></Users> */}
      <Category></Category>
    </div>
  )
}

