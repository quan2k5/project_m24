import React, { useEffect, useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllUsers, testBlock } from '../../store/reducers/usersReducer';
import { useDispatch } from 'react-redux';
import Password from 'antd/es/input/Password';
export default function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userList=useSelector((state:any)=>state.users.allUsers);
    const [user,setUser]:any=useState<any>({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''});
    const [error,setError]:any=useState<any>({email:'',Password:''});
    const location=useLocation();
    useEffect(()=>{
        dispatch(getAllUsers());
        setUser({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''})
        setError({email:'',password:''});
    },[])
    useEffect(()=>{
        if(location.state!=null){
            setUser(location.state);
        }
    },[]);
    const handleChange=(event:any)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value});
    }
    const checkWithUserList=()=>{
        const find=userList.find((e:any)=>{
            return e.email===user.email;
        })
        if(find){
            if(find.password===user.password){
                setError({email:'',password:''});
                return find.id;
            }
            if(user.password===''){
                setError({email:'',password:'Mật khẩu không đc để trống'})
            }else{
                setError({email:'',password:'Mật khẩu của bạn không đúng'})
            }
            return -1;
        }else{
            if(user.email===''){
                setError({password:'',email:'Email không đc để trống'})
            }else{
                setError({password:'',email:'Email của bạn không đúng'})
            }
        }
        return -1;
    }
    const handleSubmit=()=>{

        if(checkWithUserList()!==-1){
           const obj={
                id:checkWithUserList(),
                active:true,
           }
           dispatch(testBlock(obj));
           navigate('/user');
        }
    }
  return (
    <div className='login_form'>
        <h3 className='login-form-heading'>Đăng nhập</h3>
        <div className='login-form-group'>
            <div className="login-form-item">
                <input name='email' value={user.email} type="text" placeholder='Email của bạn' onChange={handleChange} />
                {error.email && <div className='message_error'>{error.email}</div>}
            </div>
            <div className='login-form-item'>
                <input name='password' value={user.password} type="text" placeholder='Mật khẩu của bạn' onChange={handleChange} />
                {error.password && <div className='message_error'>{error.password}</div>}
            </div>
            <div className='login-form-item'>
                <select name="" id="">
                    <option value="">User</option>
                    <option value="">Admin</option>
                </select>
            </div>
        </div>
        <div  className='login-btn-item'>
            <button className='login_btn' onClick={handleSubmit}>Đăng nhập</button>
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
