import type { LangType } from '..';

import { client } from '..';

import type { ICreateInventory } from './inventory.dto';

export async function sendInventoryPassport(passportId: number, payload: ICreateInventory) {
  const currentPayload = { ...payload, language: payload.language as LangType };
  return await client.sendInventoryPassport(passportId, currentPayload);
}
