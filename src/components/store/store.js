import { configureStore } from '@reduxjs/toolkit';
import dataSlice from "./Datamanagment"

const store = configureStore({
    reducer: {
        invoices: dataSlice, 
    },
});

export default store; 