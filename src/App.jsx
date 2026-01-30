import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './page/home.jsx';
import Grammar from './components/english/Grammar/index.jsx';
import WordForm from './components/english/Grammar/WordForm/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/grammar" element={<Grammar />} />
        <Route path="/grammar/word-form" element={<WordForm />} /> */}
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
