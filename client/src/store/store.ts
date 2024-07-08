import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import usersReducer from "./reducers/usersReducer";
import categoryReducer from "./reducers/categoryReducer";
export const store=configureStore({
    reducer:{
        products:productReducer,
        users:usersReducer,
        categories:categoryReducer,
    }
})