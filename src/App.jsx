import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Reservation,
  DashboardLayout,
  Home,
  Layout,
  Cars,
  ReservationForm,
} from './pages';
import { CarDetails } from './components';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index path="/dashboard/cars" element={<Cars />} />
          <Route path="/dashboard/cars/:id" element={<CarDetails />} />
          <Route path="/dashboard/reservation" element={<Reservation />} />
          <Route path="/dashboard/reservation-form" element={<ReservationForm />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
