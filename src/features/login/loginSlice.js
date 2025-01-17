import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        token: null,
    },
    reducers: {
        logUserIn: (currentState, action) => {
            currentState.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        logUserOut: (currentState, action) => {
            currentState.token = null;
            localStorage.removeItem("token");
        }
    }
})