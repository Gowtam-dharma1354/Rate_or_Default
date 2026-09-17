const CASE_TEXT = `Company Profile 
 
"Project Orion" is a newly incorporated company created to house the commercial vehicles business of a large and established Indian automotive group following the demerger of its passenger vehicles and commercial vehicles businesses. 
 
The commercial vehicles business has a dominant position in the domestic market and benefits from strong distribution, an established customer base and the financial flexibility of its parent group. 
 
The business has continued to demonstrate healthy operating performance. However, it is exposed to the inherent cyclicality of the commercial vehicle industry and is preparing to undertake a large international acquisition that will temporarily increase its debt. 
 
Key Information 
 
- The company reported a domestic commercial vehicle market share of approximately 35.3% in the first half of fiscal 2026. 
- Market share was 38.1% in the corresponding period of the previous fiscal. 
- Wholesale volume increased by approximately 2.8% year-on-year to around 184,800 vehicles in the first half of fiscal 2026. 
- Operating margin expanded by 100 basis points to 12.2% during the first half of fiscal 2026. 
- Higher volumes, favourable realisation, cost savings and Production-Linked Incentive benefits supported profitability. 
- The company has a strong distribution network and service touchpoints, providing a competitive advantage. 
 
Acquisition & Debt 
 
- The company has announced the acquisition of an international commercial vehicle manufacturer. 
- The acquisition is expected to be completed by April 2026 through an all-cash voluntary tender offer. 
- The acquisition will initially be funded through bridge debt of approximately €3.8 billion. 
- The bridge debt is expected to be refinanced within 12 months. 
- The refinancing is expected to comprise approximately 70% long-term debt and 30% equity. 
- The acquisition will weaken consolidated financial metrics compared with the company's current position. 
- Net leverage is expected to remain below 1.0x after refinancing. 
- Reduction of debt through equity infusion by the end of fiscal 2027 will be important for maintaining the financial profile. 
 
Liquidity 
 
- Annual cash accrual is estimated at approximately ₹7,500–8,000 crore. 
- Scheduled long-term debt repayment is approximately ₹283 crore in fiscal 2026. 
- As of September 2025, cash, equivalents, bank balances and investments for the commercial vehicles business stood at approximately ₹5,397 crore. 
- Additional fund-based bank limits of approximately ₹4,000 crore are available, with moderate utilisation. 
- Annual capital expenditure, including R&D expenses, is expected to be approximately ₹2,500–3,500 crore during fiscals 2026 and 2027. 
- Capex is expected to be funded through internal accruals and cash balances. 
- The company has strong financial flexibility and access to relatively low-cost funding as part of the larger group. 
 
Parent Group Support 
 
- The company is one of the flagship businesses of the parent group. 
- The parent group has previously provided significant financial support, including approximately ₹6,500 crore during fiscals 2019 and 2020. 
- The company is expected to receive similar support when required. 
- Its strategic importance to the group provides significant financial flexibility. 
- The company is expected to retain access to banks and capital markets at relatively favourable funding costs. 
 
Business Risks 
 
- The domestic commercial vehicle business is inherently cyclical and strongly linked to economic activity. 
- Industry volumes have historically been affected by events such as increased axle-load norms, the pandemic and the transition to BS-VI emission standards. 
- These factors previously caused industry volumes to fall to a decadal low during fiscals 2020 and 2021. 
- The company's market share has declined from earlier levels, particularly in light commercial vehicles. 
- A decline in volumes could put pressure on operating margins and cash generation. 
- The planned acquisition will result in a significant increase in debt before refinancing. 
- Higher-than-expected debt-funded capex or acquisition expenditure could weaken the financial risk profile. 
 
Positive Factors 
 
- Dominant position in the domestic commercial vehicle market. 
- Approximately 35.3% market share in the first half of fiscal 2026. 
- Healthy volume growth and operating margin of 12.2%. 
- Strong distribution and service network. 
- Strong liquidity with ₹5,397 crore of cash and investments. 
- Annual cash accrual of ₹7,500–8,000 crore. 
- Net leverage expected to remain below 1.0x after refinancing. 
- Strong financial flexibility and support from the parent group. 
- Access to banks and capital markets at relatively low cost. 
 
Previous rating:- AA+
 
Decision Date: 26 November 2025`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 26 November 2025, what rating would you assign to Project Orion's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "AA" }, 
    { label: "B", value: "B", text: "AA+" }, 
    { label: "C", value: "C", text: "AA-" }, 
    { label: "D", value: "D", text: "A+" } 
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
      text: "The company's dominant market position, improving operating profitability, strong liquidity and substantial financial flexibility from the parent support a very strong credit profile. Although the planned acquisition will temporarily increase leverage, net leverage is expected to remain below 1.0x after refinancing, keeping the financial profile comfortable for the existing rating." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The planned €3.8 billion bridge debt represents a significant increase in financial risk. Since the acquisition will weaken profitability and leverage, the company should be downgraded despite its strong market position and parent support." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's exposure to the cyclical commercial vehicle industry and decline in market share create substantial uncertainty. The acquisition will further increase debt, while the company's ₹5,397 crore liquidity is insufficient to offset the additional financial risk." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's strong parent group completely offsets the risks associated with the acquisition. Since the Tata group has historically provided financial support, the company's operating performance and post-acquisition leverage do not need to be considered in the rating assessment." 
    } 
  ], 
  answer: "A" 
};


export default { id: "CASE_02", caseNumber: 2, caseTitle: "CASE 02", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

