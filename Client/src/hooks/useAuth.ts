import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
    // const encodedToken = btoa(token);
    // localStorage.setItem("token", encodedToken);
  };
  const getToken = () => {
    return localStorage.getItem("token");
    // return encodedToken ? atob(encodedToken) : null;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, logout, saveToken, getToken };
};
