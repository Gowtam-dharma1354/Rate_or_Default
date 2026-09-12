/**
 * Question Paper Selector
 * This competition now uses one shared 10-case paper for all batches.
 */

import { COMMON_FALCON_CASES } from "./questionPapers/common/falconCases";

export const getQuestionPaper = (batch, fileNumber) => {
  const normalizedFileNumber = Number(fileNumber);

  if (normalizedFileNumber >= 1 && normalizedFileNumber <= COMMON_FALCON_CASES.length) {
    return COMMON_FALCON_CASES[normalizedFileNumber - 1];
  }

  return null;
};

export const getBatchGroup = () => "COMMON";

