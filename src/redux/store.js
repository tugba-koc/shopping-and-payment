import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice"
import packageSlice from "./package/packageSlice"
import amountSlice from "./amount/amountSlice"
import aggrementSlice from "./aggrement/aggrementSlice";

export const store = configureStore({
    reducer:{
        user : userSlice,
        package : packageSlice,
        amount : amountSlice,
        aggrement: aggrementSlice
    }
})