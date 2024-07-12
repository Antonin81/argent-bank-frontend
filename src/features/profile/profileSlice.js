import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "currentUser",
    initialState: {},
    reducers: {
        storeUserProfile: (currentState, action) => {
            const currentUser = { id: action.payload.id, firstname: action.payload.firstname, lastname: action.payload.lastname };
            return currentUser;
        },
        deleteUserProfile: (currentState, action) => {
            return {};
        }
    }
})