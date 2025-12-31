import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserRole = 'admin' | 'user';

interface User {
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email: string, name: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Mock logic: if email contains 'admin', make them admin
      const role: UserRole = email.toLowerCase().includes('admin') ? 'admin' : 'user';
      setUser({ name, email, role });
      setIsLoading(false);
    }, 800);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};