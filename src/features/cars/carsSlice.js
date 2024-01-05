import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  fetchCarsAPI,
  fetchCarByIdAPI,
  createCarAPI,
  updateCarAPI,
} from './fetchCarsAPI';

const initialState = {
  loading: false,
  cars: [],
  carById: {},
  error: '',
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => fetchCarsAPI());

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (carId) => fetchCarByIdAPI(carId),
);

export const addNewCar = createAsyncThunk('cars/addNewCar', async (carData) => {
  const response = await createCarAPI(carData);
  return response;
});

export const updateCar = createAsyncThunk('cars/updateCar', async (carData) => {
  const response = await updateCarAPI(carData);
  return response;
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
      state.error = action.error
        ? action.error.message
        : 'Unknown error occured';
    });
    builder.addCase(fetchCarById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCarById.fulfilled, (state, action) => {
      state.loading = false;
      state.carById = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCarById.rejected, (state, action) => {
      state.loading = false;
      state.carById = {};
      state.error = action.error
        ? action.error.message
        : 'Unknown error occured';
    });
    // Add a New Car
    builder.addCase(addNewCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewCar.fulfilled, (state, action) => {
      console.log('Fulfilled Action:', action);
      state.loading = false;
      // state.cars = state.cars.concat(action.payload);
      state.cars = [...state.cars, action.payload];
      state.error = '';
    });
    builder.addCase(addNewCar.rejected, (state, action) => {
      console.error('Add New Car Rejected:', action.error);
      state.loading = false;
      state.error = action.error
        ? action.error.message
        : 'Unknown error occured';
    });
    // Update Car
    builder.addCase(updateCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCar.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car,
      );
      state.error = '';
    });
    builder.addCase(updateCar.rejected, (state, action) => {
      console.error('Update Car Rejected:', action.error);
      state.loading = false;
      state.error = action.error
        ? action.error.message
        : 'Unknown error occured';
    });
  },
});

// export const selectAllCars = (state) => state.cars.cars;
export const selectAllCars = (state) =>
  state.cars.loading ? [] : state.cars.cars;

export const selectAllReservedCars = (state) =>
  state.cars.cars.filter((car) => car.reserved === true);

export const selectCarsById = (state, carId) => {
  const foundCar = state.cars.cars.find((car) => car.id === carId);
  return foundCar || state.cars.carById || null;
};

/* export const selectCarsById = (state, carId) => state.cars.entities[carId]; */

export const selectCarsByUser = createSelector(
  [selectAllCars, (_, userId) => userId],
  (cars, userId) => cars.filter((car) => car.userId === userId),
);

export const { setFetchedCars, reserveCar, cancelCarReservation } =
  carsSlice.actions;

export default carsSlice.reducer;
