const CASE_TEXT = `Company Profile 
 
"RocketSun Renewables" is a renewable energy company focused on developing and operating wind and solar power projects in India. 
 
The company is a wholly owned subsidiary of a large and established Indian power utility. Its renewable energy portfolio has expanded rapidly through acquisitions and new project development. 
 
The company has a large and well-diversified portfolio of renewable assets, with projects spread across multiple states and counterparties. Long-term power purchase agreements provide strong visibility of future revenue and reduce demand risk. 
 
However, the company remains exposed to receivables risk from financially weaker state distribution companies, variability in renewable power generation and implementation risk associated with new projects. 
 
Key Information 
 
- The company has approximately 2 GW of installed renewable energy capacity. 
- The portfolio consists of approximately 950 MW of wind capacity and around 1 GW of solar capacity. 
- Approximately 326 MW of capacity was under construction. 
- The portfolio is diversified across 10 states and more than 15 counterparties. 
- The wind-to-solar capacity mix is approximately 40:60. 
- Around 40% of the operational portfolio has a track record of more than three years. 
- Approximately 90% of the portfolio has been operational for more than one year. 
- Around 85% of matured projects have actual plant load factors at or above P90 levels. 
 
Revenue Visibility 
 
- Approximately 85% of the operational portfolio has power purchase agreements with 25-year tenures. 
- The remaining PPAs have tenures ranging from 13 to 20 years. 
- Weighted average tariff is above ₹6 per unit. 
- Long-term PPAs provide predictable revenue and low demand risk. 
- Consolidated average DSCR is expected to remain above 1.4x. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2016 | FY2017 
Revenue | 321 | 1,706 
Profit After Tax | 69 | 169 
PAT Margin | 21.50% | 9.90% 
Adjusted Debt / Adjusted Net Worth | 0.52x | 1.70x 
Interest Coverage | 2.67x | 1.75x 
 
Liquidity 
 
- Expected liquidity is approximately six months of debt servicing. 
- Liquidity is maintained through cash and working-capital limits at the group level. 
- The company is expected to generate healthy internal cash flows. 
- Term loans generally have long tenures of approximately 10–15 years. 
- Refinancing is expected for approximately ₹1,000 crore of buyer's credit, ₹1,200 crore of commercial paper and a ₹1,200 crore five-year bond maturing in fiscal 2022. 
 
Parent Support 
 
- The company is wholly owned by a large established power utility. 
- The renewable business is strategically important to the parent. 
- Capital employed in the renewable business represents approximately one-fifth of the parent's overall capital employed. 
- The parent plans for 30–40% of its total generation capacity to come from non-fossil-fuel assets over the following 7–8 years. 
- The parent has provided substantial financial support, including ₹3,895 crore through unsecured perpetual securities to fund the acquisition of approximately 1.1 GW of renewable capacity. 
- The parent has also extended corporate guarantees to refinance high-cost debt. 
- Senior executives of the parent serve on the company's board. 
- The parent is expected to provide need-based financial and managerial support. 
 
Business Risks 
 
- Receivables from financially weaker state distribution companies create payment risk. 
- Receivables from certain counterparties had remained outstanding for more than six months. 
- Wind generation depends on unpredictable wind patterns. 
- Solar generation depends on irradiation levels and panel degradation. 
- Approximately 326 MW of capacity was under construction, creating implementation risk. 
- The company expected to add approximately 300–400 MW annually, requiring continued capital expenditure. 
- Larger-than-expected debt-funded expansion could weaken the financial profile. 
- A significant decline in plant load factor or tariffs could weaken DSCR. 
- Delayed counterparty payments could reduce liquidity. 
 
Positive Factors 
 
- Large and geographically diversified renewable portfolio. 
- Long-term PPAs provide strong revenue visibility. 
- Strong operational track record. 
- Diversified customer base reduces counterparty concentration. 
- Expected DSCR remains above 1.4x. 
- Approximately six months of debt servicing is expected to be maintained as liquidity. 
- Strong strategic importance and financial support from the parent. 
- Calibrated expansion strategy with prudent funding mix. 
 
Decision Date: 6 October 2017`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 6 October 2017, what rating would you assign to RocketSun Renewables' long-term bank facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "AA+" }, 
    { label: "B", value: "B", text: "AA" }, 
    { label: "C", value: "C", text: "AA-" }, 
    { label: "D", value: "D", text: "A+" } 
  ], 
  answer: "C" 
}; 
 
const QUESTION_2 = { 
  id: "Q2", 
  prompt: 
    "# QUESTION 2 — CHOOSE YOUR RATIONALE\n\nYou have selected your rating. Which of the following BEST supports your rating decision?\n\nSelect ONE:", 
  options: [ 
    { 
      label: "A", 
      value: "A", 
      text: "The company's long-term PPAs, diversified portfolio and strong parent support provide very high credit strength. Since revenue visibility is strong and DSCR is expected to remain above 1.4x, the company's exposure to receivables and project execution risks should have little impact on the rating." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's large and diversified renewable portfolio, long-term PPAs, strong revenue visibility, healthy DSCR and strategic importance to a strong parent support a high credit profile. However, receivables risk from weaker distribution companies, renewable generation variability and implementation risk from continued expansion constrain the rating." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's adjusted debt-to-net-worth ratio of 1.70x and declining interest coverage indicate a relatively weak financial profile. Combined with project execution and renewable generation risks, these factors justify an A+ rating despite parent support." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's strong parent, long-term PPAs and diversified portfolio effectively eliminate its major credit risks. The parent guarantee and expected six months of liquidity therefore justify the highest rating category regardless of leverage or project execution." 
    } 
  ], 
  answer: "B" 
};


export default { id: "CASE_10", caseNumber: 10, caseTitle: "CASE 10", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };
