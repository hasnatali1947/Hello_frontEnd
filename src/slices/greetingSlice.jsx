import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGreeting = createAsyncThunk('Fetching/Greeting', async ()=>{
    const response = await axios.get("http://localhost:3000/api/v1/greetings")
    return await response.data;
});

const initialState = {
    greeting: {},
    isLoading: false,
    error: undefined
};

const greetingSlice = createSlice({
    name:"greeting",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchGreeting.fulfilled, (state, action)=>{
            state.isLoading = false
            state.greeting = action.payload
        });
        builder.addCase(fetchGreeting.rejected, (state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        });
    }
})

export default greetingSlice.reducer;