import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Booking,
  DashboardLayout,
  Home,
  Layout,
  Lifestyle,
  Models,
  TestDrive,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index path="/dashboard/models" element={<Models />} />
          <Route path="/dashboard/lifestyle" element={<Lifestyle />} />
          <Route path="/dashboard/booking" element={<Booking />} />
          <Route path="/dashboard/test-drive" element={<TestDrive />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
