import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const InterestsContext = createContext();

export const InterestsContextProvider = ({ children }) => {
  const [interests, setInterests] = useState([]);

  const { isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setInterests(JSON.parse(window.localStorage.getItem(user.email)) || []);
    }
  }, [isLoading, isAuthenticated, user]);

  return (
    <InterestsContext.Provider value={{ interests, setInterests }}>
      {children}
    </InterestsContext.Provider>
  );
};
