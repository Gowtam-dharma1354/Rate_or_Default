const CASE_TEXT = `Company Profile 
 
Project Orion is a newly incorporated company created to house the commercial vehicles business of a large Indian automotive group following the planned demerger of its passenger vehicles and commercial vehicles businesses. 
 
The demerger has received regulatory approvals and is expected to become effective from 1 October 2025. The company is expected to eventually be listed, with shareholding aligned with the existing parent company. 
 
The commercial vehicles business has a dominant position in the domestic market, with a market share of around 37.1% in fiscal 2025. However, the business operates in a cyclical industry and faces sensitivity to economic activity. 
 
The business has also announced a major acquisition of an international commercial vehicle manufacturer. The acquisition is expected to be completed by April 2026 through an all-cash voluntary tender offer. 
 
Key Information 
 
- Domestic commercial vehicle market share was approximately 37.1% in fiscal 2025, compared with 39.2% in fiscal 2024. 
- Commercial vehicle wholesale volume declined by 5.1% in fiscal 2025 compared with the previous year. 
- Operating profitability increased by 100 basis points to 11.8% in fiscal 2025. 
- Operating margin was over 10% in fiscal 2024 and 2025 and reached 12.2% in the first quarter of fiscal 2026. 
- The domestic business achieved significant deleveraging over the past two fiscals. 
- The commercial vehicles business was net debt free at the end of fiscal 2025. 
- The business has strong distribution presence and service touchpoints. 
- The company is looking to reduce cyclicality by increasing exports, expanding its used vehicle business and increasing spare and service penetration. 
 
Acquisition & Debt 
 
- The company plans to acquire a major international commercial vehicle manufacturer by April 2026. 
- The acquisition will initially be funded through bridge debt of approximately Euro 3.8 billion. 
- The bridge debt is expected to be refinanced within 12 months. 
- The refinancing is expected to consist of approximately 70% long-term debt and 30% equity. 
- Net leverage is expected to weaken from the current net debt-free position because of the acquisition debt. 
- Despite the increase in leverage, net leverage is expected to remain below 1.0x. 
 
Liquidity & Financial Support 
 
- Expected annual cash accrual is approximately ₹7,500–8,000 crore. 
- Scheduled long-term debt repayment is approximately ₹1,500 crore up to December 2026. 
- As of June 2025, cash, equivalents, bank balances, investments and other liquidity stood at approximately ₹4,400 crore. 
- Additional fund-based bank limits of approximately ₹4,000 crore are available, with moderate utilisation. 
- Annual capex, including R&D expenses, is expected to be approximately ₹2,500–3,500 crore in fiscals 2026 and 2027. 
- Capex is expected to be funded through internal accruals and cash balances. 
- The company is expected to benefit from strong financial flexibility and access to relatively low-cost funding because of its association with the larger group. 
 
Parent Group Support 
 
- The commercial vehicles business is considered a flagship business of the larger group. 
- The parent group has previously provided significant financial support, including an infusion of approximately ₹6,500 crore in fiscals 2019 and 2020. 
- The promoter stake subsequently increased to 45.82% in January 2021 from 38.37% in March 2019. 
- The commercial vehicles business is expected to receive similar support following the demerger. 
- The company's strategic importance to the group is expected to provide significant financial flexibility and access to banks and capital markets. 
 
Industry Risk 
 
- The domestic commercial vehicle business is inherently cyclical and strongly linked to economic activity. 
- Industry volumes were affected by events including increased axle-load norms, the pandemic and the transition to BS-VI emission standards. 
- These factors resulted in industry volumes reaching a decadal low during fiscals 2020 and 2021. 
- Increased infrastructure spending could support demand for medium and heavy commercial vehicles. 
- Growth in e-commerce could support demand for light commercial vehicles. 
 
Decision Date: 25 September 2025`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 25 September 2025, what rating would you assign to Project Orion's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "A+" }, 
    { label: "B", value: "B", text: "AA+" }, 
    { label: "C", value: "C", text: "AA" }, 
    { label: "D", value: "D", text: "AA-" } 
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
      text: "The company's dominant market position and improving operating margins are sufficient to justify a high rating, while the planned acquisition should not materially affect its credit profile because the business is currently net debt free." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The planned acquisition creates significant financial risk because it will initially be funded entirely through bridge debt. The expected increase in leverage and the cyclical nature of the commercial vehicle industry therefore warrant a rating in the lower investment-grade category." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's association with a large business group eliminates most of the financial risks from the acquisition. Strong parent support means that the company's own operating performance, liquidity and leverage should have limited importance in determining its rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The strong business profile, dominant market position, improved operating efficiency, current net debt-free position and strong liquidity are balanced against the sizeable acquisition debt. However, expected net leverage remaining below 1.0x, strong cash accruals and significant financial flexibility from the parent group support a strong rating." 
    } 
  ], 
  answer: "D" 
};


export default { id: "CASE_02", caseNumber: 2, caseTitle: "CASE 02", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

