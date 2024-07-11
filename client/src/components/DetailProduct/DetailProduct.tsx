import React from "react";
import "./DetailProduct.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../store/reducers/productReducer";
export default function DetailProduct() {
    const {idProduct}=useParams();
    console.log(idProduct);
    const dispatch=useDispatch();
    const currentProduct=useSelector((state:any)=>state.products.currentProduct);
    useEffect(()=>{
        dispatch(getProductById(idProduct));
    },[])
    console.log(currentProduct);  
  return (
    <>
      <main>
        <section className="product-detail">
          <div className="container-detail">
            <div className="product-image">
              <img
                id="product-image"
                src={currentProduct.imgLink[0]}
              />
              <div className="list-img">
                {currentProduct.imgLink.map((image: string, index: number) => (
                  <img key={index} src={image}/>
                ))}
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-name">{currentProduct.name}</h2>
              <p className="name" id="product-description">{currentProduct.name}</p>
              <p id="product-price">{currentProduct.currentPrice} USD</p>
              <p>
                Chính sách trả sách: Trả hàng 15 ngày &emsp; <span className="text-gray-500">Đổi miễn phí</span>
              </p>
              <div>
                <p>Đánh giá: </p>
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="button-list">
                <button className="add-button bg-yellow-300">Thêm vào giỏ hàng</button>
                <button className="buy-button">Mua hàng</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}