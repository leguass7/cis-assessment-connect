import React, { createContext, useContext, useState } from "react";

type ApiResponseContextType = {
  apiResponse: any;
  setApiResponse: React.Dispatch<React.SetStateAction<any>>;
};

type Props = {
  children: React.ReactNode;
};

const ApiResponseContext = createContext<ApiResponseContextType | undefined>(undefined);

export const useApiResponse = () => useContext(ApiResponseContext);

export const ResponseApiProvider: React.FC<Props> = ({ children }) => {
  const [apiResponse, setApiResponse] = useState<any>(null);

  return <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>{children}</ApiResponseContext.Provider>;
};
