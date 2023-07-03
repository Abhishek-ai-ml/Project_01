import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    clientData:null,
    loading: false,
};

const clientSlice = createSlice({
    name:"client",
    initialState: initialState,
    reducers: {
        setClientData(state, value) {
            state.clientData = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const {setClientData, setLoading} = clientSlice.actions;
export default clientSlice.reducer;