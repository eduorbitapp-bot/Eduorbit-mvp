import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("eduorbit-user");

      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch {
      localStorage.removeItem("eduorbit-user");
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  function login(email, password) {
    if (
      email === "master@eduorbit.com" &&
      password === "master123"
    ) {
      const master = {
        name: "EduOrbit Master Admin",
        email,
        role: "master_admin",
      };

      localStorage.setItem(
        "eduorbit-user",
        JSON.stringify(master)
      );

      setUser(master);
      return true;
    }

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
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
