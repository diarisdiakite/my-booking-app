import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarDetails, NewCarForm, ReservationForm } from './components';
import {
  Cars,
  DashboardLayout,
  Home,
  Layout,
  Reservations,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index path="/dashboard/cars" element={<Cars />} />
          <Route path="/dashboard/cars/:id" element={<CarDetails />} />
          <Route path="/dashboard/reservations" element={<Reservations />} />
          <Route path="/dashboard/reservation-form" element={<ReservationForm />} />
          <Route path="/dashboard/new-car-form" element={<NewCarForm />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
