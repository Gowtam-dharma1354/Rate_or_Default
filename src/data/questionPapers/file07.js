const CASE_TEXT = `Company Profile 
 
"StarkStone Realty" is the flagship real estate company of a large and established real estate group in India. 
 
The company focuses on premium residential, commercial, retail, integrated townships, lifestyle gated communities and redevelopment projects. Its primary markets are the Mumbai Metropolitan Region (MMR) and Pune, with additional projects in Hyderabad, Noida and Nagpur. 
 
The company has a strong and established position in the MMR real estate market. However, its financial risk profile remains moderate because of historically high debt levels, while its business remains exposed to geographical concentration and the cyclical nature of the real estate sector. 
 
Key Information 
 
- The group has more than five decades of experience in the real estate business. 
- It has developed approximately 19.3 million square feet in the real estate sector. 
- The group is among the top five developers in Mumbai's organised residential real estate market. 
- The company has a diversified portfolio of projects at different stages of construction. 
- The company operates primarily in MMR and Pune, with additional projects in Hyderabad, Noida and Nagpur. 
- The company plans to launch approximately 13–16 million square feet of saleable area over the next three years. 
 
Sales & Collections 
 
- Sales bookings increased by approximately 40% to ₹4,531 crore in fiscal 2025. 
- The improvement was supported by increased construction activity following capital infusion from promoters. 
- The company expects sales bookings of approximately ₹6,500–8,000 crore over fiscal 2026 and 2027. 
- Collections increased by approximately 36% in fiscal 2025 to ₹3,659 crore. 
- Collections are expected to increase to approximately ₹6,000–7,500 crore over the current and following fiscal. 
- Improved construction pace has resulted in better sales velocity across projects. 
- The company has projects in early, mid and late stages of construction, providing a balanced development pipeline. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2024 | FY2025 
Revenue | 1,930 | 2,222 
PAT | -108 | 25 
PAT Margin | -5.60% | 1.11% 
Adjusted Debt / Adjusted Net Worth | 10.79x | 4.14x 
Adjusted Interest Coverage | -0.55x | 3.14x 
 
Capital Infusion & Debt Reduction 
 
- The promoter infused approximately ₹1,440 crore during fiscals 2024 and 2025. 
- The company also received approximately ₹1,590 crore through an IPO in the current fiscal. 
- Approximately 75% of the IPO proceeds, amounting to ₹1,192.5 crore, was used for repayment or prepayment of debt. 
- Capital infusion has supported both debt reduction and increased investment into projects. 
- The company's financial risk profile is expected to improve significantly as deleveraging continues. 
- Debt to CFO is estimated at approximately 2.5–3.4x over fiscals 2026–2028. 
- Debt to CFO is expected to improve to approximately 2.4–2.7x during fiscals 2027 and 2028 as collections improve. 
 
Business Model 
 
- The company is expected to continue following an asset-light business model. 
- No major land acquisitions are envisaged in the medium term. 
- Growth is expected to focus on society redevelopment projects, joint development agreements and joint ventures. 
- The company also plans to launch projects from its existing land bank. 
- The asset-light strategy is expected to reduce the requirement for large upfront land expenditure. 
 
Liquidity 
 
- Cash and cash equivalents stood at approximately ₹1,976 crore as of 30 June 2025. 
- The company's refinancing ability remains strong. 
- The company has been able to reduce interest rates through refinancing. 
- Liquidity is considered adequate for its expected obligations. 
 
Business Risks 
 
- The company's financial risk profile remains moderate because leverage is still elevated due to historically high debt levels. 
- Historically high debt levels arose partly because of delays in some projects. 
- Although promoter and IPO-funded debt repayment has improved the financial profile, leverage remained elevated in fiscal 2025. 
- Debt to CFO is expected to remain around 3.4–3.5x in fiscal 2026 before improving thereafter. 
- The company is exposed to cyclicality in the real estate sector. 
- Economic downturns can negatively affect project saleability, realisations and cash flows. 
- Delays in regulatory approvals have affected project construction and saleability in the past. 
- Approximately 85% of collections in fiscal 2025 came from the MMR region, creating significant geographical concentration risk. 
- Debt servicing requirements are relatively fixed while project-related cash inflows can fluctuate. 
- Any debt-funded land acquisitions could weaken the financial risk profile. 
 
Positive Factors 
 
- Strong and established market position in the MMR market. 
- More than five decades of experience in real estate development. 
- Top-five position among organised residential developers in Mumbai. 
- Improving sales bookings and collections. 
- Approximately 40% growth in sales bookings during fiscal 2025. 
- Approximately 36% growth in collections during fiscal 2025. 
- Significant promoter capital infusion. 
- IPO proceeds have been substantially used for debt repayment. 
- Significant improvement in debt-to-net-worth and interest coverage. 
- Adequate liquidity of approximately ₹1,976 crore. 
- Strong refinancing ability. 
- Asset-light business model with no major land acquisitions planned in the medium term. 
 
Rating Considerations 
 
StarkStone Realty has a strong market position and an established track record in the MMR market. Improving construction activity, sales velocity and collections, together with substantial promoter and IPO-funded capital infusion, have strengthened the company's financial risk profile. 
 
However, leverage remains elevated, the business is concentrated heavily in the MMR market and real estate remains a cyclical industry. Delays in approvals and project execution can affect saleability and cash flows, while debt servicing remains relatively fixed. 
 
Decision Date: 25 August 2025`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 25 August 2025, what credit rating would you assign to StarkStone Realty's long-term bank debt facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BBB" }, 
    { label: "B", value: "B", text: "A-" }, 
    { label: "C", value: "C", text: "BB+" }, 
    { label: "D", value: "D", text: "BBB+" } 
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
      text: "The company's leverage remains elevated and approximately 85% of collections come from MMR. Since real estate is cyclical and project delays have affected the company in the past, these weaknesses outweigh the recent improvement in sales, collections and capitalisation." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's strong MMR market position, established track record, improving sales and collections and substantial promoter and IPO-funded debt reduction support the credit profile. However, elevated leverage, geographical concentration and real estate cyclicality continue to constrain the rating." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The ₹1,976 crore cash balance, strong refinancing ability and significant debt repayment through IPO proceeds provide sufficient protection against the company's obligations. The remaining leverage and concentration risks therefore have limited relevance to the rating." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's 40% growth in sales bookings and 36% growth in collections demonstrate a substantial strengthening of the business profile. Combined with the promoter infusion and IPO proceeds, these improvements justify a rating above the current investment-grade category." 
    } 
  ], 
  answer: "B" 
};


export default { id: "CASE_07", caseNumber: 7, caseTitle: "CASE 07", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

