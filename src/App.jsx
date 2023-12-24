import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Reservation,
  DashboardLayout,
  Home,
  Layout,
  Models,
  ReservationForm,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index path="/dashboard/models" element={<Models />} />
          <Route path="/dashboard/reservation" element={<Reservation />} />
          <Route path="/dashboard/reservation-form" element={<ReservationForm />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
