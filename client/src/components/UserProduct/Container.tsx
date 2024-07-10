import React, { useEffect } from 'react'
import './Container.scss'
import { FilterOutlined,DownOutlined,StarFilled } from '@ant-design/icons'
import { useState } from 'react';
import Nav1 from './Navbar/Nav1';
import Nav2 from './Navbar/Nav2';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories, getFilterCategories } from '../../store/reducers/categoryReducer';
import queryString from 'query-string'
import { useDispatch } from 'react-redux';
export default function Container() {
    const location=useLocation();
    const filterCategories=useSelector((state:any)=>state.categories.filterCategories);
    const categoryList=useSelector((state:any)=>state.categories.categories);
    const dispatch=useDispatch();
    useEffect(()=>{
        const filter1={
            _limit:16,
            _page:1,
            parentId:location.state,
        }
        const paramString2=queryString.stringify(filter1);
        dispatch(getCategories());
        dispatch(getFilterCategories(paramString2));   
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
            arr.push(item);
        }
        return arr;
    }
    useEffect(()=>{
        let arr:any=[];
        filterCategories.forEach((e:any)=>{
            arr.push(findChildCategory(e,[]));
        });
        console.log(arr);  
    },[filterCategories,categoryList])
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
