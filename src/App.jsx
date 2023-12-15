import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Models from './pages/Models';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Layout />}>
        <Route index element={<Models />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
