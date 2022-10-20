import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../NewRedux/MyProductSlice";
import MyCartReducer from "../NewRedux/MyCartSlice";

export const mystore = configureStore({
    reducer: {
        product: MyProductReducer,
        cart: MyCartReducer
    },
});