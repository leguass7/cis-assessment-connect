import type { IResponseApi } from '..';

export type ICreditSummary = {
  loading: boolean;
  credits: number;
  totalCredits: number;
  usedCredits: number;
  pendingCredits: number | null;
  lastModified: Date | string | null;
};

export type IResponseCreditSummary = IResponseApi & {
  summary: ICreditSummary;
};
