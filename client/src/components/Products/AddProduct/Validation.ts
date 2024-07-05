import { Product,ErrorProduct } from "../../../interface/Products"
export default function Validation(values:Product){
    const error:ErrorProduct={
        name:'',
        description:'',
        categoryId:'',
        price:'',
        discount:'',
        quantity:'',
        imgLink:'',
    }
    if(values.name===''){
        error.name='Tên sản phẩm là bắt buộc'
    }
    if(values.categoryId===''){
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
    return error;
}
// {imageUrl.map((e: string, index: number) => (
//     <div className='image_item' key={index}><img src={e} alt="product" /></div>
// ))}
// const [selectedFile, setSelectedFile] = useState<File[]>([]);
//    const [imageUrl, setImageUrl] = useState<string[]>([]);
// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             if (typeof reader.result === 'string') {
//                 setImageUrl([...imageUrl, reader.result]);
//             }
//         };
//         reader.readAsDataURL(files[0]);
//         setSelectedFile([...selectedFile, files[0]]);
//     }
// };



