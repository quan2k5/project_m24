import React, { useEffect, useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function Login() {
    const [user,setUser]:any=useState<any>({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''});
    const location=useLocation();
    useEffect(()=>{
        if(location.state!=null){
            setUser(location.state);
        }
    },[]);
    const handleChange=()=>{
        
    }
  return (
    <div className='login_form'>
        <h3 className='login-form-heading'>Đăng nhập</h3>
        <div className='login-form-group'>
            <div className="login-form-item">
                <input value={user.email} type="text" placeholder='Email của bạn' />
            </div>
            <div className='login-form-item'>
                <input value={user.password} type="text" placeholder='Mật khẩu của bạn' />
            </div>
            <div className='login-form-item'>
                <select name="" id="">
                    <option value="">User</option>
                    <option value="">Admin</option>
                </select>
            </div>
        </div>
        <div  className='login-btn-item'>
            <button className='login_btn'>Đăng nhập</button>
         </div>
         <div className='bottom_login'>
            <div className='top_bottom_login'>
                <div className='bottom-line'></div>
                <div className='or'><h4>Hoặc</h4></div>
            </div>
            <div className='center_bottom_login'>
                <div></div>
            </div>
            <div className='bottom_bottom_login'>Bạn ms biết đến Shoppee? <Link className='to_register_page' style={{color:'orange'}} to='/page/register'>Đăng ký</Link></div>
         </div>
    </div>
  )
}
