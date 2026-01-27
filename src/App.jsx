import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './page/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
