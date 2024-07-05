import React, { useState } from 'react';
import './AddProduct.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import Validation from './Validation';
import { Product,ErrorProduct,} from '../../../interface/Products';
export default function AddProduct() {
    const [obj, setObj] = useState<Product>({name:'',description:'',categoryId:'',price:'',discount:'',delete:false,quantity:'',imgLink:[],sell:'0',revenue:'0',sts:[],});
    const [errors, setErrors] = useState<ErrorProduct>({ name:'',description:'',categoryId:'',price:'',discount:'',quantity:'',imgLink:''});
    const handleChange =(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name,value}=event.target;
        setObj((prevObj) => ({
            ...prevObj,
            [name]: value
        }));
    };
    const areAllValuesEmpty = (obj:any) => {
        return Object.values(obj).every(value => value === '');
    };
    const formValidation = () => {
        setErrors(Validation(obj));
    };
    return (
        <div className='products_adminActions_part'>
            <div className='grid_row'>
                <div className='grid-column-2'></div>
                <div className='grid-column-10'>
                    <h3 className=''>Tạo sản phẩm</h3>
                    <div className='allInforproduct_form'>
                        <h4 className='allinfor_product_title'>Thông tin chung</h4>
                        <div className='product_item'>
                            <div className='product_label'><h4>Tên sản phẩm</h4></div>
                            <input type="text" name='name' className='product_input' placeholder='Nhập tên sản phẩm' value={obj.name} onChange={handleChange} />
                            {errors.name && <div className='message_error'>{errors.name}</div>}
                        </div>
                        <div className='product_item_flex'>
                            <div className='product_item'>
                                <div className='product_label'><h4>Loại sản phẩm</h4></div>
                                <select name='categoryId' className='product_input' onChange={handleChange}>
                                    <option value="-1">Mặc định</option>
                                    <option value="2">quần áo</option>
                                    <option value="3">đồ gia dụng</option>
                                </select>
                            </div>
                            <div className='product_item'>
                                <div className='product_label'><h4>Số lượng sản phẩm</h4></div>
                                <input type="number" name='quantity' className='product_input' onChange={handleChange} placeholder='Nhập số lượng sản phẩm' />
                            </div>
                        </div>
                        <div className='product_item_flex'>
                            <div className='product_item'>
                                <div className='product_label'><h4>Gía sản phẩm</h4></div>
                                <input type="number" name='price' onChange={handleChange} className='product_input' placeholder='Nhập giá sản phẩm' />
                            </div>
                            <div className='product_item'>
                                <div className='product_label'><h4>Giảm giá</h4></div>
                                <input type="number" name='discount' onChange={handleChange} className='product_input' placeholder='Nhập khuyến mãi sản phẩm' />
                            </div>
                        </div>
                        <div>
                            <div className='ck_item'>
                                <div className='product_label'><h4>Mô tả sản phẩm</h4></div>
                                <CKEditor editor={ClassicEditor} data="" />
                            </div>
                        </div>
                    </div>
                    <div className='imageProduct_form'>
                        <h4 className='image_product_title'>Hình ảnh sản phẩm</h4>
                        <div className='uploadImage_part'>
                            <div className='upload_icon_part'>
                                <svg className='upload_icon' viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path>
                                    <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path>
                                </svg>
                            </div>
                            <label htmlFor='fileinput' className='uploadImage_content'>Thêm hình ảnh</label>
                            <input type="file" id='fileinput' className='upload_input'  />
                        </div>
                        <div className='image_list'>
                        </div>
                    </div>
                    <div className=''>
                        <button onClick={formValidation}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
