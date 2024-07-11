import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UseDispatch } from "react-redux";
const initialCategories: any[] = [];
export const getCategories:any=createAsyncThunk(
    'Categories/getCategories',
    async ()=>{
        const response = await axios.get(`http://localhost:3000/categories/`, {
            params: {
                delete: false,
            },
        });
        return response.data;
    }
)
export const getFilterCategories:any=createAsyncThunk(
    'Categories/getFilterCategories',
    async (obj:any)=>{
        const response = await axios.get(`http://localhost:3000/categories/?${obj.paramString}`, {
            params: {
                delete: false,
            },
        });
        if(response.data.length==0){
            const response1=await axios.get(`http://localhost:3000/categories/${obj.id}`);
            console.log('fgfg',response1);
            
            return [response1.data];
        }
        return response.data;
    }
)
export const addCategory:any=createAsyncThunk(
    'Categories/addCategory',
    async(category:any)=>{
        const response=await axios.post(`http://localhost:3000/categories/`,category);
        return response.data;
    }
)
export const deleteCategory:any = createAsyncThunk(
  'Categories/deleteCategory',
  async ({ category, childCategories }:any) => {
    await axios.patch(`http://localhost:3000/categories/${category.id}`, { delete: true });
    const deletePromises = childCategories.map((subCat: any) =>
      axios.patch(`http://localhost:3000/categories/${subCat.id}`, { delete: true })
    );

    await Promise.all(deletePromises);
    const response = await axios.get('http://localhost:3000/categories/', {
      params: {
        delete: false,
      },
    });
    return response.data;
  }
);
export const updateCategory:any=createAsyncThunk(
    'Categories/updateCategory',
    async(category:any)=>{
        const response=await axios.patch(`http://localhost:3000/categories/${category.id}`,category);
        return response.data;
    }
)

const categoryReducer :any= createSlice({
    name: 'categories',
    initialState: {
        categories:initialCategories,
        updatedItem:-1,
        filterCategories:initialCategories,
    },
    reducers: {
        checkUpdated:(state:any,action:PayloadAction<any>)=>{
            state.updatedItem=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
                    state.categories=action.payload;
            })
            .addCase(addCategory.fulfilled,(state,action:PayloadAction<any>)=>{
                state.categories.push(action.payload);
            })
            .addCase(deleteCategory.fulfilled,(state:any,action:PayloadAction<any>)=>{
                state.categories=action.payload
            })
            .addCase(updateCategory.fulfilled,(state:any,action:PayloadAction<any>)=>{
                state.categories=state.categories.map((e:any)=>{
                    if(action.payload.id===e.id){
                        e=action.payload;
                    }
                    return e;
                })
            })
            .addCase(getFilterCategories.fulfilled,(state:any,action:PayloadAction<any>)=>{
                state.filterCategories=action.payload;
            })
    }
})
export const {checkUpdated} = categoryReducer.actions;
export default categoryReducer.reducer;