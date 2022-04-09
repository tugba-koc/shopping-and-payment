import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const sendUser = createAsyncThunk("post/postUser", async (user) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_POINT}/signup`, user).catch(err => console.log(err));
    return res;
});

export const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            "fullName": "",
            "email": ""
        },
        error: null,
        status: "idle",
    },
    reducers: {
        handleChange: (state, action) => {
            state.users["fullName"] = action.payload.fullName;
            state.users["email"] = action.payload.email;
            let cacheName = 'user';
            let data = state.users["fullName"];
            caches.open(cacheName).then(cache => {
                cache.add(data).then(() => {
                    console.log("Data cached ")
                }).catch(err => console.log(err));
            });
        },
    },
    extraReducers: {
        [sendUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [sendUser.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.users["fullName"] = action.payload.fullName;
            state.users["email"] = action.payload.email;
        },
        [sendUser.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const { handleChange } = usersSlice.actions;
export const selectUser = (state) => state.user.users;
export const selectStatus = (state) => state.user.status;
export default usersSlice.reducer;
