import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGreeting = createAsyncThunk('Fetching/greeting', async () => {
    const url = `http://localhost:3000/api/v1/greetings/random`;
    console.log("API URL:", url);
    try {
        const response = await axios.get(url);
        console.log("API Response:", response.data);
        return await response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
});

const initialState = {
    greeting: {},
    isLoading: false,
    error: undefined
};

const greetingSlice = createSlice({
    name:"greeting",
    initialState,
    reducers: {},
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