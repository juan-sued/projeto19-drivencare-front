import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosI } from '../services/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storagedUser = localStorage.getItem('TBAuthUser');
    const storagedToken = localStorage.getItem('TBAuthToken');

    if (storagedUser && storagedToken) {
      axiosI.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
      setUserInfo(JSON.parse(storagedUser));
    }
  }, []);

  async function signIn({
    signInData,
    setStateCollorButton,
    setSignIndata,
    typeUser
  }) {
    setStateCollorButton('#8a8893');

    try {
      const { data } = await axiosI.post(`${typeUser}/sign-in`, signInData);

      setUserInfo(data.user);

      axiosI.defaults.headers['Authorization'] = `Bearer ${data.token}`;
      localStorage.setItem('TBAuthUser', JSON.stringify(data.user));
      localStorage.setItem('TBAuthToken', data.token);

      navigate('/');
    } catch (err) {
      setSignIndata({
        email: '',
        password: ''
      });
      setStateCollorButton('#e21a27');
    }
  }

  const signOut = () => {
    navigate('/sign-in');
    setUserInfo(null);
    localStorage.removeItem('TBAuthUser');
    localStorage.removeItem('TBAuthToken');
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!userInfo,
        userInfo,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
