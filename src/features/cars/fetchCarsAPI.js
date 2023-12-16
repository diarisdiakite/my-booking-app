const FEATURE_URL = 'http://localhost:3000/api/v1/cars';

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

export default fetchCarsAPI;