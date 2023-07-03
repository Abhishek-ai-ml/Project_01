import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderData:null,
}

const orderSlice = createSlice({
    name:"order",
    initialState:initialState,
    reducer: {
        setOrderData(state, value) {
            state.orderData = value.payload;
        }
    }
});

export const {setOrderData} = orderSlice.actions;
export default orderSlice.reducer;