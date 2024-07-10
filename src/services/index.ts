import { CisAssessmentClient } from './CisAssessmentClient';

const isDevelopment = process.env.NEXT_PUBLIC_STAGING == '1' ? true : false;

export const client = new CisAssessmentClient({ development: isDevelopment });
