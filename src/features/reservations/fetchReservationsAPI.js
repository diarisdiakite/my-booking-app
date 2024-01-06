const FEATURE_URL = 'http://localhost:3000/api/v1/reservations';
// const FEATURE_URL_1 = 'http://localhost:3000/api/v1/reservations/reservationId';

const fetchReservationsAPI = async () => {
  try {
    const response = await fetch(FEATURE_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch reservations');
    }

    const data = await response.json();
    return data.map((reservation) => ({
      ...reservation,
      reserved: false,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
};

const fetchReservationByIdAPI = async (reservationId) => {
  const url = `${FEATURE_URL}/${reservationId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch reservation by ID');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch reservation by ID: ${error.message}`);
  }
};

const createReservationAPI = async (reservationData) => {
  try {
    const response = await fetch(FEATURE_URL, {
      method: 'POST',
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
  fetchReservationsAPI, fetchReservationByIdAPI, createReservationAPI, updateReservationAPI,
};
