const CASE_TEXT = `Company Profile 
 
"ThorRoll Industries" is a manufacturing company producing cast iron, steel and alloy rolls that are tailor-made to the specific requirements of its customers. 
 
The company operates in the steel and allied-products industry and has three manufacturing facilities, two in Gujarat and one in West Bengal. 
 
The company benefits from an experienced promoter and a well-established customer base. However, its operations remain relatively modest in scale and highly working-capital intensive. 
 
Key Information 
 
- The promoter has more than 30 years of experience in the steel rolls business. 
- The company has longstanding relationships with customers and suppliers. 
- Customers include leading steel industry players such as Steel Authority of India, Rashtriya Ispat Nigam Ltd and Durgapur Steel Plant. 
- The company has total manufacturing capacity of approximately 72,000 tonnes per annum. 
- Operating scale has remained in the range of approximately ₹64–76 crore over the past three fiscals. 
 
Operating Performance 
 
- Operating income was ₹76.34 crore in fiscal 2020 and ₹64.24 crore in fiscal 2021. 
- Profit after tax increased from ₹2.99 crore in fiscal 2020 to ₹7.69 crore in fiscal 2021. 
- PAT margin improved from 3.92% in fiscal 2020 to 11.96% in fiscal 2021. 
- Operating profitability has improved significantly compared with earlier years. 
- The company is expected to benefit from its established customer relationships and promoter experience over the medium term. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2020 | FY2021 
Operating Income | 76.34 | 64.24 
Profit After Tax | 2.99 | 7.69 
PAT Margin | 3.92% | 11.96% 
Adjusted Debt / Adjusted Net Worth | 0.88x | 0.62x 
Interest Coverage | 2.52x | 5.20x 
 
Financial Risk Profile 
 
- Gearing improved to 0.62x as of 31 March 2021 from 0.88x a year earlier. 
- Total outside liabilities to tangible net worth stood at 1.54x as of 31 March 2021. 
- Interest coverage improved significantly to 5.20x in fiscal 2021 from 2.52x in fiscal 2020. 
- Net cash accrual to total debt was approximately 0.54x in fiscal 2021. 
- Debt protection measures are expected to remain broadly at similar levels over the medium term. 
 
Working Capital 
 
- The business is highly working-capital intensive. 
- Gross current assets ranged between 158 and 250 days during the three fiscals ended 31 March 2021. 
- Gross current assets stood at approximately 250 days as of 31 March 2021. 
- High debtor and inventory levels contribute to the working-capital requirement. 
- The company is required to extend long credit periods to customers. 
- Debtors outstanding for more than six months have been increasing. 
- Approximately 30–40% of customers are government entities where payments can be stretched. 
- The company also maintains significant work-in-process and inventory due to business requirements. 
 
Liquidity 
 
- Bank limit utilisation was moderate at approximately 67% during the 12 months through March 2021. 
- Expected annual cash accrual is approximately ₹6–8 crore. 
- Term debt obligations are approximately ₹3.3 crore over the medium term. 
- Cash accrual is therefore expected to be sufficient to meet scheduled term debt obligations. 
- Current ratio was approximately 1.33x as of 31 March 2021. 
- Overall liquidity is considered adequate. 
 
Industry & Business Risks 
 
- The company's performance is closely linked to the steel industry, which is cyclical. 
- A slowdown in investment activity in the steel industry could affect demand for the company's products. 
- The company's relatively modest operating scale limits its ability to absorb a significant downturn. 
- A further stretch in the working-capital cycle could put pressure on liquidity. 
- Large debt-funded capital expenditure could weaken the financial risk profile. 
 
Positive Factors 
 
- More than 30 years of promoter experience. 
- Established relationships with customers and suppliers. 
- Customers include leading steel industry companies. 
- Significant improvement in profitability. 
- Stronger interest coverage. 
- Lower gearing. 
- Adequate liquidity. 
- Expected cash accrual is sufficient to meet scheduled debt obligations. 
 
Decision Date: 30 April 2021`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 30 April 2021, what rating would you assign to ThorRoll Industries' long-term bank facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BBB-" }, 
    { label: "B", value: "B", text: "B+" }, 
    { label: "C", value: "C", text: "BB" }, 
    { label: "D", value: "D", text: "BB+" } 
  ], 
  answer: "D" 
}; 
 
const QUESTION_2 = { 
  id: "Q2", 
  prompt: 
    "# QUESTION 2 — CHOOSE YOUR RATIONALE\n\nYou have selected your rating. Which of the following BEST supports your rating decision?\n\nSelect ONE:", 
  options: [ 
    { 
      label: "A", 
      value: "A", 
      text: "The company's strong profitability improvement, experienced promoter and relationships with leading steel companies provide sufficient comfort to justify an investment-grade rating, despite its modest scale and working-capital requirements." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's modest scale and exposure to the cyclical steel industry create significant business risk. The high working-capital requirement also weakens liquidity, making the company's overall financial profile too weak to justify a rating above BB." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's interest coverage of 5.20x and gearing of 0.62x demonstrate a very strong financial profile. Since cash accrual of ₹6–8 crore is sufficient to cover the ₹3.3 crore term debt obligation, the company's working-capital cycle and industry cyclicality should have minimal impact on the rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's experienced promoter, established customer base, improved profitability, lower gearing and strong interest coverage support the credit profile. However, its average scale of operations, exposure to the cyclical steel industry and high working-capital intensity constrain the rating, while adequate liquidity provides additional support." 
    } 
  ], 
  answer: "D" 
};

export default { id: "CASE_09", caseNumber: 9, caseTitle: "CASE 09", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

