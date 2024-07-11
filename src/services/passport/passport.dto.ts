import type { IResponseApi } from '..';

import type { IInventory } from '../inventory/inventory.dto';

export type IPassport = {
  id: number;
  parentId: number;
  reportTypeId: number;
  occupationAreaId?: number;
  name: string;
  canDownloadReport: boolean;
  isTasting: boolean;
  showTastingLinkToGuests: boolean;
  createdAt: Date;
  updatedAt: Date;
  answered?: number;
  pending?: number;
  inventories?: IInventory[];
  isPrivate?: boolean;
};

export type ICreatePassport = {
  name: string;
  reportTypeId: number;
  occupationAreaId: number;
  canDownloadReport?: boolean;
  isTasting?: boolean;
  isPrivate?: boolean;
};

export type IResponseCreatePassport = IResponseApi & {
  passport: ICreatePassport;
};

export type IResponsePassport = IResponseApi & {
  passport: IPassport;
};
