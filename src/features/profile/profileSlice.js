import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        id: null,
        firstname: null,
        lastname: null,
    },
    reducers: {
        storeUserProfile: (currentState, action) => {
            currentState.id = action.payload.id;
            currentState.firstname = action.payload.firstname;
            currentState.lastname = action.payload.lastname;
        },
        deleteUserProfile: (currentState, action) => {
            currentState.id = null;
            currentState.firstname = null;
            currentState.lastname = null;
        }
    }
})