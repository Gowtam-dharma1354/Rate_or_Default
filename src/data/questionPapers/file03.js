const CASE_TEXT = `Company Profile 
 
"Project Zephyr" is a renewable energy solutions company engaged in the manufacturing, installation and servicing of wind turbine generators and related components. 
 
The company has a long operating history in the renewable energy sector and has established a strong position in India's wind turbine market. 
 
The business has two important components: the wind turbine generator (WTG) business, which is exposed to execution and operating leverage risks, and the operations and maintenance (O&M) business, which provides relatively stable and recurring cash flows. 
 
The company's financial profile has improved significantly following equity infusion and debt repayment. However, its operating leverage, large working-capital requirements, competitive industry environment and history of financial stress continue to constrain the credit profile. 
 
Key Information 
 
- The company has a cumulative market share of approximately 32% in the Indian wind turbine segment. 
- The group has installed more than 20 GW of wind energy capacity across 17 countries and six continents. 
- The company has a vertically integrated manufacturing model covering major wind turbine components. 
- The group also provides installation, project execution and O&M services. 
- Approximately 15 GW of installed wind turbine fleet was under the O&M business as of 30 September 2024. 
- The O&M business has demonstrated stable revenue and profitability even during periods of stress. 
 
Operating Performance 
 
- WTG execution volume was approximately 530 MW in H1FY25. 
- WTG EBITDA was approximately ₹237 crore in H1FY25. 
- WTG EBITDA margin improved to 7.8% in H1FY25 from 4.6% in FY2024 and 2.2% in FY2023. 
- The WTG order book increased to approximately 5.1 GW as of 30 September 2024 from 3.8 GW as of 29 May 2024. 
- The order book is expected to be executed through fiscal 2027. 
- O&M EBITDA is expected to remain above ₹700 crore per fiscal. 
- The company has overcome its earlier dependence on customer-backed financing for order execution. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2024 | FY2023 
Revenue | 6,529 | 5,971 
Profit After Tax | 660 | 2,887 
PAT Margin | 10.1% | 48.4% 
Adjusted Debt / Adjusted Net Worth | 0.03x | 1.84x 
Adjusted Interest Coverage | 6.50x | 2.00x 
 
Note: FY2023 PAT included exceptional income of approximately ₹2,721 crore. 
 
Debt & Capital Structure 
 
- The company had term debt of approximately ₹1,773 crore as of 31 March 2023. 
- Scheduled repayments and an equity rights issue helped reduce debt. 
- The company subsequently raised approximately ₹2,000 crore through qualified institutional buyers. 
- The proceeds were used to repay the company's entire debt. 
- The company's adjusted debt-to-net-worth ratio improved substantially to 0.03x in FY2024 from 1.84x in FY2023. 
- Adjusted interest coverage improved to 6.50x from 2.00x. 
- The company does not have any material debt-funded capital expenditure planned over the medium term. 
- The company has also raised ₹2,500 crore of working-capital lines from REC Limited through a Letter of Comfort structure. 
 
Liquidity 
 
- Unencumbered cash reserves stood at approximately ₹683 crore as of 30 September 2024. 
- Cash reserves increased from approximately ₹242 crore as of 31 March 2024. 
- The company has no debt-service obligation because its term debt has been fully repaid. 
- The O&M division is expected to generate EBITDA of more than ₹700 crore annually. 
- The company therefore has a meaningful internal cash-flow cushion to support operations and working-capital requirements. 
 
Business Risks 
 
- The WTG business has high operating leverage because of its substantial fixed-cost base. 
- A slowdown or delay in order execution could result in under-recovery of fixed costs and pressure cash flows. 
- The wind energy industry remains highly competitive, with competition from both domestic and international players. 
- The company's working-capital requirement remains large. 
- The company has a history of financial stress and had defaulted in the past. 
- The company underwent restructuring in June 2020 and refinancing in May 2022. 
- The company had negative net worth due to accumulated losses until fiscal 2022. 
- The historical financial stress continues to affect the company's financial flexibility with certain lenders. 
- Any significant decline in order book or execution volumes could result in operating losses. 
 
Positive Factors 
 
- Strong market position with approximately 32% cumulative market share. 
- Healthy order book of approximately 5.1 GW. 
- Significant improvement in WTG EBITDA margins. 
- Stable and recurring cash flows from the O&M business. 
- O&M EBITDA expected above ₹700 crore annually. 
- Entire term debt has been repaid. 
- Adjusted debt-to-net-worth improved to 0.03x. 
- Adjusted interest coverage improved to 6.50x. 
- Strong liquidity with approximately ₹683 crore of unencumbered cash. 
- Positive outlook supported by the potential for further improvement in WTG profitability and execution volumes. 
 
Rating Considerations 
 
The company's improved profitability, strong order book, debt-free position and stable O&M cash flows represent significant improvements in its credit profile. However, high operating leverage, large working-capital requirements, competitive intensity and its history of financial stress continue to constrain the rating. 
 
Previous rating:- A-
 
Decision Date: 30 December 2024`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 30 December 2024, what rating would you assign to Project Zephyr's long-term bank facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "A" }, 
    { label: "B", value: "B", text: "A-" }, 
    { label: "C", value: "C", text: "BBB+" }, 
    { label: "D", value: "D", text: "A+" } 
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
      text: "The company's strong market position and 5.1 GW order book provide revenue visibility. However, its past default and restructuring indicate that the financial profile remains too weak to support a rating above BBB+." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company has fully repaid its term debt and has ₹683 crore of cash reserves. Since it has no debt-service obligations and O&M EBITDA is expected to exceed ₹700 crore annually, the historical financial stress and operating leverage should no longer influence the rating." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The significant improvement in WTG profitability, healthy 5.1 GW order book, stable O&M cash flows, full repayment of term debt and strong liquidity have materially strengthened the credit profile. However, high operating leverage, large working-capital requirements, competitive intensity and the company's history of financial stress continue to constrain the rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's 32% market share, strong order book and improved EBITDA margin demonstrate a dominant and highly stable business profile. The absence of material debt-funded capex means the company faces very limited financial risk, justifying an A+ rating." 
    } 
  ], 
  answer: "C" 
};



export default { id: "CASE_03", caseNumber: 3, caseTitle: "CASE 03", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

