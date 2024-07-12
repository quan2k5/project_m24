import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getMyCart:any=createAsyncThunk(
    'Carts/getMyCart',
    async (paramString:any)=>{
        console.log(paramString);
        const response = await axios.get(`http://localhost:3000/carts/?${paramString}`, {
            params: {
                delete: false,
            },
        });
        console.log(response.data);
        console.log('sxdcdcx',response.data[0]);
        return response.data[0];
    }
)
export const updateMyCart:any=createAsyncThunk(
    'Carts/updateMyCart',
    async (obj:any)=>{
        const response = await axios.patch(`http://localhost:3000/carts/${obj.id}`,obj);
        return response.data;
    }
)
const cartsReducer :any= createSlice({
    name: 'carts',
    initialState: {
        myCart:{
        id:-1,
        idCustomer:-1,
        totalQuantity:0,
        totalMoney:0,
        products:[{
            id:-1,
            quantity:0
        }]
        },
    },
    reducers: {
        checkUpdated:(state:any,action:PayloadAction<any>)=>{
            state.updatedItem=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMyCart.fulfilled,(state:any,action:PayloadAction<any>)=>{
            state.myCart=action.payload;
        })
        .addCase(updateMyCart.fulfilled,(state:any,action:PayloadAction<any>)=>{
            state.myCart=action.payload;
        })
    }
})
export const {} = cartsReducer.actions;
export default cartsReducer.reducer;