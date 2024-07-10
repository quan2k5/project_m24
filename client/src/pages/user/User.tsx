import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CategoryUser from '../../components/CategoryUser/CategoryUser'
import { Outlet } from 'react-router-dom'
export default function User() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
