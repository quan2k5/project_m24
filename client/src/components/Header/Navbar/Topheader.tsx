import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Notification from '../../Notificationed/Notification';
import { BellOutlined, QuestionOutlined } from '@ant-design/icons';
import './TopHeader.scss'

export default function Navbar() {
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
                    <li className='navlist_item'>Đăng ký</li>
                    <li className='navlist_item'>Đăng nhập</li>
                </ul>
            </nav>
        </>
    );
}