import { client } from '..';

export async function getCredits() {
  return await client.requestCredits();
}
