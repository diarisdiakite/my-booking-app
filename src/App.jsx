import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Models from './pages/Models';
import CarsListHome from './features/cars/CarsList';
import Car from './features/cars/Car';
import CarsList from './features/cars/backend/CarsList';
import NotFoundPage from './components/NotFoundPage';
import AddNewCarForm from './features/cars/backend/forms/AddNewCar';
import UpdateCarForm from './features/cars/backend/forms/UpdateCar';
import ReservationsListHome from './features/reservations/ReservationsList';
import Reservation from './features/reservations/Reservation';
import AddNewReservationForm from './features/reservations/backend/forms/AddNewReservation';
// import UsersList from './features/users/UsersList';
// import User from './features/users/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarsListHome />} />
        <Route path="/models" element={<Layout />}>
          <Route index element={<Models />} />
        </Route>
        {' '}
        <Route path="/cars">
          <Route index element={<CarsList />} />
          <Route path="new" element={<AddNewCarForm />} />
          <Route path="delete" element={<CarsList />} />
          <Route path=":carId" element={<Car />}>
            <Route index element={<Car />} />
            <Route path="update" element={<UpdateCarForm />} />
          </Route>
        </Route>
        <Route path="/reservations">
          <Route index element={<ReservationsListHome />} />
          <Route path="new" element={<AddNewReservationForm />} />
          {/* <Route path="delete" element={<ReservationsList />} /> */}
          <Route path=":reservationId" element={<Reservation />}>
            <Route index element={<Reservation />} />
            {/* <Route path="update" element={<UpdateReservationForm />} /> */}
          </Route>
        </Route>
        {/* <Route path="/users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
