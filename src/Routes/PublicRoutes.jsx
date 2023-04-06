import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/Home/HomePage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import SignInPage from '../screens/SignInPage/SignInPage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-in" element={<SignInPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
  </Routes>
);

export default PublicRoutes;
