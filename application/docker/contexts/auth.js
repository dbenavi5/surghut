import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {LoginForm} from '../components/Form';

//api here is an axios instance which has the baseURL set according to the env.
import api from '../api/api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('users/me')
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (pseudo, password) => {
        const answer = await api.post('auth/login', { pseudo, password })
        console.log("answer = ", answer);
        if (false) {
            console.log("Got token")
            Cookies.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('users/me')
            setUser(user)
            console.log("Got user", user)
        }
    }

    const logout = (email, password) => {
        const router = useRouter()
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization

        router.push('/login')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter()
    if (isLoading || (!isAuthenticated && router.pathname !== '/login')){
      return <LoginForm/>; 
    }
    return children;
};