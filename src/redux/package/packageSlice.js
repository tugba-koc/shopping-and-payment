import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPackages = createAsyncThunk("get/getPackages", async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_POINT}/packages`
    ).catch(err=>{
        console.log(err)
    })
    return res.data
});

export const packageSlice = createSlice({
    name: "packages",
    initialState: {
        item: [],
        error: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [getPackages.pending]: (state, action) => {
            state.status = "loading";
        },
        [getPackages.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.item = action.payload;
        },
        [getPackages.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const selectItems = (state) => state.package.item;
export const selectStatus = (state) => state.package.status;
export default packageSlice.reducer;
