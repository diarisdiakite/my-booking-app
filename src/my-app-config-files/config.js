// config.js
const externalUrls = {
  rorAddCarForm: 'http://localhost:3000/cars/new',
  rorEditCarForm: (carId) => `http://localhost:3000/cars/${carId}/edit`,
  rorDeleteCarForm: 'http://localhost:3000/cars',

  rorUserReservations: (userId) => `http://localhost:3000/users/${userId}/reservations`,
  rorAddReservationForm: (userId, carId) => `http://localhost:3000/users/${userId}/cars/${carId}/reservations/new`,
  rorEditReservationForm: (userId, carId, reservationId) => `http://localhost:3000/users/${userId}/cars/${carId}/reservations/${reservationId}/edit`,
  rorDeleteReservationForm: (userId, carId) => `http://localhost:3000/users/${userId}/cars/${carId}/reservations`,

  rorAddCityForm: 'http://localhost:3000/cities/new',
  rorEditCityForm: (cityId) => `http://localhost:3000/cities/${cityId}/edit`,
  rorDeleteCityForm: 'http://localhost:3000/cities',
};

export default externalUrls;
