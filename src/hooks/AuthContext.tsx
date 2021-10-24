import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  email: string;
  profiles: any;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
let user: User;

function AuthProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Mostweb:token');
    const user = localStorage.getItem('@Mostweb:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<{ token: string, id: object, profiles: any }>('/login', {
      email,
      password,
    });

    const { token, id, profiles } = response.data;

    localStorage.setItem('@Mostweb:token', token);
    localStorage.setItem('@Mostweb:user', JSON.stringify(id, email, profiles));

    setData({ token, user })
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Mostweb:token');
    localStorage.removeItem('@Mostweb:user');

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
