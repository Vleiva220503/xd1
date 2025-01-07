import { useState } from "react";
//import { User } from "../types/user";
import { User } from "../types/user"
const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const hardcodedUser: User = {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    active: true,
  };

  const login = (email: string, password: string) => {
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setUser(hardcodedUser);
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return { user, login, logout, isAuthenticated };
};

export default useAuth;
