import React from 'react';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../config/firebase_config';
import { checkErrors,handleChangeProduct } from '../../../store/reducers/productReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function AddImage() {
    const [selectedFiles, setSelectedFiles] = useState<File>();
    const errors=useSelector((state:any)=>state.products.errors);
    const currentProduct=useSelector((state:any)=>state.products.currentProduct);
    const dispatch=useDispatch();
    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const storageRef = ref(storage, `images/${file.name}`);
            try {
                const snapshot = await uploadBytes(storageRef, file);
                const url = await getDownloadURL(snapshot.ref);
                dispatch(handleChangeProduct({name:'imgLink',value:[...currentProduct.imgLink,url]}));
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };
    const deleteImage=(index1:any)=>{
        let imgLink=[...currentProduct.imgLink];
        let filterImgLink:any=imgLink.filter((e:any,index:any)=>{
            return index!=index1;
        })
        dispatch(handleChangeProduct({name:'imgLink',value:filterImgLink}))
    }
    return (
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
                <input type="file" id='fileinput' className='upload_input' onChange={handleImageChange} />
            </div>
            <div className='image_list'>
                {currentProduct.imgLink.map((e: string, index: number) => (
                    <div className='image_item' key={index}>
                        <img src={e} alt="product" />
                        <div className='delete_iamge_item'>
                            <i className='bx bx-trash delete_productItem' onClick={()=>{deleteImage(index)}}></i>                              
                        </div>
                    </div>
                ))}
            </div>
            {errors.imgLink && <div className='message_error'>{errors.imgLink}</div>}
        </div>
    );
}
