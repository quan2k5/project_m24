import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CategoryUser from '../../components/CategoryUser/CategoryUser'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllUsers, handleLogged } from '../../store/reducers/usersReducer'
export default function User() {
  const userList=useSelector((state:any)=>state.users.allUsers);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllUsers());
  },[])
  useEffect(()=>{
    const find=userList.find((e:any)=>{
      return e.active===true;
    })
    if(find){
      dispatch(handleLogged(find))
    }else{
      dispatch(handleLogged({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''}))
    }
  },[userList])
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
