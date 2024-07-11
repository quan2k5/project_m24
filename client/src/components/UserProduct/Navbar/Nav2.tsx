import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
export default function () {
  const [searchParams,setSearchParams]:any=useSearchParams();
  const [check,setCheck]:any=useState<any>('related');
  const [selectCheck,setSelectCheck]:any=useState<any>('-1');
  const handleSelect=(event:any)=>{
    const{value}=event.target;
    const currentParams = Object.fromEntries(searchParams);
    setSelectCheck(value);
    if(value==1){
      setSearchParams({...currentParams,_sort:'currentPrice',_order:'desc'})
    }else if(value==-1){
      const {_sort,_order,...others}=currentParams;
      setSearchParams({...others})
    }else if(value==0){
      setSearchParams({...currentParams,_sort:'currentPrice',_order:'asc'});
    }
  }
  const handleSell=(str:any)=>{
    const currentParams = Object.fromEntries(searchParams);
    if(str==='related'){
      const {orders,...others}=currentParams;
      setCheck('related');
      setSearchParams({...others});
    }else if(str==='sell'){
      setSearchParams({...currentParams,orders:true});
      setCheck('sell');
      setSelectCheck('-1');
    }
  }
  const handleStyle=(str:string)=>{
    return check===str?true:false;
  }
  return (
    <div className='secondFilter_div'>
        <span className='title_filter'>Sắp xếp theo</span>
        <button 
              style={{ backgroundColor: handleStyle('related') ? 'orange' : 'white',color:handleStyle('related')?'white':'black' }} 
              onClick={() => { handleSell('related') }} 
              className='btn'
            >
              Liên quan
        </button>
        <button 
        style={{ backgroundColor: handleStyle('sell') ? 'orange' : 'white',color:handleStyle('sell')?'white':'black' }} 
        
        onClick={()=>{handleSell('sell')}} className='btn'
        >Bán chạy</button>
          <select name="" id="" value={selectCheck} className='select_price' onChange={handleSelect}>
            <option value="-1">giá (mặc định)</option>
            <option value="1">giá từ cao đến thấp</option>
            <option value="0">giá từ thấp đến cao</option>
          </select>
    </div>
  )
}
