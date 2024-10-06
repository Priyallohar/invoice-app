import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Data } from '../../../data';

const dataSlice= createSlice({
    name:"Invoicedata",
    initialState:{
        invoices: Data
    },

    reducers:{
     markPaid:(state , action)=>{
        const markInvoice = state.invoices.find((invoice)=>invoice.id===action.payload)
        markInvoice.status = "paid"
     },
     deleteInvoice:(state , action)=>{
        state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload);
     }
    }

   
})
export const { markPaid,deleteInvoice } = dataSlice.actions;
export default dataSlice.reducer;