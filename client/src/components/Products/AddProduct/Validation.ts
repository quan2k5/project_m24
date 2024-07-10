import { Product,ErrorProduct } from "../../../interface/Products"
export default function Validation(values:Product,allproducts:any,checkStatus:number,idProduct:any){
    const error:ErrorProduct={
        name:'',
        description:'',
        categoryId:'',
        price:'',
        discount:'',
        quantity:'',
        imgLink:'',
    }
    let newProducts=[...allproducts];
    if(checkStatus!=0){
        newProducts=allproducts.filter((e:any)=>{
            return e.id!=idProduct;
        })
        
    }
    const checkWith=()=>{
        let find:any=newProducts.find((e:any)=>{
            return values.name===e.name;
        })
        return find?true:false;
    }
    if(values.name===''){
        error.name='Tên sản phẩm là bắt buộc'
    }else if(checkWith()){
        error.name='Tên đang bị trùng'
    }
    if(values.categoryId==='-1'){
        error.categoryId='Danh mục sản phẩm là bắt buộc'
    }
    if(values.quantity===''){
        error.quantity='Số lượng sản phẩm là bắt buộc'
    }else if(Number(values.quantity)<=0){
        error.quantity='Số lượng sản phẩm ko hợp lệ'
    }
    if(values.price==''){
        error.price='Gía của sản phẩm là bắt buộc'
    }else if(Number(values.price)<=0){
        error.price='Gía của sản phầm ko hợp lệ '
    }
    if(values.discount===''){
        error.discount=''
    }else if(Number(values.discount)<=10){
        error.discount='Khuyến mãi ko hợp lệ'
    }
    if(values.description===''){
         error.description='Mô tả sản phẩm là bắt buộc'
    }
    if(values.imgLink.length===0){
        error.imgLink='Hình ảnh sản phẩm là bắt buộc'
    }
    return error;
}
