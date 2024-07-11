import { CisAssessmentClient } from './CisAssessmentClient';

export type IResponseApi = {
  success?: boolean;
  message?: string;
};

export type LangType = 'pt-br' | 'en' | 'es';

const isDevelopment = process.env.NEXT_PUBLIC_STAGING == '1' ? true : false;

export const client = new CisAssessmentClient({ development: isDevelopment });
