import { Route, Routes } from 'react-router-dom';
import Home from './app/presentation/pages/Home/Home';
import { GlobalStyle } from './styles/globalStyles';
import AdminPage from './app/presentation/pages/Admin/Admin';
import TeacherPage from './app/presentation/pages/Teacher/Teacher';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    </>
  );
}

export default App;
