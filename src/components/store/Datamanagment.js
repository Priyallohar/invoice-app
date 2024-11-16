// store/Datamanagment.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Data } from '../../../data';

const dataSlice = createSlice({
    name: "Invoicedata",
    initialState: {
        invoices: Data
    },

    reducers: {
        markPaid: (state, action) => {
            const markInvoice = state.invoices.find((invoice) => invoice.id === action.payload);
            if (markInvoice) {
                markInvoice.status = "paid";
            }
        },
        deleteInvoice: (state, action) => {
            state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload);
        },
        addInvoice: (state, action) => {
            state.invoices.push(action.payload);
        },
        updateInvoice: (state, action) => {
            const index = state.invoices.findIndex(invoice => invoice.id === action.payload.id);
            if (index !== -1) {
                // Replace the existing invoice with the updated one
                state.invoices[index] = {
                    ...state.invoices[index],
                    ...action.payload
                };
            }
        }
    }
});

// Export actions including updateInvoice
export const { markPaid, deleteInvoice, addInvoice, updateInvoice } = dataSlice.actions;

// Export reducer
export default dataSlice.reducer;