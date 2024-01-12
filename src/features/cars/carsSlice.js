// carsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken } from '../../utils/localStorage';

// const BASE_URL = `${process.env.REACT_APP_API_URL}/cars`;
const BASE_URL = 'http://localhost:3000/api/v1/cars';
const initialState = {
  cars: [],
  status: 'idle',
  loading: false,
  error: null,
};

const token = getToken();

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async (_, thunkAPI) => {
  try {
    const response = await fetch(BASE_URL, { headers });

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    return data.map((car) => ({
      ...car,
      reserved: false,
    }));
  } catch (error) {
    return thunkAPI.rejectWithValue(`Failed to fetch the data, ${error}`);
  }
});

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (carId) => {
    const response = await axios.get(
      `${BASE_URL}/cars/${carId}`,
    );
    return response.data;
  },
);

export const addNewCar = createAsyncThunk('cars/AddNewCar', async (add) => {
  try {
    const token = getToken();
    const response = await axios.post(BASE_URL, add, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewCar.fulfilled, (state, action) => {
        state.loading = false;
        const {
          name,
          description,
          image,
          financeFee,
          optionToPurchaseFee,
          duration,
          totalAmountPayable,
          facebook,
          twitter,
          website,
          userId,
        } = action.payload;

        const newCar = {
          name,
          description,
          image,
          financeFee,
          optionToPurchaseFee,
          duration,
          totalAmountPayable,
          facebook,
          twitter,
          website,
          userId,
        };
        state.cars.push(newCar);
        state.status = 'success';
        state.error = null;
      })
      .addCase(addNewCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllCars = (state) => state.cars.cars;

export default carsSlice.reducer;
