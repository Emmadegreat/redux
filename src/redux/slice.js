// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            window.location.href = "./profile";
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    },
});

export const { login, logout } = authSlice.actions;
export const selectIsauthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
