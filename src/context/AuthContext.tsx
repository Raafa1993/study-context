import React, { createContext, ReactNode, useCallback } from 'react';

interface AuthContextData {
  email: string;
  signIn(): void
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: TransactionsProviderProps) {
  const signIn = useCallback(() => {
    console.log('signIn')
  }, [])

  return (
    <AuthContext.Provider value={{ email: 'rafa@rafa', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
