import React, { useEffect, useState } from 'react'
import './TotalProduct.scss'
import Pagination from '../../Pagination/Pagination'
import { PlusCircleOutlined ,SearchOutlined,CaretLeftOutlined,CaretRightOutlined} from '@ant-design/icons'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { getProducts,deleteProduct,totalValidateProducts} from '../../../store/reducers/productReducer'
import queryString from 'query-string'
let timeout:any=null;
export default function TotalProduct() {
    const dispatch=useDispatch();
    const productsList:any=useSelector((state:any)=>state.products.products);
    const totalProducts:any=useSelector((state:any)=>state.products.totalValidateProducts);
    const [filter,setFilter]=useState<any>({
        _limit:2,
        _page:1,
        name_like:'',
    });
    useEffect(()=>{
        const {_limit,_page,...others}=filter;
        const paramString1=queryString.stringify(filter);
        const paramString2=queryString.stringify(others);
        dispatch(getProducts(paramString1));
        dispatch(totalValidateProducts(paramString2));
    },[filter]);
    useEffect(()=>{
        if(filter._page<=Math.ceil( (totalProducts)/filter._limit)){
            setFilter({...filter});
        }else{
            setFilter({...filter,_page:--filter._page})
        }
    },[totalProducts])
    const handleDeleteProduct=(item:any)=>{
        const {_limit,_page,...others}=filter;
        const paramString2=queryString.stringify(others);
        const newItem={...item,delete:true}
        dispatch(deleteProduct(newItem,paramString2))
    }
    const handleSearchChange=(event:any)=>{
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            setFilter({...filter,name_like:event.target.value,_page:1})
        },250);    
    }
    const handleNextPage = () => {
        setFilter({...filter,_page:filter._page+1});
    };
    const handlePrevPage = () => {
        setFilter({...filter,_page:filter._page-1});
    };
    const handleLimitItems=(event:any)=>{
        setFilter({...filter,_page:1,_limit:Number(event.target.value)})
    }
    const handleBtnPage=(numberPage:number)=>{
        setFilter({...filter,_page:numberPage})
    }
  return (
    <div className='totalProduct_admin_part'>
        <div className='grid_row'>
            <div className='grid-column-2'></div>
            <div className='grid-column-10'>
                <div className='header_totalProducts'>
                    <h3 className='title_totalProducts'>Danh sách sản phẩm</h3>
                    <button className='addProduct_btn'>
                        <PlusCircleOutlined className='plusCircle_icon' />
                        <span>Tạo sản phẩm</span>
                    </button>
                </div>
                <div className='mainTotal_Products_part'>
                    <h4 className='products_title'>Tất cả sản phẩm</h4>
                    <div className='headerActions_products'>
                        <select className='filter_roducts' name="" id="">
                            <option value="">Lọc theo giá</option>
                        </select>
                        <div className='search_products_part'>
                            <SearchOutlined className='search_icon' />
                            <input className='search_products_input' type="text" placeholder='Tìm kiếm...' onChange={handleSearchChange}  />
                        </div>
                    </div>
                    <table className='table_products'>
                        <thead>
                            <tr className='title_table'>
                                <th className='titleProducts_item'>Id</th>
                                <th className='titleProducts_item'>Tên sản phẩm</th>
                                <th className='titleProducts_item'>Gía</th>
                                <th className='titleProducts_item'>Số lượng</th>
                                <th className='titleProducts_item'>Doanh thu</th>
                                <th className='titleProducts_item'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='body_producsTable'>
                            {productsList.map((item:any)=> {
                                return <tr className='detailProduct_item' key={item.id}>
                                <td>{item.id}</td>
                                <td className='nameProduct_item'>
                                    <div className='picture_productItem'>
                                        <img src="https://media.istockphoto.com/id/1461285334/photo/empty-beige-wall-with-a-wooden-drawer-and-accessories.webp?b=1&s=170667a&w=0&k=20&c=QnQVHjYYeqCoRokhr87TwrdobZ-FLoQwazbbjSNxBnU=" alt="" />
                                    </div>
                                    <span>{item.name}</span>
                                </td>
                                <td>{item.currentPrice}đ</td>
                                <td>{item.quantity}</td>
                                <td>{item.revenue}đ</td>
                                <td>
                                    <i className='bx bxs-edit-alt edit_productItem'></i>  
                                    <i  className='bx bx-trash delete_productItem' onClick={()=>{handleDeleteProduct(item)}}></i>                              
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </table>
                    <Pagination 
                        pagination={filter}
                        totalProducts={totalProducts}
                        handleBtnPage={handleBtnPage}
                        handleNextPage={handleNextPage}
                        handleLimitItems={handleLimitItems}
                        handlePrevPage={handlePrevPage}
                    ></Pagination>
                </div>
            </div>
        </div>    
    </div>
  )
}
