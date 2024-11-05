// reducers/itineraryReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch itineraries based on city ID
export const fetchItineraries = createAsyncThunk(
  "itineraries/fetchItineraries",
  async (cityId) => {
    const response = await fetch(`http://localhost:8081/api/itineraries/city/${cityId}`);
    const data = await response.json();
    return data.response;
  }
);

const itinerarySlice = createSlice({
  name: "itineraries",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default itinerarySlice.reducer;
