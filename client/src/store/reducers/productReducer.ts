import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logEvent } from "firebase/analytics";
const initialProducts: any[] = [];
export const addProduct:any=createAsyncThunk(
    'products/addProducts',
    async (newProduct)=>{
        await axios.post('http://localhost:3000/products',newProduct);
    }
)
export const getProducts:any=createAsyncThunk(
    'products/getProducts',
    async (paramString:any)=>{
        const response = await axios.get(`http://localhost:3000/products/?${paramString}`, {
            params: {
                delete: false,
            },
        });
        return response.data;
    }
)
export const totalValidateProducts:any=createAsyncThunk(
    'prducts/totalproducs',
    async(paramString)=>{
        const response = await axios.get(`http://localhost:3000/products/?${paramString}`, {
            params: {
                delete: false,
            },
        });
        return response.data.length;
    }
)
export const deleteProduct:any = createAsyncThunk(
    'products/deleteProduct',
    async (product: any,paramString:any) => {
        await axios.patch(`http://localhost:3000/products/${product.id}`, product);   
        const response = await axios.get(`http://localhost:3000/products/?${paramString}`, {
            params: {
                delete: false,
            },
        });
        return response.data.length; 
    }
);
export const updateProduct:any=createAsyncThunk(
    'products/updateProduct',
    async (obj:any)=>{ 
        const response=await axios.patch(`http://localhost:3000/products/${obj.id}`,obj.item); 
        console.log(response.data);
        return response.data;
    }
)
const productReducer :any= createSlice({
    name: 'products',
    initialState: {
        products:initialProducts,
        totalValidateProducts:0,
        currentProduct:{
            name: '',
            description: '',
            categoryId: '-1',
            price: '',
            discount: '',
            delete: false,
            quantity: '',
            imgLink: [],
            sell: '0',
            revenue: '0',
            currentPrice:-1,
        },
        errors:{
            name: '',
            description: '',
            categoryId: '',
            price: '',
            discount: '',
            quantity: '',
            imgLink: ''
        }
    },
    reducers: {
        checkErrors:(state:any,action:PayloadAction<any>)=>{
            state.errors={...action.payload};
        },
        handleChangeProduct: (state, action: PayloadAction<any>) => {
            const { name, value } = action.payload;
            state.currentProduct = { ...state.currentProduct, [name]: value };
        },
        handleInitialProduct:(state:any,action:PayloadAction<any>)=>{
            state.currentProduct=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
                    state.products=action.payload;
            })
            .addCase(totalValidateProducts.fulfilled,(state,action:PayloadAction<any>)=>{
                state.totalValidateProducts=action.payload;
            })
            .addCase(deleteProduct.fulfilled,(state,action:PayloadAction<any>)=>{
                state.totalValidateProducts=action.payload;
            })
    }
});
export const {handleChangeProduct,handleInitialProduct,checkErrors} = productReducer.actions;
export default productReducer.reducer;
