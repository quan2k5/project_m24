import React from 'react'
import './CategoryUser.scss'
import { StarFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
export default function CategoryUser() {
  const navigate=useNavigate();
  const selectCategory=()=>{
    console.log('run');
    const name='quan ao';
    navigate(`/user/products/${name}/280119`);
  }
  return (
   <div className='top_UserCotainner'>
    <div className="grid">
      <div className="grid_row">
            <div className='grid-column-2'>
                <nav className='category_user_nav'>
                    <h4>
                        Danh mục
                    </h4> 
                    <ul className='category_user_list'>
                        <li onClick={selectCategory} className='categoryUser-item'>
                          <span>đồ điện tử</span>  
                        </li>
                        <li onClick={selectCategory} className='categoryUser-item'>
                          <span>đồ điện tử</span>  
                        </li>
                        <li onClick={selectCategory} className='categoryUser-item'>
                          <span>đồ điện tử</span>  
                        </li>
                        <li onClick={selectCategory} className='categoryUser-item'>
                          <span>đồ điện tử</span>  
                        </li>
                        <li onClick={selectCategory} className='categoryUser-item'>
                          <span>đồ điện tử</span>  
                        </li>
                    </ul> 
                </nav>
            </div>
            <div className='grid-column-10'>
              <div className='userSlider_part'>
                <div className='mainSlider_part'>
                  <img className='slider_img' src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/38/39/68/3c61414b244491ae9afc169739747ec1.jpg.webp" alt="" />
                  <img className='slider_img' src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/ab/dd/0c/6273756782aaf91839d17dc67c1d6c7b.png.webp" alt="" />     </div>
              </div>
              <div className='user_product_part'>
                <h4 className='bestSell_title'>Sản phẩm bán chạy nhất</h4>
              </div>
              <div className='Home_products'>
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
