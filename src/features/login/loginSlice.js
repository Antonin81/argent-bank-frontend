import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "token",
    initialState: {},
    reducers: {
        logUserIn: (currentState, action) => {
            const token = action.payload;
            return token;
        },
        logUserOut: (currentState, action) => {
            return null;
        }
    }
})