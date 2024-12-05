import React, { useEffect } from 'react'
import './Container.scss'
import { FilterOutlined,DownOutlined,StarFilled } from '@ant-design/icons'
import { useState } from 'react';
import Nav1 from './Navbar/Nav1';
import Nav2 from './Navbar/Nav2';
import { Navigate, useLocation, useNavigate, useParams,useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories, getFilterCategories } from '../../store/reducers/categoryReducer';
import queryString from 'query-string'
import { useDispatch } from 'react-redux';
import { getProducts,totalValidateProducts } from '../../store/reducers/productReducer';
import PaginationUser from '../PaginationUser/PaginationUser';
export default function Container() {
    const navigate=useNavigate();
    const location:any=useLocation();
    const filterCategories=useSelector((state:any)=>state.categories.filterCategories);
    const categoryList=useSelector((state:any)=>state.categories.categories);
    const productsList=useSelector((state:any)=>state.products.products);
    const [searchParams] = useSearchParams();
    const dispatch=useDispatch();
    const{paramId,numberPage}=useParams();
    useEffect(()=>{
        if(searchParams.get('name')==null){
            const filter1={
                parentId:paramId,
            }
            const paramString2=queryString.stringify(filter1);
            const obj={
                id:paramId,
                paramString:paramString2,
            }
            dispatch(getCategories());
            dispatch(getFilterCategories(obj));
        }   
    },[location])
    const findChildCategory=(item:any,arr:any)=>{
        let check:number=0
        categoryList.forEach((e:any)=>{
           if(e.parentId===item.id){
            check=1;
             return findChildCategory(e,arr);
           }
        })
        if(check==0){
            arr.push(item.id.toString());
        }
        return arr;
    }
    useEffect(()=>{
        const filter2:any={
            _page:numberPage,
            _limit:5,
        }
        if(searchParams.get('name')==null){
            let arr:any=[];
            filterCategories.forEach((e:any)=>{
                arr.push(findChildCategory(e,[]));
            });
            let newArr=arr.flat();
            filter2['categoryId']=newArr;
        }else{
            filter2['name_like']=searchParams.get('name');
        }
        const minprice=searchParams.get('minprice');
        const maxprice=searchParams.get('maxprice');
        const valueSort=searchParams.get('_sort');
        const statusSort=searchParams.get('_order');
        const saleFilter=searchParams.get('orders');
        if (minprice !== null && maxprice !== null) {
            filter2['currentPrice_gte']=minprice; 
            filter2['currentPrice_lte']=maxprice;
        } 
        if(valueSort!== null && statusSort!==null){
            filter2['_sort']=valueSort;
            filter2['_order']=statusSort;
        }
        if(saleFilter!==null){
            filter2['orders']=saleFilter;
        }
        const {_page,_limit,...others}=filter2;
        const paramString1=queryString.stringify(others);
        dispatch(totalValidateProducts(paramString1));
        const paramString2=queryString.stringify(filter2);
        dispatch(getProducts(paramString2));
    },[location,filterCategories])
    const GotoDetailProduct=(id:string)=>{
        navigate(`/user/detailProduct/${id}`);
    }
  return (
    <div className='app_container'>
        <div className="grid">
        <div className='grid_row'>
            <div className='grid-column-2'>
                <Nav1></Nav1>
            </div>
            <div className='grid-column-10'>
                <Nav2></Nav2>
                <div className='home_products'>
                    <div className='grid_row'>
                        {productsList.map((e:any)=>{
                            return  <div className='grid-column-2-4'>
                            <div className='home-product-item' onClick={()=>{GotoDetailProduct(e.id)}}>
                                <div className='homeproduct-img' style={{backgroundImage: `url(${e.imgLink[0]})`}}></div>
                                <h4 className='homeproduct-name'>{e.name}</h4>
                                <div className='homeproduct-price'>
                                    <span className='homeprice-old'>{e.price} đ</span>
                                    <span className='homeprice-current'>{e.currentPrice}đ</span>
                                </div>
                                <div className='homeproduct-bottom'>
                                    <div className='homeproduct-rating'>
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon' />
                                        <StarFilled className='star-icon'/>
                                        <StarFilled className='star-icon'/>
                                    </div>
                                    <div className='homeproduct-buy'>Đã bán {e.sell}</div>
                                </div>
                                <div className='homeproduct_discount'>
                                    <div className='discount_number'>{e.discount}%</div>
                                    <div className='discount_label'>GIẢM</div>
                                </div>
                            </div>    
                        </div>
                        })}
                    </div>
                </div>
                <PaginationUser></PaginationUser>
            </div>
        </div>
        </div>
    </div>
  )
}
