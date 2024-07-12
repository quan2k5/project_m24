import React, { useState } from 'react'
import { FilterOutlined,CaretRightOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate,useParams,useSearchParams } from 'react-router-dom';
export default function Nav1() {
    const filterCategories=useSelector((state:any)=>state.categories. filterCategories);
    const [price,setPrice]=useState<any>({price1:'',price2:''});
    const [error,setError]=useState<string>('');
    const {find,paramId,numberPage}=useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate=useNavigate();
    const filterChild=(item:any)=>{
        navigate(`/user/products/${item.name}/${item.id}/page/1`);
    }
    const validatePrice=()=>{
        if(price.price1==''||price.price1==''){
            return 'Khoảng giá ko hợp lệ'
        }else if(Number(price.price1)<=0||Number(price.price1)<=0){
             return 'Khoảng giá ko hợp lệ'
        }else if(Number(price.price1)>Number(price.price2)){
            return 'Khoảng giá ko hợp lệ'
        }else{
            return '';
        }
    }
    const handlePriceRange=()=>{
        const error1=validatePrice();
        setError(error1);
        if(error1===''){
            const currentParams = Object.fromEntries(searchParams);
            setSearchParams({ ...currentParams,minprice: price.price1, maxprice: price.price2 });
        }
    }
    const handleChangePrice=(event:any)=>{
        const {name,value}=event.target;
        setPrice({...price,[name]:value});
    }
    const checkFilterCategory=()=>{
        console.log(filterCategories); 

        let check= filterCategories.find(function(e:any){
            return e.id==paramId;
        })
        return check?false:true;
    }
  return (
    <nav className='firstFilter_nav'>
        <h4>
            <FilterOutlined className='firstFilter-icon' />
            Bộ lọc tìm kiếm
        </h4> 
        {searchParams.get('name')==null?<ul className='firstFilter-list'>
            <h4 className='all_categories_filter'><i className='bx bx-menu'></i> Tất cả danh mục</h4>
            <li className='parent_category_title'>
                <CaretRightOutlined />
                <span>{find}</span>
            </li>
            {checkFilterCategory()&& filterCategories.map(function(e:any){
                return <li className='firstFilter-item' onClick={()=>{filterChild(e)}}>
                    <span>{e.name}</span>
                </li>
            })}
        </ul>:<></>}
        <div className='price_range_part'>
            <h4 className='price_range_title'>Khoảng giá</h4>
            <div className='main_price_content'>
                <input name='price1' value={price.price1} type="number" onChange={handleChangePrice} />
                <span>-</span>
                <input name='price2' value={price.price2} type="number" onChange={handleChangePrice} />
            </div>
            {error &&<div className='message_error priceRange_error'>{error}</div>}
            <button onClick={handlePriceRange} className='price_range_btn'>Ap dụng</button>
        </div>
    </nav>
  )
}
