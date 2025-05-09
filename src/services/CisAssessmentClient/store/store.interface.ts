import type { Authorization } from '~/services/CisAssessmentClient/cis-assessment-client.dto';

export type TransformAuthorization = (authorization?: Authorization | null) => Authorization;
export type SetStoreParams = Authorization | TransformAuthorization;

export interface StoreInterface {
  set(authorization: SetStoreParams): Promise<void>;
  get(): Promise<Authorization | null>;
  clear(): Promise<void>;
}
