const CASE_TEXT = `Company Profile 
 
"Rocky BalBOA Materials" is a small manufacturing company producing specialised refractory material used for coating the inner surfaces of induction furnaces. 
 
The company operates in the steel and allied-products ecosystem and benefits from an established customer base and promoters with considerable industry experience. 
 
The company's business and financial profiles have been improving, supported by stronger profitability and a recent equity infusion. However, its relatively small scale and working-capital-intensive operations continue to constrain its credit profile. 
 
Key Information 
 
- The company has an established customer base in the steel and allied-products industry. 
- Its promoters have considerable experience in the steel industry through their association with another group company. 
- Total manufacturing capacity is approximately 72,000 tonnes per annum. 
- The company remains relatively small in scale despite recent revenue growth. 
 
Operating Performance 
 
- Operating income increased to approximately ₹46 crore in fiscal 2016 from ₹38 crore in fiscal 2015. 
- Operating income in fiscal 2016 was higher than the earlier expectation of approximately ₹44 crore. 
- Operating income is expected to grow by approximately 8% in fiscal 2017. 
- Operating margin improved to 10.4% in fiscal 2016 from 7.9% in fiscal 2015. 
- The fiscal 2016 operating margin was also higher than the earlier expectation of 9.7%. 
- Operating margin is expected to improve further to approximately 11.5% in fiscal 2017. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2015 | FY2016 
Operating Income | 38 | 46 
Profit After Tax | 0.8 | 1.3 
Operating Margin | 7.9% | 10.4% 
Net Worth | — | 9 
Total Outside Liabilities / Tangible Net Worth | — | 2.5x 
 
Equity Infusion & Financial Risk Profile 
 
- The company raised approximately ₹7.5 crore through an initial public offering in April 2016. 
- The proceeds are intended to fund incremental working-capital requirements. 
- Net worth is expected to increase to approximately ₹18 crore by 31 March 2017 from ₹9 crore as of 31 March 2016. 
- Total outside liabilities to tangible net worth is expected to improve substantially to approximately 0.9x by 31 March 2017 from 2.5x a year earlier. 
- The equity infusion is therefore expected to strengthen the company's financial risk profile. 
 
Working Capital 
 
- Operations remain working-capital intensive. 
- Gross current assets ranged between approximately 128 and 192 days during the three years ended 31 March 2016. 
- A significant stretch in the working-capital cycle could weaken the company's liquidity and financial risk profile. 
 
Business Strengths 
 
- Established customer relationships provide stability to the business. 
- Promoters have extensive experience in the steel and allied-products industry. 
- Operating profitability has shown meaningful improvement. 
- Fresh equity infusion is expected to strengthen the capital structure. 
 
Business Risks 
 
- The company's scale of operations remains modest, with operating income of only approximately ₹46 crore in fiscal 2016. 
- Operations require substantial working capital. 
- Lower-than-expected profitability or turnover could weaken cash accruals. 
- A stretch in the working-capital cycle could adversely affect liquidity. 
- Debt-funded capital expenditure could weaken the financial risk profile. 
 
Decision Date: 30 January 2017`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 30 January 2017, what rating would you assign to Rocky BalBOA Materials' long-term bank facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BB+" }, 
    { label: "B", value: "B", text: "BBB-" }, 
    { label: "C", value: "C", text: "BB" }, 
    { label: "D", value: "D", text: "B+" } 
  ], 
  answer: "A" 
}; 
 
const QUESTION_2 = { 
  id: "Q2", 
  prompt: 
    "# QUESTION 2 — CHOOSE YOUR RATIONALE\n\nYou have selected your rating. Which of the following BEST supports your rating decision?\n\nSelect ONE:", 
  options: [ 
    { 
      label: "A", 
      value: "A", 
      text: "The company's improving profitability, experienced promoters and ₹7.5 crore equity infusion have substantially strengthened its financial profile. With leverage expected to decline sharply, these improvements are sufficient to move the company into the investment-grade BBB category." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's established customer base, experienced promoters, improving operating margins and fresh equity infusion support an improving credit profile. However, its modest scale of operations and working-capital-intensive business continue to constrain the rating, supporting a BB+ assessment." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's small scale and working-capital requirements outweigh the improvement in profitability and capital structure. Since gross current assets have remained as high as 192 days, the financial risk profile has not improved sufficiently to justify any rating upgrade." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's operating income remains only ₹46 crore and its business depends heavily on the steel industry. Its modest scale and working-capital intensity create substantial default risk, making a B+ rating the most appropriate despite the recent equity infusion." 
    } 
  ], 
  answer: "B" 
};


export default { id: "CASE_08", caseNumber: 8, caseTitle: "CASE 08", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };
