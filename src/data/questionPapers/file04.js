const CASE_TEXT = `Company Profile 
 
"The Company" is one of India's leading mobile service providers, operating across all 22 telecom service areas in the country. 
 
Following a major merger, the company has emerged as one of the significant mobile operators in India. It has a substantial subscriber base, extensive spectrum holdings and a nationwide network. 
 
The company has strong financial backing from two major sponsors and has previously received substantial equity support. However, its operating performance remains weak and the telecom industry continues to face intense competitive and regulatory pressure. 
 
The company is also facing a major financial challenge arising from a disputed regulatory liability, which could significantly affect its liquidity and solvency. 
 
Key Information 
 
- Gross revenue market share was approximately 29.4% as of June 2019. 
- Subscriber market share was approximately 31.7% as of September 2019. 
- The company holds approximately 1,850 MHz of spectrum. 
- Approximately 1,715 MHz of the spectrum can be utilised for 2G, 3G, 4G or 5G technology. 
- The company provides wireless voice and broadband services across all 22 telecom circles in India. 
- Network integration had been completed in 14 circles as of September 2019. 
 
Operating Performance 
 
- The company lost more than 11 crore subscribers during the 12 months ended September 2019. 
- Average revenue per user (ARPU) increased from ₹88 in September 2018 to ₹108 in June 2019, but subsequently declined marginally to ₹107 in September 2019. 
- EBITDA declined to approximately ₹1,050 crore in the second quarter of fiscal 2020 from ₹1,250 crore in the previous quarter. 
- Revenue and operating profit declined by approximately ₹426 crore and ₹200 crore, respectively, during the quarter ended September 2019 compared with the previous quarter. 
- Continued subscriber losses have offset the benefits of higher ARPU and merger-related synergies. 
- The company announced a tariff increase beginning December 2019, although the quantum of the increase remained uncertain as of the decision date. 
 
Financial Information (₹ Crore unless stated otherwise) 
 
Particulars | FY2018 | FY2019 
Revenue | 63,138 | 48,747 
Profit After Tax | -12,285 | -13,371 
PAT Margin | -19.4% | -27.4% 
Debt / EBITDA | 10.3x | 23.1x 
Adjusted Interest Coverage | 1.25x | 0.49x 
 
AGR-related Liability 
 
- The company had recognised a total provision of approximately ₹44,150 crore for the disputed AGR-related liability up to September 2019. 
- This included approximately ₹27,610 crore towards licence fees and ₹16,540 crore towards spectrum usage charges. 
- Existing liquidity of approximately ₹15,390 crore was insufficient to meet the licence-fee liability of ₹27,610 crore if required to be paid. 
- The Supreme Court had directed telecom operators to comply with the judgement within three months. 
- The Department of Telecommunications subsequently issued a demand notice requiring operators to carry out self-assessment and make payments. 
- The company and other telecom operators were seeking relief from the government, including extended payment terms and waiver of interest and penalties. 
- The final quantum, payment schedule and possible government relief remained uncertain as of the decision date. 
 
Liquidity 
 
- Cash and cash equivalents stood at approximately ₹15,390 crore as of September 2019. 
- Deferred spectrum repayment of approximately ₹5,630 crore was due during the second half of fiscal 2020. 
- External debt repayment of approximately ₹945 crore was also due during the same period. 
- Any payment towards the AGR liability could significantly weaken liquidity. 
- Delay in planned asset monetisation could further stretch liquidity. 
- Accelerated debt repayment triggered by a breach of debt covenants could create additional pressure. 
- Given the weak operating performance, the company's ability to raise fresh debt remained limited. 
 
Sponsor Support 
 
- The company is backed by two strong sponsors with equal management control. 
- Vodafone Group Plc and the Aditya Birla Group are the principal sponsors. 
- The company successfully raised ₹25,000 crore of equity in May 2019. 
- Vodafone contributed approximately ₹11,000 crore and Aditya Birla Group contributed approximately ₹6,920 crore. 
- Before completion of the merger, Vodafone had contributed approximately ₹8,600 crore and Aditya Birla Group had contributed approximately ₹3,250 crore to the respective businesses. 
- Strong sponsors provide some financial flexibility. 
- Continued and timely sponsor support remains important if the AGR-related liability materialises. 
 
Industry Risks 
 
- The domestic telecom industry has experienced intense price competition. 
- The entry of a major new telecom operator triggered a significant price war and reduced industry revenues. 
- Lower call termination charges have also constrained profitability. 
- The telecom industry is highly regulated and vulnerable to changes in government policy. 
- Technological changes require continued investment in network infrastructure. 
- Further reductions in interconnect usage charges could adversely affect profitability. 
- The company earns significant revenue from interconnect usage charges, making regulatory changes particularly relevant to its financial profile. 
 
Positive Factors 
 
- Established market position in India's mobile telephone industry. 
- Nationwide presence across all 22 service areas. 
- Large spectrum holdings provide technological flexibility. 
- Strong financial support from two major sponsors. 
- Significant equity infusion of ₹25,000 crore in May 2019. 
- Government had granted a two-year moratorium on deferred spectrum payments. 
- Potential government relief on AGR-related dues could materially improve the company's financial position. 
 
Decision Considerations 
 
The company's established market position and strong sponsors provide important credit strengths. However, these are significantly offset by continued subscriber losses, weak operating performance, very high leverage, weak interest coverage, stretched liquidity and the potentially large AGR-related cash outflow. 
 
Previous rating:- BBB+ 
 
Decision Date: 22 November 2019`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 22 November 2019, what credit rating would you assign to The Company's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BBB-" }, 
    { label: "B", value: "B", text: "BB+" }, 
    { label: "C", value: "C", text: "BBB" }, 
    { label: "D", value: "D", text: "A-" } 
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
      text: "The company's nationwide network, substantial spectrum holdings and strong sponsors provide sufficient financial flexibility to offset its weak operating performance. The ₹25,000 crore equity infusion and the two-year spectrum payment moratorium indicate that the company should retain its previous rating." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company has lost more than 11 crore subscribers and has debt-to-EBITDA of 23.1x with interest coverage of only 0.49x. Since its operating performance is weak and liquidity is insufficient to cover the AGR liability, the company's rating should fall below investment grade." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company's established market position, strong sponsors and large spectrum holdings provide meaningful credit strengths. However, continued subscriber losses, weak operating performance, extremely high leverage, weak debt protection and the potentially large AGR-related cash outflow materially weaken its financial risk profile." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The ₹15,390 crore liquidity position and strong sponsor backing provide adequate protection against the company's obligations. Since the AGR liability remains disputed and the government is considering relief measures, it should not materially affect the current rating." 
    } 
  ], 
  answer: "C" 
};



export default { id: "CASE_04", caseNumber: 4, caseTitle: "CASE 04", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

