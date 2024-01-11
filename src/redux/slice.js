import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({

    name: 'uath',
    initialState: {
        isAuthenticated: false,
    },

    reducers: {
        login: (state) => {
            state.isAuthenticated = true;

        },

        logout: (state) => {
            state.isAuthenticated = false;
        }
    },
});

export const { login, logout } = authSlicer.actions;
export const selectIsauthenticated = (state) =>state.auth.isAuthenticated

export default authSlicer.reducer;