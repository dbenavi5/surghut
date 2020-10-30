import React, {createContext, useState, useContext, useEffect} from 'react';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router';
import {LoginForm} from '../components/Form';
import Navbar from '../components/Navbar';

// api here is an axios instance which has the baseURL set according to the env.
import api from '../api/api';


const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        console.log('Got a token in the cookies, let\'s see if it is valid');
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const {data} = await api.get('users/me');
        if (data.profile.length === 1) setUser(data.profile);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (pseudo, password) => {
    const {data: token} = await api.post('auth/login', {pseudo, password});
    console.log('answer = ', token.token);
    if (token.token) {
      console.log('Got token');
      Cookies.set('token', token.token, {expires: 60});
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      const {data} = await api.get('users/me');
      setUser(data.profile);
      console.log('Got user', data.profile);
      router.push('/');
    }
  };

  const register = async (pseudo, mail, password) => {
    const {data: token} = await api.post('auth/register', {pseudo, mail, password});
    console.log('answer = ', token.token);
    if (token.token) {
      console.log('Got token');
      Cookies.set('token', token.token, {expires: 60});
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      const {data} = await api.get('users/me');
      setUser(data.profile);
      console.log('Got user', data.profile);
      router.push('/');
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    delete api.defaults.headers.Authorization;
    // window.location.pathname = '/login';
    router.push('/login');
  };


  return (
    <AuthContext.Provider value={{isAuthenticated: !!user, user, login, register, loading, logout}}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);

export function ProtectRoute({children}) {
  const {isAuthenticated, isLoading} = useAuth();
  const router = useRouter();
  if (isLoading || (!isAuthenticated && router.pathname !== '/login')) {
    // router.push('/');
    // window.location.pathname = '/login';

    return (
      <>
        <Navbar/>
        <LoginForm/>
      </>
    );
  }
  return children;
}