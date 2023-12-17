import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCarsAPI, fetchCarByIdAPI } from './fetchCarsAPI';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => fetchCarsAPI());

export const fetchCarById = createAsyncThunk('cars/fetchCarById', async (carId) => {
  const car = await fetchCarByIdAPI(carId);
  return car;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    setFetchedCars: (state) => {
      const selectedCars = state.cars.map((car) => ({
        id: car.id,
        name: car.name,
        image: car.image,
        desription: car.description,
        reserved: false,
      }));
      state.cars = selectedCars;
      state.loading = false;
      state.error = '';
    },
    reserveCar: (state, action) => {
      const carId = action.payload;
      state.cars = state.cars.map((car) => {
        if (car.id !== carId) return car;
        return { ...car, reserved: true };
      });
    },
    cancelCarReservation: (state, action) => {
      const carId = action.payload;
      state.cars = state.cars.map((car) => {
        if (car.id !== carId) return car;
        return { ...car, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.cars = [];
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
    builder.addCase(fetchCarById.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = [action.payload];
      state.error = '';
    });
  },
});

// export const selectAllCars = (state) => state.cars.cars;
export const selectAllCars = (state) => (state.cars.loading ? [] : state.cars.cars);

export const selectAllReservedCars = (state) => state.cars.cars.filter(
  (car) => car.reserved === true,
);

export const selectCarsById = (state, carId) => {
  const foundCar = state.cars.cars.find((car) => car.id === carId);
  return foundCar || null; // Return null or a default value if the car is not found
};

/* export const selectCarsById = (state, carId) => state.cars.entities[carId]; */

export const selectCarsByUser = createSelector(
  [selectAllCars, (_, userId) => userId],
  (cars, userId) => cars.filter((car) => car.userId === userId),
);

export const {
  setFetchedCars, reserveCar,
  cancelCarReservation,
} = carsSlice.actions;

export default carsSlice.reducer;
