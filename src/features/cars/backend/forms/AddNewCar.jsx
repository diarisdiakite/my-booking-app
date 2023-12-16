import React from 'react';

function AddNewCarForm() {
  return (
    <div className="main-container">
      <p>Add a New Car </p>
      <form action="" className="add-car-form">

        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Add the car name"
            id="name"
          />
        </label>

        <label htmlFor="image">
          Image
          <input
            type="text"
            placeholder="Add the car image"
            id="image"
          />
        </label>

        <label htmlFor="model">
          Model
          <input
            type="text"
            placeholder="Add the car model"
            id="model"
          />
        </label>

        <label htmlFor="year">
          Year
          <input
            type="number"
            placeholder="Add the car year"
            id="year"
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            type="text"
            placeholder="Add the car description"
            id="description"
          />
        </label>
        
        <label htmlFor="facebook">
          Facebook
          <input
            type="text"
            placeholder="Add the car facebook"
            id="facebook"
          />
        </label>
        <label htmlFor="twitter">
          Twitter
          <input
            type="text"
            placeholder="Add the car twitter"
            id="twitter"
          />
        </label>

        <label htmlFor="website">
          Website
          <input
            type="text"
            placeholder="Add the car website"
            id="website"
          />
        </label>

        <button
          type="button"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddNewCarForm;
