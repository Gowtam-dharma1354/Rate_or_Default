/**
 * Question Paper Selector
 * Returns the ordered standalone case paper for the requested file.
 */

import file01 from "./questionPapers/file01.js";
import file02 from "./questionPapers/file02.js";
import file03 from "./questionPapers/file03.js";
import file04 from "./questionPapers/file04.js";
import file05 from "./questionPapers/file05.js";

const QUESTION_PAPERS = [
  file01,
  file02,
  file03,
  file04,
  file05
];

export const getQuestionPaper = (batch, fileNumber) => {
  const normalizedFileNumber = Number(fileNumber);

  if (normalizedFileNumber >= 1 && normalizedFileNumber <= QUESTION_PAPERS.length) {
    return QUESTION_PAPERS[normalizedFileNumber - 1];
  }

  return null;
};

export const getBatchGroup = () => "COMMON";

