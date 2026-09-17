const CASE_TEXT = `Company Profile 
 
"Project Phoenix" is a private-sector bank that has recently undergone a major reconstruction following a period of severe financial and operational stress. 
 
The bank has been rebuilding its capital, liquidity and deposit base following the difficulties faced earlier in 2020. 
 
Since the reconstruction, the bank has received substantial capital support, raised additional equity from institutional investors and improved its liquidity position. 
 
However, the bank continues to face significant challenges in rebuilding depositor confidence, improving asset quality, establishing a stable operating model and strengthening its governance and compliance framework. 
 
Key Information 
 
- Total assets stood at approximately ₹2,55,485 crore as of 30 June 2020. 
- Total advances stood at approximately ₹1,64,510 crore. 
- The bank had 1,139 branches as of 30 June 2020. 
- Total deposits increased to approximately ₹1,17,360 crore as of 30 June 2020 from ₹1,05,364 crore as of 31 March 2020. 
- The deposit base had experienced significant withdrawals during the earlier period of financial stress but has shown signs of stabilisation. 
- The bank has launched initiatives to acquire new customers, retain existing depositors and win back customers who had withdrawn funds. 
 
Capital Position 
 
- The bank raised ₹15,000 crore through a follow-on public offer in July 2020. 
- The FPO received interest from both domestic and global institutional investors. 
- Approximately ₹4,098 crore was raised from anchor investors. 
- Pro-forma CET1 ratio improved to 13.4% from 6.3% as of 31 March 2020. 
- Overall capital adequacy ratio improved to 20.0% from 8.5% as of 31 March 2020. 
- The current capital ratios are well above the minimum regulatory requirement. 
- Earlier, the bank had received ₹10,000 crore of equity from 8 entities, primarily banks, as part of the reconstruction scheme. 
 
Liquidity 
 
- Liquidity Coverage Ratio improved to 114.1% as of 30 June 2020 from 37.0% as of 31 March 2020. 
- The regulatory minimum requirement was 80% at the time. 
- The bank repaid ₹35,000 crore of the ₹50,000 crore special liquidity facility obtained from the RBI in March 2020. 
- Liquidity support is expected to remain available from key stakeholders if required. 
- The bank can also raise funds through certificates of deposit, securitisation and inter-bank participation certificates. 
 
Asset Quality 
 
- Gross NPA increased sharply to 17.3% as of 30 June 2020 from 5.0% a year earlier. 
- Net NPA stood at 4.96%. 
- Gross NPAs were approximately ₹32,703 crore as of 30 June 2020. 
- Provision coverage ratio improved to 75.1% from 43.1% a year earlier. 
- The bank reported a profit of approximately ₹45 crore in the quarter ended June 2020. 
- Annualised credit cost declined to 1.7% in the first quarter of fiscal 2021 from 10.3% for fiscal 2020. 
- Despite the improvement in profitability, further deterioration in asset quality could affect earnings and capital. 
 
Business Model 
 
- The bank plans to focus on granular retail asset segments and selective working-capital financing for the corporate segment. 
- The ability to scale the new business model while maintaining asset quality and profitability remains to be demonstrated. 
- The bank needs to build a strong retail liabilities franchise and establish a stable and sound operating model. 
- Strengthening governance and compliance frameworks remains important for the long-term success of the bank. 
 
Systemic & Shareholder Support 
 
- Extraordinary systemic support from key stakeholders remains an important credit strength. 
- The Ministry of Finance, RBI and SBI have reiterated their support for protecting depositors. 
- SBI remains the largest shareholder after the FPO, with approximately 30% ownership. 
- SBI invested approximately ₹1,740 crore in the FPO. 
- SBI had earlier contributed ₹6,050 crore of the ₹10,000 crore equity infusion under the reconstruction scheme. 
- SBI has publicly stated that it would not sell its stake for three years from implementation of the reconstruction scheme. 
- Two directors on the bank's board are from SBI. 
 
Key Risks 
 
- Deposits remain confidence-sensitive and could come under pressure again. 
- The bank needs to demonstrate that it can build a stable retail deposit franchise. 
- Asset quality remains weak, with gross NPA at 17.3%. 
- Further slippages could weaken profitability and capital. 
- The new business model has not yet been tested over a sufficiently long period. 
- The bank operates in an environment affected by the Covid-19 pandemic and economic uncertainty. 
- Borrower payment behaviour after the moratorium period could affect future asset quality. 
- Governance and compliance improvements remain critical. 
 
Positive Factors 
 
- ₹15,000 crore FPO substantially strengthened capital. 
- CET1 and overall CAR are now well above regulatory requirements. 
- LCR improved to 114.1%. 
- Deposits increased to ₹1,17,360 crore. 
- ₹35,000 crore of the RBI special liquidity facility has been repaid. 
- Credit costs have declined significantly. 
- The bank returned to a small profit in the June 2020 quarter. 
- Strong systemic and SBI support continues. 
 Previous Rating:- BBB
Decision Date: 27 August 2020`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 27 August 2020, what rating would you assign to Project Phoenix's long-term debt instruments?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BBB-" }, 
    { label: "B", value: "B", text: "BBB" }, 
    { label: "C", value: "C", text: "BB+" }, 
    { label: "D", value: "D", text: "A-" } 
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
      text: "The bank's capital and liquidity have improved substantially following the FPO and repayment of the RBI liquidity facility. Since CET1 is 13.4%, CAR is 20% and LCR is 114.1%, the earlier asset-quality concerns should no longer materially constrain the rating." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The bank's gross NPA of 17.3%, net NPA of 4.96% and history of significant deposit withdrawals indicate that its standalone credit profile remains weak. The improvement in capital and liquidity is insufficient to support an investment-grade rating." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The bank's strong systemic support, SBI ownership, improved capitalisation and adequate liquidity substantially reduce its credit risk. The return to profitability and recovery in deposits indicate that the bank's new business model has already been successfully established." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The significant improvement in capital and liquidity, recovery in the deposit base, repayment of the RBI liquidity facility and continued systemic and SBI support strengthen the credit profile. However, weak asset quality, the need to rebuild a stable retail franchise and the still-unproven business model constrain the rating despite these improvements." 
    } 
  ], 
  answer: "D" 
};



export default { id: "CASE_01", caseNumber: 1, caseTitle: "CASE 01", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

