import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FEATURE_URL = 'http://localhost:3000/api/v1/cars';

export const fetchCarByIdAPI = async (carId) => {
  const url = `${FEATURE_URL}/${carId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch car by ID');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch car by ID: ${error.message}`);
  }
};

export const fetchCarById = createAsyncThunk(
  'carDetails/fetchCarById',
  async (carId) => {
    const data = await fetchCarByIdAPI(carId);
    return data;
  },
);

const initialState = {
  car: null,
  loading: false,
  error: null,
};

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCarsById = (state) => state.carDetails.car;

export default carDetailsSlice.reducer;
