import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchReservationsAPI, fetchReservationByIdAPI, createReservationAPI, updateReservationAPI,
} from './fetchReservationsAPI';

const initialState = {
  loading: false,
  reservations: [],
  reservationById: {},
  error: '',
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => fetchReservationsAPI());

export const fetchReservationById = createAsyncThunk('reservations/fetchReservationById', async (reservationId) => fetchReservationByIdAPI(reservationId));

export const addNewReservation = createAsyncThunk('reservations/addNewReservation', async (reservationData) => {
  const response = await createReservationAPI(reservationData);
  return response.data;
});

export const updateReservation = createAsyncThunk('reservations/updateReservation', async (reservationData) => {
  const response = await updateReservationAPI(reservationData);
  return response.data;
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,

  reducers: {
    setFetchedReservations: (state) => {
      const selectedReservations = state.reservations.map((reservation) => ({
        id: reservation.id,
        date: reservation.date,
        city: reservation.city,
        car: reservation.car,
      }));
      state.reservations = selectedReservations;
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = action.payload;
      state.error = '';
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.loading = false;
      state.reservations = [];
      state.error = action.error ? action.error.message : 'Unknown error occurred';
    });
    builder.addCase(fetchReservationById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReservationById.fulfilled, (state, action) => {
      state.loading = false;
      state.reservationById = action.payload;
      state.error = '';
    });
    builder.addCase(fetchReservationById.rejected, (state, action) => {
      state.loading = false;
      state.reservationById = {};
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
    // Add a New Reservation
    builder.addCase(addNewReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewReservation.fulfilled, (state, action) => {
      state.loading = false;
      // state.reservations = state.reservations.concat(action.payload);
      state.reservations = [...state.reservations, action.payload];
      state.error = '';
    });
    builder.addCase(addNewReservation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
    // Update Reservation
    builder.addCase(updateReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateReservation.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = state.reservations.map((reservation) => (
        reservation.id === action.payload.id ? action.payload : reservation
      ));
      state.error = '';
    });
    builder.addCase(updateReservation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
  },
});

export const selectAllReservations = (state) => state.reservations.reservations;
/* export const selectAllReservations = (state) => (
  state.reservations.loading ? [] : state.reservations.reservations
); */

export const memoizedSelectAllReservations = createSelector(
  [selectAllReservations],
  (reservations) => reservations,
);

export const selectReservationsById = (state, reservationId) => {
  const foundReservation = state.reservations.reservations.find(
    (reservation) => reservation.id === reservationId,
  );
  return foundReservation || state.reservations.reservationById || null;
};

export const selectReservationsByUser = createSelector(
  [selectAllReservations, (_, userId) => userId],
  (reservations, userId) => reservations.filter((reservation) => reservation.userId === userId),
);

export const {
  setFetchedReservations,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;
