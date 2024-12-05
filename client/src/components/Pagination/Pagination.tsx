import React from 'react'
import { CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons'
import './Pagination.scss'
export default function Pagination(Props:any) {
    const {pagination,total}=Props;
    const renderBtn=()=>{
        const liItems: JSX.Element[] = [];
        for (let i = 0; i < Math.ceil(total/pagination._limit); i++) {
            liItems.push(
                <li className='paginationproduct_btn' onClick={()=>{Props.handleBtnPage(i+1)}} style={{backgroundColor:pagination._page===i+1?'blue':'white', color:pagination._page===i+1?'white':'black'}}>
                    {i+1}
                </li>
            );
        }
        return liItems;
    }
  return (
    <>
    <div className='footer_paginationTable'>
        <div className='left_part_pagination' >Tổng số:<span className='total_number'>{total}</span> bản ghi</div>
        <div className='right_part_pagination'>
            <select name="" id=""className='paginationproduct_select' onChange={(e)=>{Props.handleLimitItems(e)}}  >
                <option value="5">5 bản ghi/trang</option>
                <option value="10">10 bản ghi/trang</option>
                <option value="15">15 bản ghi/trang</option>
            </select>
            <ul className='pagination_btnlist'>
                {!(pagination._page <= 1) && <li className='paginationproduct_btn ' onClick={()=>{Props.handlePrevPage()}} ><CaretLeftOutlined /></li>}
                {renderBtn()}
                {!(pagination._page>=total/pagination._limit) &&<li  className='paginationproduct_btn' onClick={()=>{Props.handleNextPage()}}><CaretRightOutlined /></li>}
            </ul>
        </div>
    </div>
    </>
  )
}
