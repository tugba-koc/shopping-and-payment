import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAggrement = createAsyncThunk("get/getAggrement", async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_POINT}/payment`
    ).catch((err) => {
        console.log(err);
    });

    return res.data
});

export const aggrementSlice = createSlice({
    name: "aggrement",
    initialState: {
        content: "",
        error: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [getAggrement.pending]: (state, action) => {
            state.status = "loading";
        },
        [getAggrement.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.item = action.payload;
        },
        [getAggrement.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const selectContent = (state) => state.aggrement.content;
export const selectStatus = (state) => state.aggrement.status;
export default aggrementSlice.reducer;
