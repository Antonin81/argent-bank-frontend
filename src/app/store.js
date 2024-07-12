import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../features/login/loginSlice";
import { profileSlice } from "../features/profile/profileSlice";

let state = {
    currentUser: {},
    token: null,
}

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            token: loginSlice.reducer,
            currentUser: profileSlice.reducer,
        })
    }
)