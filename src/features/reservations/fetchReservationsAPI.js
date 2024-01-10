import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = '/reservations/';
const FEATURE_URL = baseUrl + endpoint;

const fetchReservationsAPI = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(FEATURE_URL, { headers });
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.statusText);
    }
  },
);

const fetchReservationByIdAPI = async (reservationId) => {
  const url = `${FEATURE_URL}/${reservationId}`;

  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch reservation by ID: ${error.message}`);
  }
};

const createReservationAPI = createAsyncThunk(
  'reservation/createReservation',
  async (reservationData, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(FEATURE_URL, reservationData, { headers });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  },
);

const cancelReservationAPI = createAsyncThunk(
  'reservations/cancelReservation',
  async (reservationId, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.delete(`${FEATURE_URL}${reservationId}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const updateReservationAPI = async (reservationData) => {
  try {
    const response = await fetch(FEATURE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error('Failed to create a new reservation');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to create a new reservation: ${error.message}`);
  }
};

export {
  fetchReservationsAPI,
  fetchReservationByIdAPI,
  createReservationAPI,
  updateReservationAPI,
  cancelReservationAPI,
};
