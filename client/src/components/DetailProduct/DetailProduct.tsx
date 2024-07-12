import React, { useEffect } from "react";
import "./DetailProduct.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../store/reducers/productReducer";


export default function DetailProduct() {
  const { idProduct } = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector((state: any) => state.products.currentProduct);

  function sanitizeHtml(data: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    return doc.body.innerHTML;
  }

  useEffect(() => {
    if (idProduct) {
      dispatch(getProductById(idProduct));
    }
  }, [dispatch, idProduct]);

  return (
    <div className="detail_product_part">
      <div className="grid">
        <div className="detail_product_main">
          <div className="grid_row">
            <div className="flex_box_product">
              <div className="left_part">
                <img src={currentProduct.imgLink} alt={currentProduct.name} />
                <ul className="image_product_list">
                  <li className="image_product_item">
                    <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovegez8ynob63" alt="" />
                  </li>
                  <li className="image_product_item">
                    <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovegez8ynob63" alt="" />
                  </li>
                  <li className="image_product_item">
                    <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovegez8ynob63" alt="" />
                  </li>
                </ul>
                <div className="bottom_detail_product">
                  <ul className="socialNetWork_list">
                    <li className="socialNetWork_item"><span>Chia sẻ:</span></li>
                    <li className="socialNetWork_item">
                      <i className='bx bxl-facebook-circle'></i>
                    </li>
                    <li className="socialNetWork_item">
                      <i className='bx bxl-tiktok'></i>
                    </li>
                    <li className="socialNetWork_item">
                      <i className='bx bxl-twitter'></i>
                    </li>
                    <li className="socialNetWork_item">
                      <i className='bx bxl-messenger'></i>
                    </li>
                  </ul>
                  <div className="favourite_part">
                    <i className='bx bx-heart'></i>
                    <span>: Đã thích 0k</span>
                  </div>
                </div>
              </div>
              <div className="right_part">
                <h3 className="name_detailProduct">{currentProduct.name}</h3>
                <div className="figure_actions_part">
                  <div className="figure_action_item">
                    <span className="evaluated_number">5.0</span>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <div className="figure_action_item">
                    <span className="sell_number">{currentProduct.sell}</span>
                    <span className="sell_descripton"> Đã bán</span>
                  </div>
                </div>
                <div className="detail_price_part">
                  <div className="top_part">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dea74facf15efdbdb982.svg" alt="" />
                  </div>
                  <div className="bottom_part">
                    <div className="actual_price">{currentProduct.price} đ</div>
                    <div className="current_price">{currentProduct.currentPrice} đ</div>
                    <div className="discount_product">{currentProduct.discount}% Giảm</div>
                  </div>
                </div>
                <div className="shipping_part">
                  <div className="title">Vận chuyển</div>
                  <div className="detail_shipping">
                    <div className="product_ship">
                      <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" alt="" />
                      <span>Miễn phí vận chuyển</span>
                    </div>
                    <div className="product_ship">
                      <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg" alt="" />
                      <span>Vận chuyển tới</span>    
                    </div>
                  </div>
                </div>
                <div className="description_product" dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentProduct.description) }} />
                <div className="quantity_product_part">
                  <div className="title">Số lượng:</div>
                  <div className="main">
                    <div className="detail_quantity">
                      <button className="btn">+</button>
                      <input type="number" />
                      <button className="btn">-</button>
                    </div>
                    <div className="quantity_available">{currentProduct.quantity} sản phẩm có sẵn</div>   
                  </div>
                </div>
                <div>
                  

                </div>
              </div>  
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
}
