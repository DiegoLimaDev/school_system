import { Route, Routes } from 'react-router-dom';
import Home from './app/presentation/pages/Home/Home';
import { GlobalStyle } from './styles/globalStyles';
import Admin from './app/presentation/pages/Admin/Admin';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
