import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch (error) {
      return null;
    }
  });
  const updateCurrentUser = (data) => {
    setCurrentUser(data);
  };

  // why not use useMemo
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ updateCurrentUser, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

/* the problem is ,say,i need more than one context provider ,
 it will be a mess in the main jsx to warp the root component*/

// i guess that's when i  should choose a state management lib
