
import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getMyCart } from '../../store/reducers/cartsReducer';
import queryString from 'query-string';
import { getProducts } from '../../store/reducers/productReducer';

export default function Cart() {
    const dispatch = useDispatch();
    const [allCheck, setAllCheck] = useState<boolean>(false);
    const [checkItem,setCheckItem]=useState<boolean[]>([])
    const userLogged = useSelector((state: any) => state.users.userLogged);
    const myCart = useSelector((state: any) => state.carts.myCart);
    const productList = useSelector((state: any) => state.products.products);
    const[total,setTotal]=useState<number>(0);
    useEffect(() => {
        if (userLogged) {
            const obj = { idCustomer: userLogged.id };
            const paramString1 = queryString.stringify(obj);
            dispatch(getMyCart(paramString1));
        }
    }, []);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const handleAllCheck=(event:any)=>{
        const checked = event.target.checked;
        setAllCheck(checked);
        let arr=[];
        if(checked===false){
            for(let i=0;i<myCart.products.length;i++){
                arr[i]=false;
            }
            setCheckItem(arr);
        }else{
            for(let i=0;i<myCart.products.length;i++){
                arr[i]=true;
            }
            setCheckItem(arr);
        }
    }
    useEffect(()=>{
        let arr:any=[];
        myCart.products.forEach((e:any)=>{
            arr.push(e.id); 
        })
        const filter1:any={
            id:arr,
        }  
        const paramString1 = queryString.stringify(filter1);  
        dispatch(getProducts(paramString1));   
    },[myCart])
    console.log('dè',productList);
    const handleSelected = (event: React.ChangeEvent<HTMLInputElement>, index: number,price:any) => {
        const checked = event.target.checked;
        const updatedCheckItem = [...checkItem];
        updatedCheckItem[index] = checked;
        if(checked==true){
            setTotal(total+price);
        }else{
            setTotal(total-price);
        }
        setCheckItem(updatedCheckItem)
        const allChecked = updatedCheckItem.every(item => item === true);
        setAllCheck(allChecked);
    };
    return (
        <div className='cart_part'>
            <div className='grid'>
                <div className='main_cart_content'>
                    <table className='table_cart'>
                        <thead>
                            <tr className='title_cart_tr'>
                                <th className='title_cart_item'>Sản phẩm</th>
                                <th className='title_cart_item'>Đơn giá</th>
                                <th className='title_cart_item'>Số lượng</th>
                                <th className='title_cart_item'>Số tiền</th>
                                <th className='title_cart_item'>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product: any, index: number) => {
                                return (
                                    <tr className='cart_product_item' key={index}>
                                        <td className='cart_item_td'>
                                            <input checked={checkItem[index]} className='check_box_cart' type="checkbox"  onChange={(e)=>{handleSelected(e,index,product.currentPrice)}}/>
                                            <img src={product.imgLink} alt="" />
                                            <div className='product_cart_name'>
                                                <div>{product.name || 'Product name'}</div>
                                                <img src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxkxfs2dnye1f8" alt="" />
                                            </div>
                                        </td>
                                        <td className='cart_item_td'>
                                            <span className="actual_price">{product.actualPrice || '70000đ'}</span>
                                            <span className='current_price'>{product.currentPrice || '40000đ'}</span>
                                        </td>
                                        <td className='cart_item_td'>
                                            <button className="btn">+</button>
                                            <input type="number" value={1} />
                                            <button className="btn">-</button>
                                        </td>
                                        <td className='cart_item_td'>{(product.currentPrice || 0)}đ</td>
                                        <td className='cart_item_td'>
                                            <i className='bx bxs-trash'></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className='cart_footer'>
                        <div className='action_all'>
                            <input checked={allCheck} type="checkbox" onChange={(e) => {handleAllCheck(e)}} />
                            <span className='select_all_cart'>Chọn tất cả_{myCart.products.length}</span>
                            <div className='delete_all_cart'>Xóa</div>
                        </div>
                        <div className='total_pay_part'>
                            <div className='right_part'>
                                <span className='title_pay'>Tổng thanh toán ( sản phẩm):</span>
                                <span className='total_must_pay'>{total}đ</span>
                            </div>
                            <div className='left_part'>
                                <button className='go_to_buy'>Mua hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
