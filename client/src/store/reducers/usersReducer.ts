import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialUsers: any[] = [];
export const getUsers:any=createAsyncThunk(
    'Users/getUsers',
    async (paramString:string)=>{
        const response = await axios.get(`http://localhost:3000/users/?${paramString}`);
        return response.data;
    }
)
export const getAllUsers:any=createAsyncThunk(
    'Users,getAllUsers',
    async ()=>{
        const response = await axios.get(`http://localhost:3000/users/`);
        return response.data;
    }
)
export const totalValidateUsers:any=createAsyncThunk(
    'Users/totalusers',
    async(paramString)=>{
        const response = await axios.get(`http://localhost:3000/users/?${paramString}`);
        return response.data.length;
    }
)
export const addUsers:any=createAsyncThunk(
    'User/addUser',
    async(user:any)=>{
        const response=await axios.post('http://localhost:3000/users/',user);
        return response.data;
    }
)
export const testBlock:any=createAsyncThunk(
    'Users/blockUsers',
    async(user:any)=>{
        const response= await axios.patch(`http://localhost:3000/users/${user.id}`,user);
        return response.data;
    }
)
const userReducer :any= createSlice({
    name: 'users',
    initialState: {
        users:initialUsers,
        totalValidateUsers:0,
        allUsers:[],
        userLogged:{},
    },
    reducers: {
       handleLogged:(state:any,action:PayloadAction<any>)=>{
            state.userLogged=action.payload;
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
                    state.users=action.payload;
            })
            .addCase(totalValidateUsers.fulfilled,(state,action:PayloadAction<any>)=>{
                state.totalValidateUsers=action.payload;
            })
            .addCase(getAllUsers.fulfilled,(state,action:PayloadAction<any>)=>{
                state.allUsers=action.payload;
            })
            .addCase(testBlock.fulfilled,(state:any,action:PayloadAction<any>)=>{
                state.users=state.users.map(function(e:any){
                    if(action.payload.id===e.id){
                       e.block=action.payload.block;
                    }
                    return e;
                })
            })
            .addCase(addUsers.fulfilled,(state:any,action:PayloadAction<any>)=>{
                state.allUsers.push(action.payload);
            })
    }
});
export const { handleLogged,addStart,addSuccess,addFail} = userReducer.actions;
export default userReducer.reducer;