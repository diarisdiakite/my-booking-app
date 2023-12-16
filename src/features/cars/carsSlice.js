import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCarsAPI from './fetchCarsAPI';

const initialState = {
  loading: false,
  cars: [
    {
      id: '1',
      name: 'BENTLEY FLYING SPUR',
      image: 'imageLink',
      model: 'BENTLEY FLYING SPUR',
      year: 2024,
      description: 'Get an ultra-luxurious experience with our new Bentley Fmying Spur2024',
      category: 'Sport',
      website: 'website-link',
      reserved: false,
    },
    {
      id: '2',
      name: 'BENTLEY CONTINENTAL GT',
      image: 'imageLink',
      model: 'BENTLEY CONTINENTAL GT',
      year: 2024,
      description: 'Get an ultra-luxurious experience with our new Bentley Continental 2024',
      category: 'Sport',
      website: 'website-link',
      reserved: false,
    },
    {
      id: '3',
      name: 'ROLLS-ROYCE PHANTOM',
      image: 'imageLink',
      model: 'ROLLS-ROYCE PHANTOM',
      year: 2024,
      description: 'Get an ultra-luxurious experience with our new Rolls-Royce Phantom 2024',
      category: 'Sport',
      website: 'website-link',
      reserved: false,
    },
    {
      id: '4',
      name: 'ASTON MARTIN DB12',
      image: 'imageLink',
      model: 'ASTON MARTIN DB12',
      year: 2024,
      description: 'Get an ultra-luxurious experience with our new Aston Martin DB12 2024',
      category: 'Sport',
      website: 'website-link',
      reserved: false,
    },
    {
      id: '5',
      name: 'MERCEDES-MAYBACH S-CLASS',
      image: 'imageLink',
      model: 'MERCEDES-MAYBACH S-CLASS',
      year: 2024,
      description: 'Get an ultra-luxurious experience with our new Mercedes Maybach S-Class 2024',
      category: 'Sport',
      website: 'website-link',
      reserved: false,
    },
  ],
  error: '',
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => fetchCarsAPI());

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    setFetchedCars: (state) => {
      const selectedCars = state.cars.map((car) => ({
        id: car.id,
        name: car.name,
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
  },
});

// export const selectAllCars = (state) => state.cars.cars;
export const selectAllCars = (state) => (state.cars.loading ? [] : state.cars.cars);

export const selectAllReservedCars = (state) => state.cars.cars.filter(
  (car) => car.reserved === true,
);

export const selectCarsById = (state, carId) => state.cars.cars.find(
  (car) => car.id === carId,
);

export const selectCarsByUser = createSelector(
  [selectAllCars, (_, userId) => userId],
  (cars, userId) => cars.filter((car) => car.userId === userId),
);

export const {
  setFetchedCars, reserveCar,
  cancelCarReservation,
} = carsSlice.actions;

export default carsSlice.reducer;
