import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { createReservationAPI } from '../../fetchReservationsAPI';
import SideNavbar from '../../../../components/SideNavbar';
import { addNewReservation } from '../../reservationsSlice';

function AddNewReservationForm() {
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
      console.error('Failed to add a new reservation:', error.message);
    }
  };

  return (
    <div className="flex flex-shrink-0">
      <SideNavbar />
      <div className="w-[80%] border-r-2 border-slate-200 p-4 w-full">
        <p className="text-lg font-semibold mb-4">Add a New Reservation</p>
        <form action="" className="add-reservation-form">

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              User
              <input
                type="text"
                placeholder="Add the reservation name"
                id="user"
                value={reservationData.user}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Car
              <input
                type="text"
                placeholder="Add the reservation image"
                id="car"
                value={reservationData.car}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="model" className="block text-sm font-medium text-gray-600">
              Location
              <input
                type="finance_fee"
                placeholder="Add the reservation image"
                id="finance_fee"
                value={reservationData.finance_fee}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="year" className="block text-sm font-medium text-gray-600">
              Option to purchase fee
              <input
                type="option_to_purchase_fee"
                placeholder="Add the reservation year"
                id="option_to_purchase_fee"
                value={reservationData.option_to_purchase_fee}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Total_amount_payable
              <input
                type="text"
                placeholder="Add the reservation description"
                id="total_amount_payable"
                value={reservationData.total_amount_payable}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-600">
              Duration
              <input
                type="number"
                placeholder="Add the reservation facebook"
                id="duration"
                value={reservationData.duration}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-600">
              Date
              <input
                type="text"
                placeholder="Add the reservation twitter"
                id="date"
                value={reservationData.date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block text-sm font-medium text-gray-600">
              City
              <input
                type="text"
                placeholder="Add the reservation website"
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
      </div>
    </div>
  );
}

export default AddNewReservationForm;
