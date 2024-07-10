export type LangType = 'pt-br' | 'en' | 'es';

export type IResponseSendPassport = {
  success: boolean;
  passportId: number;
  message?: string;
};
