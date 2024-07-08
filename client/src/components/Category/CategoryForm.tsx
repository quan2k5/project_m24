import React, { useEffect } from 'react'
import { ValidationCategory } from './Validation';
import { UseSelector,useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { updateCategory,addCategory,checkUpdated } from '../../store/reducers/categoryReducer';
export default function CategoryForm() {
    const dispatch=useDispatch();
    const categoryList=useSelector((state:any)=>state.categories.categories);
    const checkUpdate=useSelector((state:any)=>state.categories.updatedItem)
    const [categoryItem,setCategoryItem]=useState<any>({id:-1,name:'',parentId:-1,delete:false});
    const [categoryErrors,setCategoryErrors]=useState<any>({name:''});
    useEffect(()=>{
        if(checkUpdate==-1){
            setCategoryItem({id:-1,name:'',parentId:-1,delete:false});
        }else{
            let find=categoryList.find(function(e:any){
                return e.id===checkUpdate;
            })
            if(find){
                setCategoryItem(find);
            }
        }
    },[checkUpdate])
    const availableCategories=(item:any,arr:any)=>{
        let filterCategories:any=categoryList.find((e:any)=>{
            return e.id==item.parentId;
        })
        arr.unshift(item.name);
        if(filterCategories==undefined){
            return arr;
        }
        return  availableCategories(filterCategories,arr);  
    }
    const findChildCategory=(item:any,arr:any)=>{
        categoryList.forEach((e:any)=>{
           if(e.parentId===item.id){
            arr.push(e);
             return findChildCategory(e,arr);
           }
        })
        return arr;
    }
    const resetCategory=()=>{
        setCategoryItem({id:-1,name:'',parentId:-1,delete:false});
    }
    const handleSubmit=(event:any)=>{
        event.preventDefault(); 
        const error=ValidationCategory(categoryItem,categoryList,checkUpdate);
        setCategoryErrors(error);
        if(error.name===''){
            if(checkUpdate==-1){
                categoryItem.id = Math.floor(Math.random() * 1000000);
                dispatch(addCategory(categoryItem));
            }else{
                dispatch(updateCategory(categoryItem));
                dispatch(checkUpdated(-1));
            }
            resetCategory();
        }
    }
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        let {name,value}=event.target;
        let str:string|number;
        if(name==='parentId'){
            str=Number(value);
        }else{
            str=value;
        }
        setCategoryItem({...categoryItem,[name]:str})
    }
    const checkSecond=(arr:any,item:any)=>{
        let find=arr.find(function(e:any){
            return e.id===item.id;
        })
        if(find){
            return false;
        }
        return true;
    }
    const handleFilerWhenUpdate=()=>{
        console.log(checkUpdate);
        if(checkUpdate!=-1){
            let arr:any=findChildCategory(categoryItem,[categoryItem]);
            let filter=categoryList.filter((item:any)=>{
                return checkSecond(arr,item);
            }) 
            return filter;   
        }
        return categoryList;
    }
  return (
    <form action="" className='category_form'>
        <h4>Thêm danh mục mới</h4>
        <div className='category_form_item'>
            <label htmlFor="">Tên</label>
            <br />
            <input className='input_value' value={categoryItem.name} name='name' onChange={handleChange}></input>
            {categoryErrors.name && <div className='message_error'>{categoryErrors.name}</div>}
        </div>
        <div className='category_form_item parent_category_part'>
            <label htmlFor="">Danh mục cha:</label>
            <div  className='category_radio_item'>
            <input type="radio" name='parentId' value={-1} checked={categoryItem.parentId===-1} onChange={handleChange} />
            <span>Trống</span>
            </div>
            {handleFilerWhenUpdate().map(function(e:any){
                return <div className='category_radio_item'>
                    <input type="radio" name='parentId' value={e.id} checked={categoryItem.parentId===e.id} onChange={handleChange} />
                    <span>
                        {availableCategories(e,[]).map((item:any,index:number)=>{
                            return  <span>{item}
                            {index!==availableCategories(e,[]).length-1&&<RightOutlined  className='right_icon'/>}
                            </span>
                        })}
                    </span>
                </div>
            })}
        </div>
        <div className='category_form_item'>
            <button onClick={()=>{resetCategory()}}>Hủy</button>
            <button className='addCategory' onClick={handleSubmit}>Thêm</button>
        </div>
    </form>
  )
}
