import React, { createContext, useContext, useState } from 'react';

import type { IPassport } from '~/services/passport/passport.dto';

type ApiResponseContextType = {
  authPassword: boolean;
  setAuthPassword: React.Dispatch<React.SetStateAction<boolean>>;
  authRefreshToken: boolean;
  setAuthRefreshToken: React.Dispatch<React.SetStateAction<boolean>>;
  passport: Partial<IPassport>;
  setPassport: React.Dispatch<React.SetStateAction<IPassport>>;
};

type Props = {
  children: React.ReactNode;
};

const AppContext = createContext<ApiResponseContextType | undefined>(undefined);

export const useApiResponse = () => useContext(AppContext);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [authPassword, setAuthPassword] = useState<boolean>(false);
  const [authRefreshToken, setAuthRefreshToken] = useState<boolean>(false);
  const [passport, setPassport] = useState<IPassport>(null);

  return (
    <AppContext.Provider value={{ authPassword, authRefreshToken, passport, setAuthPassword, setAuthRefreshToken, setPassport }}>
      {children}
    </AppContext.Provider>
  );
};
