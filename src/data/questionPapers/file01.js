const CASE_TEXT = `Company Profile

Falcon Electronics Ltd. manufactures consumer electronics and home appliances in India.

The company has grown rapidly over the last three years, mainly because of strong demand for its premium products.

However, the company recently invested heavily in a new manufacturing facility and has taken additional debt to fund the expansion.

Key information

- Revenue has grown consistently for 3 years.
- The company has a strong position in the premium segment.
- Competition is increasing from larger players.
- The new manufacturing facility is expected to become operational next year.
- Management expects revenue growth of 15–20% over the next two years.
- The company has no history of default.

Financial Information (₹ Crore)

Particulars | FY23 | FY24 | FY25
Revenue | 1,000 | 1,180 | 1,350
EBITDA | 150 | 165 | 175
PAT | 72 | 78 | 80
Cash Flow from Operations | 120 | 105 | 85
Total Debt | 400 | 520 | 680
Cash & Bank Balance | 100 | 90 | 75
Interest Expense | 35 | 45 | 62

Debt Maturity

- FY26: ₹100 Cr
- FY27: ₹250 Cr
- FY28: ₹180 Cr
- After FY28: ₹150 Cr

Peer Comparison

Metric | Falcon | Peer Average
Revenue Growth | 14% | 10%
EBITDA Margin | 13.0% | 14.5%
Debt / EBITDA | 3.9x | 2.5x
Interest Coverage | 2.8x | 4.0x
CFO / Debt | 12.5% | 20%`;

const QUESTION_1 = {
  id: "Q1",
  prompt:
    "# QUESTION 1 — RATE THE COMPANY\n\nBased on the information available as of 31 March 2025, what credit rating would you assign to Falcon Electronics Ltd.?\n\nSelect ONE:",
  options: [
    { label: "A", value: "A", text: "A+" },
    { label: "B", value: "B", text: "A" },
    { label: "C", value: "C", text: "BBB" },
    { label: "D", value: "D", text: "BB" }
  ],
  answer: "C"
};

const QUESTION_2 = {
  id: "Q2",
  prompt:
    "# QUESTION 2 — RATIONALE FOR YOUR RATING\n\nYou have assigned Falcon Electronics Ltd. a credit rating based on the information available as of 31 March 2025. Which of the following is the best rationale for that rating?\n\nSelect ONE:",
  options: [
    {
      label: "A",
      value: "A",
      text: "Strong revenue growth and a premium market position support the rating, but rising leverage and weaker cash generation prevent a stronger rating."
    },
    {
      label: "B",
      value: "B",
      text: "The company has no history of default, so its rating should be A regardless of leverage and cash flow trends."
    },
    {
      label: "C",
      value: "C",
      text: "The company is a large player with very strong cash generation, so the rating should be A+."
    },
    {
      label: "D",
      value: "D",
      text: "The company’s debt is low and interest coverage is high, so the rating should be BBB."
    }
  ],
  answer: "A"
};

export default { id: "CASE_01", caseNumber: 1, caseTitle: "CASE 01", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

