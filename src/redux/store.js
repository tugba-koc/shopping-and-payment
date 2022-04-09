import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice"
import paymentSlice from "./payment/paymentSlice"

export const store = configureStore({
    reducer:{
        user : userSlice,
        payment : paymentSlice
    }
})