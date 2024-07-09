import type { Authorization } from '~/services/CisAssessmentClient/cis-assessment-client.dto';
import type { SetStoreParams, StoreInterface } from '~/services/CisAssessmentClient/store/store.interface';

export class MemoryStore implements StoreInterface {
  private authorization?: Authorization | null = null;

  private assign(authorization?: Authorization | null): Authorization | null {
    return Object.assign({}, this?.authorization || {}, authorization || {}) as Authorization;
  }

  async set(auth: SetStoreParams): Promise<void> {
    const newAuthorization = typeof auth === 'function' ? auth(this.assign()) : this.assign(auth);
    this.authorization = newAuthorization as Authorization;
  }

  async get(): Promise<Authorization | null> {
    return null;
  }

  async clear(): Promise<void> {
    this.authorization = null;
  }
}
