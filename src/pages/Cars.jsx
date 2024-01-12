import React from 'react';
import { CarsList } from '../components';

const Cars = () => (

  <div className="flex-1 flex flex-col gap-12">
    <div className="text-center">
      <h2 className="page-title">Available cars</h2>
      <p className="page-title__subtitle">
        Pick one of these luxury cars and enjoy riding
      </p>
    </div>
    <CarsList />
  </div>
);

export default Cars;
