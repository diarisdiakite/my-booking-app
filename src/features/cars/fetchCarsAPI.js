// const FEATURE_URL = 'http://localhost:3000/api/v1/cars';
// const FEATURE_URL_1 = 'http://localhost:3000/api/v1/cars/carId';

const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = '/cars';
const FEATURE_URL = baseUrl + endpoint;

const fetchCarsAPI = async () => {
  try {
    const response = await fetch(FEATURE_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    return data.map((car) => ({
      ...car,
      reserved: false,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
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
  fetchCarsAPI, fetchCarByIdAPI, createCarAPI, updateCarAPI,
};
