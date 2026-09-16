const CASE_TEXT = `Company Profile 
 
The company is one of India's leading mobile service providers, operating across all 22 service areas in the country. Following a major merger, it has emerged as one of the country's significant telecom operators. 
 
The company has a strong market position, but the telecom industry has been under severe competitive pressure. The company has also experienced significant subscriber losses and weakening operating performance. 
 
At the same time, the company has strong financial backing from two major sponsors and has recently raised substantial equity. 
 
The company is now facing an additional risk from a major regulatory dispute that could result in a large cash outflow. 
 
Key Information 
 
- Gross revenue market share was approximately 29.4% in the quarter ended June 2019. 
- Subscriber market share was approximately 32% as of August 2019. 
- The company holds approximately 1,850 MHz of spectrum, of which around 1,715 MHz can be used for 2G, 3G, 4G or 5G technology. 
- The company operates across all 22 telecom circles in India. 
- More than 70% of the group's spectrum has validity extending to 2034–2036. 
- Network integration had been completed in 10 circles by June 2019, accounting for more than 50% of 4G revenue. 
 
Operating Performance 
 
- The company lost approximately 66.6 million subscribers during the 12 months ended August 2019. 
- Average revenue per user (ARPU) improved from ₹88 in September 2018 to ₹108 in June 2019. 
- Despite the improvement in ARPU, subscriber losses continued to put pressure on performance. 
- EBITDA declined by approximately ₹350 crore quarter-on-quarter in the first quarter of fiscal 2020. 
- Revenue and operating profit were lower by approximately ₹500 crore and ₹340 crore, respectively, during the first quarter of fiscal 2020. 
- Net loss was ₹4,874 crore on revenue of ₹11,270 crore in the quarter ended June 2019. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2018 | FY2019 
Revenue | 63,138 | 48,747 
Profit After Tax | -12,285 | -13,371 
PAT Margin | -19.4% | -27.4% 
Debt / EBITDA | 10.3x | 23.1x 
Adjusted Interest Coverage | 1.25x | 0.49x 
 
Liquidity 
 
- Liquid surplus stood at approximately ₹21,180 crore as of June 30, 2019. 
- Principal repayments of approximately ₹4,200 crore were due during the nine months ending March 31, 2020. 
- Planned capex was approximately ₹13,000 crore during the same period. 
- Liquidity was also expected to be supported by planned asset monetisation and a lean working-capital cycle. 
- However, the emerging regulatory liability could materially affect liquidity if payment is required in the short term. 
 
Sponsor Support 
 
- The company is backed by two strong sponsors with equal management control. 
- The company successfully raised ₹25,000 crore of equity in May 2019. 
- One sponsor contributed ₹11,000 crore and the other contributed ₹6,920 crore. 
- The sponsors had also provided substantial equity support before the completion of the merger. 
- Continued sponsor support provides some financial flexibility. 
 
Regulatory Risk 
 
- The Supreme Court upheld the Department of Telecommunications' definition of Adjusted Gross Revenue (AGR). 
- The ruling could result in a significant financial liability for the company. 
- Based on the demand raised by the Department of Telecommunications during the proceedings, the company may be required to pay approximately ₹28,309 crore, including licence fees, interest, penalty and interest on penalty. 
- The exact liability and payment terms were still unclear as of the decision date. 
- Telecom operators were considering options including a review petition and discussions with the government regarding payment terms and possible relief. 
 
Industry Risk 
 
- The domestic telecom industry has experienced intense price competition. 
- The entry of a major new telecom operator triggered a price war and pressured industry revenues. 
- Lower call termination charges have also constrained profitability. 
- The industry remains exposed to technological changes requiring significant network investment. 
- Regulatory changes could materially affect profitability. 
 
Decision Date: 1 November 2019`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 1 November 2019, what rating would you assign to the company's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "A" }, 
    { label: "B", value: "B", text: "A-" }, 
    { label: "C", value: "C", text: "BBB" }, 
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
      text: "The company's established market position and strong sponsor support provide important credit strengths, while its large spectrum holdings and liquidity offer some financial flexibility. However, continued weak operating performance, very high leverage, weak interest coverage and significant regulatory uncertainty constrain the rating." 
      
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's debt-to-EBITDA ratio of 23.1x and interest coverage of only 0.49x indicate extremely weak debt protection. Combined with continuing losses and subscriber decline, these factors warrant a rating below the investment-grade category regardless of sponsor support." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's established market position, large spectrum holdings and strong sponsors provide sufficient comfort to offset its weak operating performance, high leverage and regulatory risks. Therefore, the company should retain a rating in the A category." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The company's liquidity position is comfortable and its sponsors have demonstrated their willingness to provide substantial equity support. Since the regulatory liability is still uncertain, the potential ₹28,309 crore payment should not materially influence the current rating." 
    } 
  ], 
  answer: "A" 
};


export default { id: "CASE_04", caseNumber: 4, caseTitle: "CASE 04", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

