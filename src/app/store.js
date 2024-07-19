import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../features/login/loginSlice";
import { profileSlice } from "../features/profile/profileSlice";
import { formEditProfileSlice } from "../features/formEditProfile/formEditProfileSlice";

export const store = configureStore(
    {
        reducer: combineReducers({
            token: loginSlice.reducer,
            currentUser: profileSlice.reducer,
            formEditProfileState: formEditProfileSlice.reducer,
        })
    }
)