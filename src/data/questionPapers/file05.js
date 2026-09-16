const CASE_TEXT = `Company Profile 
 
"MetalMosaic" is a large diversified natural resources group with operations spanning zinc, lead, silver, aluminium, oil and gas, iron ore, power and steel. 
 
The group is among the larger producers across several of these commodities and has a strong market position in India. Its diversified portfolio provides some protection against weakness in any single commodity. 
 
However, the group is operating with relatively high leverage and has significant financial obligations. A key concern is the financial position of its parent company, which may require continued financial support from the group. 
 
At the same time, improving production volumes, cost efficiencies and stronger commodity prices are expected to support profitability. 
 
Key Information 
 
- The group has a diversified presence across zinc, lead, silver, aluminium, oil and gas, iron ore, power and steel. 
- It has strong market positions across several of its businesses. 
- Domestic zinc, lead and silver operations benefit from low production costs and large reserves. 
- Aluminium profitability has improved because of better coal sourcing, lower coal prices and lower imported alumina costs. 
- Production volumes in zinc and oil and gas are expected to improve over the medium term. 
- Commodity prices remain an important source of earnings volatility. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2019 | FY2020 
Operating Income | 93,660 | 86,380 
PAT | 9,698 | Negative* 
PAT Margin | 10.4% | Negative 
Adjusted Debt / Adjusted Net Worth | 1.55x | 1.67x 
Interest Coverage | 5.48x | 4.53x 
 
*FY2020 PAT was negative due in part to a non-cash exceptional expense arising from impairment of assets. 
 
Leverage & Cash Flow 
 
- Net leverage was approximately 3.8x as of 31 March 2020. 
- Net leverage was expected to remain above 3.2x in FY2021. 
- Net leverage was expected to gradually improve to around 2.8x in the following fiscal year. 
- Annual capex was expected to be approximately ₹6,000–7,000 crore in FY2021. 
- Higher dividends to the parent could result in additional cash outflow. 
- Profitability remains exposed to fluctuations in metal and oil prices. 
 
Parent Company Risk 
 
- The group is held 50.1% by its parent company, "NorthStar Holdings". 
- The parent company had approximately US$7.3 billion of debt as of 30 June 2020. 
- The parent had debt maturities of approximately US$1 billion in FY2021. 
- The group had already extended approximately US$300 million of inter-corporate loans to the parent as of 30 June 2020. 
- Dividends from the group are an important source of funds for servicing the parent's interest obligations. 
- Continued refinancing difficulties at the parent could result in higher dividends or additional loans from the group, weakening the group's financial risk profile. 
 
Liquidity 
 
- Cash balance was approximately ₹31,470 crore as of 30 June 2020, net of the inter-corporate loan to the parent. 
- Unutilised bank limits stood at approximately ₹9,469 crore. 
- Term debt obligations were expected at approximately ₹3,000 crore in the second half of FY2021 and ₹12,854 crore during FY2022. 
- Cash accrual before dividends was expected at approximately ₹18,000 crore in FY2021 and more than ₹20,000 crore in FY2022. 
- The group has a strong track record of refinancing its debt. 
- Flexibility in capex provides additional support to liquidity. 
 
Operating Outlook 
 
- EBITDA for FY2021 was expected to improve to above ₹24,000 crore. 
- EBITDA was expected to increase to approximately ₹30,000 crore in the following fiscal year. 
- Higher production in zinc and oil & gas, sustained aluminium cost efficiencies and improved commodity prices were expected to support profitability. 
- Stronger profitability could improve the parent's ability to refinance its debt. 
 
Industry & Regulatory Risks 
 
- The group's businesses are exposed to volatility in commodity prices. 
- Mining and natural-resource businesses are exposed to regulatory risks. 
- A major copper smelting facility had remained closed following regulatory action. 
- Suspension of iron ore mining operations in certain regions had previously affected the group's performance. 
- Any adverse regulatory outcome affecting the oil and gas business could reduce profitability. 
 
Decision Date: 28 October 2020`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 28 October 2020, what rating would you assign to MetalMosaic's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "AA-" }, 
    { label: "B", value: "B", text: "AA" }, 
    { label: "C", value: "C", text: "AA+" }, 
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
      text: "The group's diversified operations, strong market positions, large liquidity surplus and expected improvement in EBITDA provide enough financial strength to justify an AA+ rating, despite the parent's debt obligations." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The group's high leverage, substantial capex requirements and exposure to commodity-price volatility indicate that its credit profile is weak. The parent company's debt obligations further increase the risk, making an investment-grade rating inappropriate." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The group's diversified businesses, low-cost operations, strong market positions, improving profitability and strong liquidity support a high credit profile. However, elevated leverage, significant capex and dividend or inter-corporate loan support to the highly leveraged parent constrain the rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The group's ₹31,470 crore cash balance and ₹9,469 crore of unutilised bank limits provide more than enough liquidity to cover all foreseeable obligations. Therefore, leverage, commodity-price volatility and the parent's refinancing requirements should have little impact on the rating." 
    } 
  ], 
  answer: "C" 
};


export default { id: "CASE_05", caseNumber: 5, caseTitle: "CASE 05", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

