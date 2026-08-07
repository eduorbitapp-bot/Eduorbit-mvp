import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("eduorbit-user");

    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  function login(email, password) {
    if (
      email === "admin@eduorbit.com" &&
      password === "admin123"
    ) {
      const admin = {
        name: "Admin",
        email,
        role: "admin",
      };

      localStorage.setItem(
        "eduorbit-user",
        JSON.stringify(admin)
      );

      setUser(admin);

      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("eduorbit-user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
