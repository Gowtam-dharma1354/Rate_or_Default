const CASE_TEXT = `Company Profile 
 
Project Phoenix is a large private-sector bank with total assets of ₹2,57,827 crore and total advances of ₹1,71,443 crore as of 31 March 2020. 
 
The bank has recently gone through a severe period of financial and operational stress. 
 
The Government of India imposed a moratorium on the bank on 5 March 2020. The moratorium was lifted on 18 March 2020 after a reconstruction scheme was implemented. 
 
Under the reconstruction scheme, 8 entities, mainly banks, infused ₹10,000 crore of equity into the bank. SBI contributed ₹6,050 crore and became the largest shareholder with a 48.21% stake. 
 
The bank's board was reconstituted and a former SBI senior executive became its MD & CEO. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2019 | FY2020 
Total Assets | 3,80,826 | 2,57,827 
Net Advances | 2,41,500 | 1,71,443 
Deposits | 2,27,610 | 1,05,364 
Total Income | 14,399 | 10,247 
Profit After Tax | 1,720 | -22,715 
Gross NPA | 3.2% | 16.8% 
Net NPA | 1.9% | 5.0% 
Provision Coverage Ratio | 43.1% | 73.8% 
Tier I Capital Adequacy Ratio | 11.3% | 6.5% 
Overall Capital Adequacy Ratio | 16.5% | 8.5% 
Return on Assets | 0.5% | -7.1% 
 
Liquidity & Deposit Position 
 
- Deposits declined by approximately ₹28,000 crore between 31 December 2019 and 5 March 2020. 
- Following the lifting of the moratorium, deposits fell by another approximately ₹30,000 crore between 18 March and 31 March 2020. 
- Deposits stood at ₹1,05,364 crore on 31 March 2020. 
- By 2 May 2020, deposits had stabilised at approximately ₹1,02,717 crore. 
- Liquidity Coverage Ratio was 40%, compared with a regulatory requirement of 100% at the time. 
 
Asset Quality 
 
- Gross NPA increased from 3.2% to 16.8% in one year. 
- Net NPA increased from 1.9% to 5.0%. 
- SMA-1 and SMA-2 portfolio was approximately ₹11,100 crore. 
- The bank reported a ₹22,715 crore loss in FY2020. 
- Further deterioration in asset quality could increase credit costs and put additional pressure on profitability and capital. 
 
Capital & Support 
 
- ₹10,000 crore equity was infused by 8 financial institutions. 
- CET1 ratio improved from 0.6% to 6.3% between 31 December 2019 and 31 March 2020. 
- Overall capital adequacy ratio improved from 4.1% to 8.5%. 
- However, capital ratios remained below regulatory requirements at the time. 
- The bank was expected to raise additional capital. 
- RBI, Government of India and other stakeholders had undertaken measures to support the bank's liquidity. 
- SBI held 48.21% of the bank and had publicly stated that it would not sell its stake for three years.`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 5 June 2020, what rating would you assign to the bank's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "A-" }, 
    { label: "B", value: "B", text: "BBB+" }, 
    { label: "C", value: "C", text: "BBB" }, 
    { label: "D", value: "D", text: "BBB-" } 
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
      text: "The bank's credit profile is supported by extraordinary systemic and shareholder support, including ₹10,000 crore of equity infusion and SBI's 48.21% ownership; however, severe asset-quality deterioration, deposit outflows, weak capitalisation and liquidity concerns constrain the rating." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The bank's severe deterioration in asset quality, ₹22,715 crore loss, large deposit withdrawals, weak capital ratios and very low liquidity coverage indicate substantial credit weakness. These factors should dominate the assessment despite recent support measures." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "Strong systemic support and the significant equity infusion substantially reduce the credit risk. The involvement of SBI, RBI and the Government provides sufficient protection despite the bank's recent financial difficulties." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The bank's problems are largely temporary because the moratorium has been lifted, full banking operations have resumed, and deposits had begun stabilising. Therefore, the bank's strong franchise and future retail strategy justify a high investment-grade rating." 
    } 
  ], 
  answer: "A" 
};


export default { id: "CASE_01", caseNumber: 1, caseTitle: "CASE 01", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

