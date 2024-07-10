import React, { useEffect, useState } from 'react'
import './Category.scss'
import {useDispatch } from 'react-redux'
import {deleteCategory, getCategories,checkUpdated} from '../../store/reducers/categoryReducer';
import CategoryForm from './CategoryForm';
import { useSelector } from 'react-redux';
export default function Category() {
    const dispatch=useDispatch();
    const categoryList=useSelector((state:any)=>state.categories.categories);
    useEffect(()=>{
        dispatch(getCategories());
    },[])
    const findParentCategory=(parentId:number)=>{ 
        let findCategory:any=categoryList.find((e:any)=>{
            return e.id===parentId ;
        })
        if(findCategory){
            return findCategory.name;
        }
        return 'Trống';
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
    const handleDeleteCategory=(item:any)=>{
        const obj={
            category:item,
            childCategories :findChildCategory(item,[])
        }
        dispatch(deleteCategory(obj));
    }
    const handleUpdateCategory=(item:any)=>{
        dispatch(checkUpdated(item.id))
    }
  return (
    <div className='category_admin'>
                <div className='category_admin_part'>
                    <CategoryForm></CategoryForm>
                    <div className='render_category_part'>
                        <div className='header_renderCategory'>
                            <h4>Tất cả danh mục</h4>
                        </div>
                        <table className='category_table'>
                            <thead>
                                <tr className='title_property_category'>
                                    <th className='cateogry_th'>Id</th>
                                    <th className='cateogry_th'>Tên danh mục</th>
                                    <th className='cateogry_th'>Danh mục cha</th>
                                    <th className='cateogry_th'>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className='category_body'>
                                {categoryList.map((e:any)=>{
                                    return <tr className='category_item'>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{findParentCategory(e.parentId)}</td>
                                    <td>
                                        <i className='bx bxs-edit-alt edit_categoryItem' onClick={()=>{ handleUpdateCategory(e)}}></i>  
                                        <i className='bx bx-trash delete_categoryItem' onClick={()=>{handleDeleteCategory(e)}}></i>                              
                                    </td>
                                </tr>
                                })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
  )
}
