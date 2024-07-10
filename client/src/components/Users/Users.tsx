import React from 'react'
import Pagination from '../Pagination/Pagination'
import { SearchOutlined,PlusCircleOutlined,CloseOutlined,UserOutlined } from '@ant-design/icons'
import './Users.scss'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { getUsers,totalValidateUsers,addUsers,getAllUsers,testBlock } from '../../store/reducers/usersReducer'
import { useState ,useEffect} from 'react'
import queryString from 'query-string'
import { ValidationUser } from './ValidationUser'
import { Switch } from "antd";
let timeout:any=null;
export default function Users() {
    const dispatch=useDispatch();
    const usersList:any=useSelector((state:any)=>state.users.users);
    const totalUsers:any=useSelector((state:any)=>state.users.totalValidateUsers);
    const allUsers:any=useSelector((state:any)=>state.users.allUsers);
    const [employee,setEmployee]:any=useState<any>({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''});
    const [errors,setErrors]:any=useState<any>({nameAccount:'',email:'',password:'',authPassword:''})
    const [search,setSearch]:any=useState<string>('');
    const [select,setSelect]:any=useState<string>('mặc định');
    const [modal,setModal]=useState<boolean>(false);
    const [filter,setFilter]=useState<any>({
        _limit:2,
        _page:1,
        nameAccount_like:'',
        _sort:'',
        _order:'',
    });
    useEffect(()=>{
        dispatch(getAllUsers());
    },[])
    useEffect(()=>{
        const {_limit,_page,...others}=filter;
        const paramString1=queryString.stringify(filter);
        const paramString2=queryString.stringify(others);
        dispatch(getUsers(paramString1));
        dispatch(totalValidateUsers(paramString2));
    },[filter]);
    const handleSearchChange=(event:any)=>{
        clearTimeout(timeout);
        setSearch(event.target.value);
        timeout=setTimeout(()=>{
            setFilter({...filter,nameAccount_like:event.target.value,_page:1})
        },250);    
    }
    const handleNextPage = () => {
        setFilter({...filter,_page:filter._page+1});
    };
    const handlePrevPage = () => {
        setFilter({...filter,_page:filter._page-1});
    };
    const handleLimitItems=(event:any)=>{
        setFilter({...filter,_page:1,_limit:Number(event.target.value)})
    }
    const handleBtnPage=(numberPage:number)=>{
        setFilter({...filter,_page:numberPage})
    } 
    const handleChangeSelected=(event:any)=>{
        setSelect(event.target.value);
        if(event.target.value==='mặc định'){
            setFilter({...filter,_sort:'',_order:''})
        }else if(event.target.value==='tăng dần'){
            setFilter({...filter,_sort:'nameAccount',_order:'asc'});
        }else{
            setFilter({...filter,_sort:'nameAccount',_order:'desc'})
        }
    }
    const handleChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const name =event.target.name;
        const value=event.target.value;
        setEmployee({...employee,[name]:value})
    }
    const handleAddEmployee=(event:any)=>{
        event.preventDefault();
        const currentError=ValidationUser(employee,allUsers);
        setErrors(currentError);
        if(currentError.nameAccount=='' &&currentError.email=='' && currentError.password=='' && currentError.authPassword==''){
            const { authPassword, ...others }=employee;
            dispatch(addUsers(others));
            setFilter({...filter, nameAccount_like:'',_sort:'',_order:''});
            setSearch('');
            setSelect('mặc định');
            setModal(false);
            setEmployee({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''})
        }
    }
    const closeForm=()=>{
        setErrors({nameAccount:'',email:'',password:'',authPassword:''});
        setModal(false);
        setEmployee({nameAccount:'',email:'',password:'',authPassword:'',active:false,roles:'user',block:false,img:''})
    }
    const checkBlock=(id:number)=>{
        const item:any= usersList.find((element:any) => {
            return id===element.id;
        });
        if(item.block){
            return true;
        }else{
            return false;
        }
    }
    const handleBlock=(item:any)=>{
        const newItem:any={...item};
        newItem.block=!newItem.block
        dispatch(testBlock(newItem));
    }
  return (
    <div className='users_management_part'>
                <div className='header_totalUsers'>
                    <h3 className='title_totalUsers'>Danh sách Users</h3>
                    <button onClick={()=>{setModal(!modal)}} className='addEmployee_btn'>
                        <PlusCircleOutlined className='plusCircle_icon' />
                        <span>Thêm người dùng</span>
                    </button>
                </div>
                <div className='mainTotal_Users_part'>
                    <h4 className='users_title'>Tất cả Users</h4>
                    <div className='headerActions_users'>
                        <select value={select} className='filter_users' name="" id="" onChange={handleChangeSelected}>
                            <option value="mặc định">Mặc định</option>
                            <option value="tăng dần">Sắp xếp theo tên-tăng dân</option>
                            <option value="giảm dần">Sắp xếp theo tên giảm dần</option>
                        </select>
                        <div className='search_users_part'>
                            <SearchOutlined className='search_icon' />
                            <input value={search} className='search_users_input' type="text" placeholder='Tìm kiếm...' onChange={handleSearchChange}   />
                        </div>
                    </div>
                    <table className='table_users'>
                        <thead>
                            <tr className='title_table'>
                                <th className='titleUsers_item'>Id</th>
                                <th className='titleUsers_item'>Name</th>
                                <th className='titleUsers_item'>Email</th>
                                <th className='titleUsers_item'>Role</th>
                                <th className='titleUsers_item'>Chặn</th>
                            </tr>
                        </thead>
                        <tbody className='body_UsersTable'>
                            {usersList.map((item:any)=> {
                                return <tr className='detailUser_item' key={item.id}>
                                <td>{item.id}</td>
                                <td className='nameUsers_item'>
                                    <div className='picture_userItem'>
                                        <img src="https://media.istockphoto.com/id/1461285334/photo/empty-beige-wall-with-a-wooden-drawer-and-accessories.webp?b=1&s=170667a&w=0&k=20&c=QnQVHjYYeqCoRokhr87TwrdobZ-FLoQwazbbjSNxBnU=" alt="" />
                                    </div>
                                    <span>{item.nameAccount}</span>
                                </td>
                                <td>{item.email}</td>
                                <td>{item.roles}</td>
                                <td>
                                    <Switch checked={checkBlock(item.id)} onChange={()=>{handleBlock(item)}}></Switch>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </table>
                    <Pagination 
                        pagination={filter}
                        total={totalUsers}
                        handleBtnPage={handleBtnPage}
                        handleNextPage={handleNextPage}
                        handleLimitItems={handleLimitItems}
                        handlePrevPage={handlePrevPage}
                    ></Pagination>
                </div>
        {modal && <div className='manageUser_modal'>
            <form action="" className='addEmployee__form'>
                <div className='closeEmployee_form' onClick={closeForm}>
                    <CloseOutlined className='closeForm_icon' />
                </div>
                <h4 className='addEmployee_title'>Thêm người dùng</h4>
                <div className='addEmployee_item'>
                    <label htmlFor="">Tên tài khoản</label>
                    <br />
                    <input name='nameAccount' type="text" value={employee.nameAccount} onChange={handleChangeInput} />
                    {errors.nameAccount&&<div  className='message_error'>{errors.nameAccount}</div>}
                </div>
                <div className='addEmployee_item'>
                    <label htmlFor="">Email</label>
                    <br />
                    <input  name='email' type="text" value={employee.email} onChange={handleChangeInput} />
                    {errors.email&&<div  className='message_error'>{errors.email}</div>}
                </div>
                <div className='addEmployee_item'>
                    <label htmlFor="">Mật khẩu</label>
                    <br />
                    <input name='password' type="text" value={employee.password} onChange={handleChangeInput} />
                    {errors.password&&<div  className='message_error'>{errors.password}</div>}
                </div>
                <div className='addEmployee_item'>
                    <label htmlFor="">Xác nhận mật khẩu</label>
                    <br />
                    <input name='authPassword' type="text" value={employee.authPassword} onChange={handleChangeInput}/>
                    {errors.authPassword&&<div className='message_error'>{errors.authPassword}</div>}
                </div>
                <div className='addEmployee_item'>
                    <button className='addEmployee_btn' onClick={handleAddEmployee}>Thêm</button>
                </div>
            </form>
        </div>}
    </div>
  )
}
