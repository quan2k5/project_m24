import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import usersReducer from "./reducers/usersReducer";
export const store=configureStore({
    reducer:{
        products:productReducer,
        users:usersReducer,
    }
})