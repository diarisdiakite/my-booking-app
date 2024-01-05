import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { createCarAPI } from '../../fetchCarsAPI';
import SideNavbar from '../../../../components/SideNavbar';
import { addNewCar } from '../../carsSlice';

function AddNewCarForm() {
  const dispatch = useDispatch();

  const [carData, setCarData] = useState({
    name: '',
    image: '',
    model: '',
    year: '',
    description: '',
    facebook: '',
    twitter: '',
    website: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addNewCar(carData));

      // Clear the form after successfull submission
      setCarData({
        name: '',
        image: '',
        model: '',
        year: '',
        description: '',
        facebook: '',
        twitter: '',
        website: '',
      });
    } catch (error) {
      console.error('Failed to add a new car:', error.message);
    }
  };

  return (
    <div className="flex flex-shrink-0">
      <SideNavbar />
      <div className="w-[80%] border-r-2 border-slate-200 p-4 w-full">
        <p className="text-lg font-semibold mb-4">Add a New Car</p>
        <form action="" className="add-car-form">

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
              <input
                type="text"
                placeholder="Add the car name"
                id="name"
                value={carData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Image
              <input
                type="text"
                placeholder="Add the car image"
                id="image"
                value={carData.image}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="model" className="block text-sm font-medium text-gray-600">
              Model
              <input
                type="text"
                placeholder="Add the car image"
                id="model"
                value={carData.model}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="year" className="block text-sm font-medium text-gray-600">
              Year
              <input
                type="number"
                placeholder="Add the car year"
                id="year"
                value={carData.year}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
              <input
                type="text"
                placeholder="Add the car description"
                id="description"
                value={carData.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-600">
              Facebook
              <input
                type="text"
                placeholder="Add the car facebook"
                id="facebook"
                value={carData.facebook}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-600">
              Twitter
              <input
                type="text"
                placeholder="Add the car twitter"
                id="twitter"
                value={carData.twitter}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block text-sm font-medium text-gray-600">
              Website
              <input
                type="text"
                placeholder="Add the car website"
                id="website"
                value={carData.website}
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

export default AddNewCarForm;
