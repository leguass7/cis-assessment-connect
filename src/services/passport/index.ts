import { client } from '..';

export async function createPassport(name: string, reportTypeId: number, occupationAreaId: number) {
  const payload = { name, occupationAreaId, reportTypeId };
  return await client.createPassport(payload);
}

export async function getPassport(passportId: number) {
  return await client.requestPassport(passportId);
}

export async function getPaginatePassport() {
  return await client.paginatePassport();
}
