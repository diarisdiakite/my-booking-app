import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../../utils/localStorage';

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = '/cars';
const FEATURE_URL = baseUrl + endpoint;

const token = getToken();

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const fetchCarByIdAPI = async (carId) => {
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

/* export const fetchCarById = createAsyncThunk(
  'carDetails/fetchCarDetails',
  async (carId) => {
    const response = await axios.get(
      `${FEATURE_URL}/cars/${carId}`,
    );
    return response.data;
  },
);
 */
const createCarAPI = async (carData) => {
  try {
    const response = await fetch(FEATURE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      throw new Error('Failed to create a new car');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to create a new car: ${error.message}`);
  }
};

const updateCarAPI = async (carData) => {
  try {
    const response = await fetch(FEATURE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      throw new Error('Failed to create a new car');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to create a new car: ${error.message}`);
  }
};

export {
  fetchCarByIdAPI, createCarAPI, updateCarAPI,
};
