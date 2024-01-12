import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewReservation } from '../../features/reservations/reservationsSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();

  const [reservationData, setReservationData] = useState({
    car: '',
    user: '',
    finance_fee: '',
    option_to_purchase_fee: '',
    total_amount_payable: '',
    duration: '',
    date: '',
    city: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addNewReservation(reservationData));

      // Clear the form after successfull submission
      setReservationData({
        car: '',
        user: '',
        finance_fee: '',
        option_to_purchase_fee: '',
        total_amount_payable: '',
        duration: '',
        date: '',
        city: '',
      });
    } catch (error) {
      setError(`Failed to add a new car: ${error.message}`);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Add a New Reservation</h3>
      <form action="" className="add-reservation-form">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            User
            <input
              type="text"
              placeholder="Add the user name"
              id="user"
              value={reservationData.user}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-600"
          >
            Car
            <input
              type="text"
              placeholder="Add the car references"
              id="car"
              value={reservationData.car}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-gray-600"
          >
            Date
            <input
              type="text"
              placeholder="Add the reservation date"
              id="date"
              value={reservationData.date}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-600"
          >
            City
            <input
              type="text"
              placeholder="Add the reservation city"
              id="city"
              value={reservationData.city}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default ReservationForm;
