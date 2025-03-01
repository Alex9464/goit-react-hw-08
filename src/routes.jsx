import { Routes, Route, Navigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

const RoutesConfig = () => {
  // Получаем токен из состояния Redux для проверки авторизации
  const token = useSelector(state => state.auth.token);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={token ? <Navigate to="/contacts" replace /> : <LoginPage />}
      />
      <Route
        path="/contacts"
        element={token ? <ContactsPage /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default RoutesConfig;
