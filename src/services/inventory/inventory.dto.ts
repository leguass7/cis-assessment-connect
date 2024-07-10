import type { IResponseApi } from '..';

export type IResponseSendPassport = IResponseApi & {
  passportId: number;
};

export type IInventory = {
  passportId: number;
  id: number;
  name: string;
  email: string;
  answered: boolean;
  pending: boolean;
};
