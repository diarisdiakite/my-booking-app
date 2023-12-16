import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Models from './pages/Models';
import NavBar from './components/NavBar';
import Car from './features/cars/Car';
import CarsList from './features/cars/CarsList';
import NotFoundPage from './components/NotFoundPage';
// import UsersList from './features/users/UsersList';
// import User from './features/users/User';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Layout />}>
          <Route index element={<Models />} />
        </Route>
        {' '}
        <Route path="/cars">
          <Route index element={<CarsList />} />
          <Route path=":carId" element={<Car />} />
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
