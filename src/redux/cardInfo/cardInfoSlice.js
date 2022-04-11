import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const sendCard = createAsyncThunk("post/postCard", async (cardDetails) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_POINT}/payment`, cardDetails)
    return res;
});

export const cardInfoSlice = createSlice({
    name: "card",
    initialState: {
        cardInfo: {
            packageIds: [],
            cardHolderName: "",
            cardNumber: "",
            expireDate: "",
            cvv: "",
            totalAmount: ""
        },
        error: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [sendCard.pending]: (state, action) => {
            state.status = "loading";
        },
        [sendCard.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.cardInfo["packageIds"] = action.payload.packageIds;
            state.cardInfo["cardHolderName"] = action.payload.cardHolderName;
            state.cardInfo["cardNumber"] = action.payload.cardNumber;
            state.cardInfo["expireDate"] = action.payload.expireDate;
            state.cardInfo["cvv"] = action.payload.cvv;
            state.cardInfo["totalAmount"] = action.payload.totalAmount;
        },
        [sendCard.rejected]: (state, action) => {
            state.status = "failed"; 
            state.error = action.error.message;
        },
    },
});

export const selectUser = (state) => state.card.cardInfo;
export const selectStatus = (state) => state.card.status;
export default cardInfoSlice.reducer;
