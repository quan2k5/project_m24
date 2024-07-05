import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
const productReducer :any= createSlice({
    name: 'products',
    initialState: {
        products:initialProducts,
        totalValidateProducts:0,
    },
    reducers: {
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
export const {} = productReducer.actions;
export default productReducer.reducer;
