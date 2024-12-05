import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Notification from '../../Notificationed/Notification';
import lib, { BellOutlined, QuestionOutlined } from '@ant-design/icons';
import './TopHeader.scss'
import { useSelector } from 'react-redux';
export default function Navbar() {
    const userLogged=useSelector((state:any)=>state.users.userLogged);
    const [hover, setHover] = useState<boolean>(false);
    return (
        <>
            <nav className='header_navbar'>
                <ul className='navList'>
                    <li className='navlist_item'>Vào cửa hàng ứng dụng</li>
                    <li className='navlist_item'>Kết nối</li>
                </ul>
                <ul className='navList'>
                    <li
                        className='navlist_item'
                        onMouseEnter={() => { setHover(true); }}
                        onMouseLeave={() => { setHover(false); }}
                    >
                        <Link className='link-item' to='/notification'>
                            <BellOutlined /> Thông báo
                        </Link>
                        {hover && (
                            <div className='notify_board'>
                                {/* <Notification /> */}
                            </div>
                        )}
                    </li>
                    <li className='navlist_item'>
                        <Link className='link-item' to='/vladimir putin/russia'>
                            <QuestionOutlined /> Trợ giúp
                        </Link>
                    </li>
                    {userLogged && <li className='navlist_item'>{userLogged.nameAccount}</li>}
                    {!userLogged &&  <><li className='navlist_item'>Đăng ký</li>
                    <li className='navlist_item'>Đăng nhập</li></>}
                </ul>
            </nav>
        </>
    );
}