import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
         <div className='footer-part'>
            <div className='grid'>
                <div className='grid_row'>
                    <div className='grid-column-2-4'>
                        <h3 className='footer_heading'>Chăm sóc khách hàng</h3>
                        <ul className='footer_list'>
                            <li className='footer_list_item'>Trung tâm trọ giúp</li>
                            <li className='footer_list_item'>Shoppee blog</li>
                            <li className='footer_list_item'>Shoppee Mall</li>
                        </ul>
                    </div>
                    <div className='grid-column-2-4'>
                        <h3 className='footer_heading'>giới thiệu</h3>
                        <ul className='footer_list'>
                            <li className='footer_list_item'>Gioi thiệu </li>
                            <li className='footer_list_item'>Tuyển dụng </li>
                            <li className='footer_list_item'>Điều khoản</li>
                        </ul>
                    </div>
                    <div className='grid-column-2-4'>
                        <h3 className='footer_heading'>Danh mục</h3>
                        <ul className='footer_list'>
                            <li className='footer_list_item'>Quần áo </li>
                            <li className='footer_list_item'>Mỹ phẩm </li>
                            <li className='footer_list_item'>Sức khỏe</li>
                        </ul>
                    </div>
                    <div className='grid-column-2-4'>
                        <h3 className='footer_heading'>Theo dõi trên</h3>
                        <ul className='footer_list'>
                            <li className='footer_list_item'>
                                <i className='bx bxl-facebook-circle'></i>
                                <span className='app'>Facebook</span>
                            </li>
                            <li className='footer_list_item'>
                                <i className='bx bxl-instagram-alt' ></i>
                                <span className='app'>Instagram</span>
                            </li>
                            <li className='footer_list_item'>
                                <i className='bx bxl-tiktok' ></i>
                                <span className='app'>Tiktok</span>
                            </li>
                        </ul>
                    </div>
                    <div className='grid-column-2-4'>
                        <h3 className='footer_heading'>Vào cửa hàng ứng dụng</h3>
                        <div className='footer_dowload'>
                            <img className='footer_qr' src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" alt="download_qr_code" ></img>
                            <div className='footer_dowload_apps'>
                               <div className=''><img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="app"></img></div> 
                               <div className='app_link'><img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="app"></img></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid_row'>
                    <p className='publish-ui'>Bản quyền thuộc về  Quân Lê</p>
                </div>
            </div>
        </div>   
  )
}
