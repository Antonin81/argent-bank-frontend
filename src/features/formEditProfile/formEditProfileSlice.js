import { createSlice } from "@reduxjs/toolkit";

export const formEditProfileSlice = createSlice({
    name: "formEditProfileSlice",
    initialState: false,
    reducers: {
        toggleFormEditProfile: (currentState, action) => {
            return action.payload;
        },
    }
})