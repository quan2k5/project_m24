import React from 'react'
import { DownOutlined } from '@ant-design/icons'
export default function () {
  return (
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
  )
}
