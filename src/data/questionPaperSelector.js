/**
 * Question Paper Selector
 * Returns the ordered standalone case paper for the requested file.
 */

import file01 from "./questionPapers/file01.js";
import file02 from "./questionPapers/file02.js";
import file03 from "./questionPapers/file03.js";
import file04 from "./questionPapers/file04.js";
import file05 from "./questionPapers/file05.js";
import file06 from "./questionPapers/file06.js";
import file07 from "./questionPapers/file07.js";
import file08 from "./questionPapers/file08.js";
import file09 from "./questionPapers/file09.js";
import file10 from "./questionPapers/file10.js";

const QUESTION_PAPERS = [
  file01,
  file02,
  file03,
  file04,
  file05,
  file06,
  file07,
  file08,
  file09,
  file10
];

export const getQuestionPaper = (batch, fileNumber) => {
  const normalizedFileNumber = Number(fileNumber);

  if (normalizedFileNumber >= 1 && normalizedFileNumber <= QUESTION_PAPERS.length) {
    return QUESTION_PAPERS[normalizedFileNumber - 1];
  }

  return null;
};

export const getBatchGroup = () => "COMMON";

