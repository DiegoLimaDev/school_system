import { Route, Routes } from 'react-router-dom';
import Home from './app/presentation/pages/Home/Home';
import { GlobalStyle } from './styles/globalStyles';
import AdminPage from './app/presentation/pages/Admin/Admin';
import TeacherPage from './app/presentation/pages/Teacher/Teacher';
import Header from './app/presentation/layout/Header';
import Footer from './app/presentation/layout/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Box minHeight={'90dvh'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
