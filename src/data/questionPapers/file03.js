const CASE_TEXT = `Company Profile 
 
Project Zephyr is a leading renewable energy solutions provider with a strong presence in the wind turbine generator (WTG) segment in India. 
 
The company has an established track record in wind energy, with approximately 14.5 GW of installed capacity under its operations and maintenance (O&M) business. 
 
The company has historically faced financial stress, including defaults and restructuring. However, its financial position has improved significantly following debt repayment, equity infusions and refinancing. 
 
As of the decision date, the company has a strong order book, improving operating margins and stable cash flows from its O&M services business. 
 
Key Information 
 
- The company has a cumulative market share of approximately 32% in India's wind energy market. 
- Approximately 14.5 GW of installed wind capacity is under its O&M business. 
- The O&M business generates stable and recurring cash flows because revenues are supported by contractual arrangements at contracted prices. 
- EBITDA from the O&M services business is expected to remain above ₹700 crore per fiscal. 
- The WTG business achieved EBITDA of ₹105 crore and an EBITDA margin of 4.3% during 9M FY2024. 
- WTG EBITDA margins were 1.4% in FY2023 and 2.2% in FY2022. 
- The WTG order book increased sharply to approximately 3.16 GW as of 31 January 2024, compared with 652 MW as of 31 March 2023. 
- The company has undertaken cost optimisation and rationalisation measures, including focusing on better-margin orders and passing through material cost escalation. 
- The company continues to face high operating leverage and working-capital-intensive operations. 
- The wind energy industry remains competitive and cyclical. 
 
Financial Risk Profile 
 
- Term debt stood at approximately ₹1,773 crore as of 31 March 2023. 
- Scheduled repayments and a rights issue resulted in a significant reduction in debt. 
- Net worth turned positive as of 31 March 2023 following refinancing and a ₹1,200 crore rights issue. 
- In August 2023, the company allotted equity shares to qualified institutional buyers amounting to approximately ₹2,000 crore. 
- The proceeds were subsequently used to repay the company's entire debt. 
- The company does not have material debt-funded capex plans over the medium term. 
 
Liquidity 
 
- Unencumbered cash reserves stood at approximately ₹278 crore as of 31 December 2023. 
- The company has no debt-service obligations because its term debt has been fully repaid. 
- The O&M division is expected to generate approximately ₹700 crore of EBITDA annually. 
- Planned capex of approximately ₹400–500 crore during fiscal 2025 is expected to be funded through internal accruals. 
 
Financial History 
 
- The company has defaulted in the past and has undergone restructuring. 
- The last restructuring took place in June 2020. 
- The company underwent refinancing in May 2022. 
- Unsustainable debt was extinguished through conversion to equity. 
- The company had negative net worth due to past losses until fiscal 2022. 
- The company's past financial history has affected its financial flexibility with certain lenders. 
- Following the repayment of its entire debt, lenders have shown renewed willingness to fund its working-capital requirements. 
 
Industry & Business Risks 
 
- The WTG business has high operating leverage because of substantial fixed costs. 
- A slowdown or delay in order execution could result in under-recovery of fixed costs and adversely affect cash flows. 
- The company faces intense competition from other domestic and international wind turbine manufacturers. 
- The wind energy sector is sensitive to changes in industry demand and execution volumes. 
 
Decision Date: 26 March 2024`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 26 March 2024, what rating would you assign to Project Zephyr's long-term debt facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "A+" }, 
    { label: "B", value: "B", text: "A-" }, 
    { label: "C", value: "C", text: "BBB+" }, 
    { label: "D", value: "D", text: "BBB-" } 
  ], 
  answer: "B" 
}; 
 
const QUESTION_2 = { 
  id: "Q2", 
  prompt: 
    "# QUESTION 2 — CHOOSE YOUR RATIONALE\n\nYou have selected your rating. Which of the following BEST supports your rating decision?\n\nSelect ONE:", 
  options: [ 
    { 
      label: "A", 
      value: "A", 
      text: "The company's historical defaults and restructuring indicate that its financial profile remains weak. Despite debt repayment and improving margins, its past financial difficulties and the cyclical nature of the wind industry justify retaining a rating in the BBB category." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's leading market position and large order book eliminate the major risks associated with the business. Since the company has repaid its entire debt, its historical defaults and high operating leverage should no longer have a meaningful impact on the rating." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's improved WTG margins, sharply higher order book, stable O&M cash flows, debt-free position and adequate liquidity materially strengthen its financial risk profile. However, high operating leverage, competitive intensity and its weak financial history continue to constrain the rating, supporting a strong but not top-tier rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's entire debt has been repaid and it has ₹278 crore of cash reserves, so the company faces virtually no credit risk. The strong market position and order book therefore justify the highest rating category." 
    } 
  ], 
  answer: "C" 
};


export default { id: "CASE_03", caseNumber: 3, caseTitle: "CASE 03", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

