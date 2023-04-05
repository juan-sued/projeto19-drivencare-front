import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/Home/HomePage';
import LoginPage from '../screens/SignInPage/SignInPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/sing-in" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default PublicRoutes;
