import authReducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default Store;