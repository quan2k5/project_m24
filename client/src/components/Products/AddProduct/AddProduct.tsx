import React, { useEffect, useState } from 'react';
import './AddProduct.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Validation from './Validation';
import { Product, ErrorProduct } from '../../../interface/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleChangeProduct,checkErrors,addProduct, handleInitialProduct, getProducts, updateProduct } from '../../../store/reducers/productReducer';
import AddImage from './AddImage';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCategories } from '../../../store/reducers/categoryReducer';
export default function AddProduct() {
    const currentProduct:any=useSelector((state:any)=>state.products.currentProduct);
    const allProducts:any=useSelector((state:any)=>state.products.products);
    const categoryList=useSelector((state:any)=>state.categories.categories);
    const [selectedCategory,setSelectedCategory]=useState<any>([]);
    const [checkStatus,setCheckStatus]=useState<number>(0);
    const location=useLocation();
    const {action,productId}=useParams();
    useEffect(()=>{
        if(action==='update'){
            setCheckStatus(1);
            dispatch(handleInitialProduct(location.state));
        }else{
            dispatch(handleInitialProduct({ name: '',description: '',categoryId: '-1',price: '',discount: '',delete: false,quantity: '',imgLink: [],sell: '0',revenue: '0',currentPrice:-1,}));
        }
        dispatch(getCategories());   
        dispatch(getProducts());
    },[]);
    const errors:any=useSelector((state:any)=>state.products.errors);
    const navigate:any=useNavigate();
    const dispatch=useDispatch();
    const filterParentCategory=(list:any)=>{
        return list.filter((e:any)=>{
            return e.parentId==-1;
        })
    }
    const childCategory=(index:any,arr:any)=>{
        let find=categoryList.find((e:any)=>{
            return Number(selectedCategory[index])===e.id;
        })
        if(find){
            let filter=categoryList.filter((e:any)=>{
                return find.id===e.parentId;
            })
            if(filter.length==0){
                return arr;
            }
            arr.push(filter);
            index++;
            return childCategory(index,arr);
        }
        return arr;
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const obj={
            name:event.target.name,
            value:event.target.value,
        }
        dispatch(handleChangeProduct(obj));
    };
    const handleSelected=(event:React.ChangeEvent<HTMLSelectElement>,index:any)=>{
        const obj={
            name:'categoryId',
            value:event.target.value,
        }
        let arr=[...selectedCategory];
        arr[index]=obj.value;
        arr=arr.slice(0,index+1);
        setSelectedCategory(arr);
        let findFist=categoryList.find((e:any)=>{
            return arr[index]==e.parentId;
        })
        if(findFist){
            obj.value='-1';
        }
        dispatch(handleChangeProduct(obj));
    }
    const handleEditorChange = (event:any,editor:any) => {
        const data = editor.getData();
        const obj={
            name:'description',
            value:data,
        }
        dispatch(handleChangeProduct(obj));
    };
    const handleSubmit = (event:any) => {  
        event.preventDefault();
        const afterErrors=Validation(currentProduct,allProducts,checkStatus,productId);
        dispatch(checkErrors(afterErrors));
        if(afterErrors.name==='' && afterErrors.description===''&&afterErrors.categoryId===''&&afterErrors.price===''&& afterErrors.discount==''&&afterErrors.quantity=='' &&afterErrors.imgLink==''){
            let obj1={...currentProduct,currentPrice:Math.round(Number(currentProduct.price)/100 *(100-Number(currentProduct.discount)))}
            if(checkStatus==0){
                dispatch(addProduct(obj1));
            }else{
                const obj={
                    id:productId,
                    item:obj1,
                }
                dispatch(updateProduct(obj));
            }
            navigate('/admin/allProducts');
        }
    };
    return (
                <div className='products_adminActions_part'>
                    <h3 className=''>{!checkStatus?'Tạo sản phẩm':'Cập nhật sản phẩm'}</h3>
                    <div className='allInforproduct_form'>
                        <h4 className='allinfor_product_title'>Thông tin chung</h4>
                        <div className='product_item'>
                            <div className='product_label'><h4>Tên sản phẩm</h4></div>
                            <input type="text" name='name' className='product_input' placeholder='Nhập tên sản phẩm' value={currentProduct.name} onChange={handleChange} />
                            {errors.name && <div className='message_error'>{errors.name}</div>}
                        </div>
                        <div className='product_item_flex'>
                            <div className='product_item'>
                                <div className='product_label'><h4>Loại sản phẩm</h4></div>
                                <select name='categoryId' className='product_input ' onChange={(e)=>{handleSelected(e,0)}}>
                                    <option value="-1">Mặc định</option>
                                    {filterParentCategory(categoryList).map((e:any)=>{
                                        return <option  value={e.id}>{e.name}</option>
                                    })}
                                </select>
                                {childCategory(0,[]).map((e:any,index:number)=>{
                                    return <select name='categoryId' className='product_input selected_category_input' onChange={(e)=>{handleSelected(e,index+1)}}>
                                        <option value="-1">Mặc định</option>
                                    {e.map((e:any)=>{
                                        return <option  value={e.id}>{e.name}</option>
                                    })}
                                    </select>
                                })}
                                {errors.categoryId && <div className='message_error'>{errors.categoryId}</div>}
                            </div>
                            <div className='product_item'>
                                <div className='product_label'><h4>Số lượng sản phẩm</h4></div>
                                <input type="number"  value={currentProduct.quantity} name='quantity' className='product_input' onChange={handleChange} placeholder='Nhập số lượng sản phẩm' />
                                {errors.quantity&& <div className='message_error'>{errors.quantity}</div>}
                            </div>
                        </div>
                        <div className='product_item_flex'>
                            <div className='product_item'>
                                <div className='product_label'><h4>Gía sản phẩm</h4></div>
                                <input type="number" value={currentProduct.price} name='price' onChange={handleChange} className='product_input' placeholder='Nhập giá sản phẩm' />
                                {errors.price && <div className='message_error'>{errors.price}</div>}
                            </div>
                            <div className='product_item'>
                                <div className='product_label'><h4>Giảm giá</h4></div>
                                <input type="number"  value={currentProduct.discount} name='discount' onChange={handleChange} className='product_input' placeholder='Nhập khuyến mãi sản phẩm' />
                                {errors.discount && <div className='message_error'>{errors.discount}</div>}
                            </div>
                        </div>
                        <div>
                            <div className='ck_item'>
                                <div className='product_label'><h4>Mô tả sản phẩm</h4></div>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={currentProduct.description}
                                    onChange={handleEditorChange}
                                />
                                {errors.description && <div className='message_error'>{errors.description}</div>}
                            </div>
                        </div>
                    </div>
                    <AddImage></AddImage>
                    <div className='footer_addProducts'>
                        <button className='submit_form' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
    );
}
