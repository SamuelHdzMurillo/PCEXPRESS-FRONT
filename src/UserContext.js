import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Lógica de autenticación aquí...
    // Puedes establecer el usuario autenticado en el estado `user`
    // y guardar su información en el almacenamiento local (localStorage)
    const authenticatedUser = { username, role: 'admin' };
    setUser(authenticatedUser);
  };

  const logout = () => {
    // Lógica de cierre de sesión aquí...
    // Puedes eliminar el usuario del estado `user`
    // y eliminar su información del almacenamiento local (localStorage)
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
