import type { LangType } from '..';

import { client } from '..';

export async function sendInventoryPassport(passportId: number, email: string, name: string, language: LangType) {
  const payload = { email, language, name };
  return await client.sendInventoryPassport(passportId, payload);
}
