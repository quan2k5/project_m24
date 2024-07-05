import React from 'react'
import './Container.scss'
import { FilterOutlined,DownOutlined,StarFilled } from '@ant-design/icons'
export default function Container() {
  return (
    <div className='app_container'>
        <div className="grid">
        <div className='grid_row'>
            <div className='grid-column-2'>
                <nav className='firstFilter_nav'>
                    <h4>
                        <FilterOutlined className='firstFilter-icon' />
                        Bộ lọc tìm kiếm
                    </h4> 
                    <ul className='firstFilter-list'>
                        <li className='firstFilter-item'>
                            <input type="checkbox" className='checkCategory' />
                            <span>Đồ trẻ em</span>
                        </li>
                        <li className='firstFilter-item'>
                            <input type="checkbox" className='checkCategory' />
                            <span>quần dài</span>
                        </li>
                    </ul> 
                </nav>
            </div>
            <div className='grid-column-10'>
                <div className='secondFilter_div'>
                    <span className='title_filter'>Sắp xếp theo</span>
                    <button className='btn'>Liên quan</button>
                    <button className='btn'>Mới nhất</button>
                    <button className='btn'>Bán chạy</button>
                    <div className="select_price">
                         <span className='select_title'>Gía</span>
                         <DownOutlined className='selectPrice_icon' />
                         <ul className='price_list'>
                            <li className='price_list_item'>Gía:thấp đến cao</li>
                            <li className='price_list_item'>Gía:cao đến thấp</li>
                         </ul>
                    </div>
                </div>
                <div className='home_products'>
                    <div className='grid_row'>
                        <div className='grid-column-2-4'>
                            <div className='home-product-item'>
                                <div className='homeproduct-img' style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1688497831040-753ea826d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww')`}}></div>
                                <h4 className='homeproduct-name'>áo thun polo nam</h4>
                                <div className='homeproduct-price'>
                                    <span className='homeprice-old'>1200000 đ</span>
                                    <span className='homeprice-current'>999000đ</span>
                                </div>
                                <div className='homeproduct-bottom'>
                                    <div className='homeproduct-rating'>
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon'/>
                                        <StarFilled className='star-icon'/>
                                    </div>
                                    <div className='homeproduct-buy'>Đã bán 100</div>
                                </div>
                                <div className='homeproduct_discount'>
                                    <div className='discount_number'>10%</div>
                                    <div className='discount_label'>GIẢM</div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}
