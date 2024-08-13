import type { IResponseApi, LangType } from '..';

export type IResponseSendPassport = IResponseApi & {
  passportId: number;
};

export type IPaginateParams = {
  page?: number;
  size?: number;
};

export type IInventory = {
  passportId: number;
  id: number;
  name: string;
  email: string;
  answered: boolean;
  pending: boolean;
};

export type ICreateInventory = {
  name: string;
  email: string;
  language: LangType | string;
};
