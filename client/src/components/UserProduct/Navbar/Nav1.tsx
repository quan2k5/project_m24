import React from 'react'
import { FilterOutlined,CaretRightOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Nav1() {
    const filterCategories=useSelector((state:any)=>state.categories. filterCategories);
    const navigate=useNavigate();
    const filterChild=(item:any)=>{
        navigate(`/user/products/${item.name}`,{state:item.id});
    }
  return (
    <nav className='firstFilter_nav'>
        <h4>
            <FilterOutlined className='firstFilter-icon' />
            Bộ lọc tìm kiếm
        </h4> 
        <ul className='firstFilter-list'>
            <h4 className='all_categories_filter'><i className='bx bx-menu'></i> Tất cả danh mục</h4>
            <li className='parent_category_title'>
                <CaretRightOutlined />
                <span>Quần áo</span>
            </li>
            {filterCategories.map(function(e:any){
                return <li className='firstFilter-item' onClick={()=>{filterChild(e)}}>
                    <span>{e.name}</span>
                </li>
            })}
        </ul> 
    </nav>
  )
}
