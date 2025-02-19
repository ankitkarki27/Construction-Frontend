import { createContext, useState, useEffect } from "react"; 

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize the user state by checking if user info exists in localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("UserInfo");
    return storedUser ? JSON.parse(storedUser) : null; // Parse user info if exists, otherwise null
  });

  // Login method
  const login = (user) => {
    setUser(user);
    localStorage.setItem("UserInfo", JSON.stringify(user)); // Store user info as string
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem("UserInfo");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
