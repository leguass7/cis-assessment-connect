import React, { createContext, useContext, useState } from 'react';

type ApiResponseContextType = {
  authPassword: boolean;
  setAuthPassword: React.Dispatch<React.SetStateAction<boolean>>;
  authRefreshToken: boolean;
  setAuthRefreshToken: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

const AppContext = createContext<ApiResponseContextType | undefined>(undefined);

export const useApiResponse = () => useContext(AppContext);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [authPassword, setAuthPassword] = useState<boolean>(false);
  const [authRefreshToken, setAuthRefreshToken] = useState<boolean>(false);

  return <AppContext.Provider value={{ authPassword, authRefreshToken, setAuthPassword, setAuthRefreshToken }}>{children}</AppContext.Provider>;
};
