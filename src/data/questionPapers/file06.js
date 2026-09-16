const CASE_TEXT = `Company Profile 
 
"Quinjet Airways" is a low-cost airline operating in India's domestic aviation market. 
 
The company has an established market position and has benefited from the exit of another major airline from the market. It operates a fleet of Boeing 737 and Bombardier Dash aircraft and has maintained strong passenger load factors in the months preceding the disruption. 
 
However, the airline industry is highly competitive and has a high proportion of fixed costs. The company is also exposed to fluctuations in aviation turbine fuel (ATF) prices and foreign exchange rates. 
 
In March 2020, the spread of the COVID-19 pandemic resulted in travel bans, visa cancellations and a sharp decline in passenger traffic. The company suspended domestic flights and discontinued international operations, creating significant pressure on revenue, profitability and liquidity. 
 
Key Information 
 
- Domestic market share was 15.3% during February 2020. 
- Market share had increased from 13.7% a year earlier. 
- The company benefited from additional aircraft and airport slots becoming available following the exit of another airline. 
- Passenger load factor remained above 90% for the eight months through February 2020. 
- More than 50% of an airline's costs are fixed in nature. 
- The company has significant exposure to ATF price movements and foreign exchange fluctuations. 
- Lease rentals and maintenance costs account for approximately 35–40% of operating costs and are denominated in US dollars. 
 
COVID-19 Impact 
 
- International operations were discontinued until April 30, 2020. 
- Domestic flights were suspended until March 31, 2020. 
- Travel bans and visa cancellations significantly reduced passenger traffic. 
- Existing travel cancellations further weakened liquidity. 
- A prolonged shutdown could result in continued operating losses. 
- The company would continue to incur fixed costs such as lease rentals and workforce costs despite reduced revenue. 
- The company was taking measures to conserve cash, including deferring lease payments and rationalising costs. 
- Government support to the aviation industry remained an important potential source of liquidity. 
 
Financial Information (₹ Crore) 
 
Particulars | FY2018 | FY2019 
Revenue | 7,811 | 9,129 
Profit After Tax | 567 | -316 
PAT Margin | 7.3% | -3.5% 
Interest Coverage | 5.21x | -0.05x 
Adjusted Debt / Adjusted Net Worth | NM | NM 
 
Liquidity 
 
- Cash accrual was negative in FY2019. 
- Cash accrual was expected to remain negative during FY2020. 
- COVID-19-related cancellations were expected to place additional pressure on liquidity. 
- Debt repayment capacity was under pressure because of the disruption in operations. 
- The company was attempting to preserve cash through cost rationalisation and deferred lease payments. 
 
Debt Facilities 
 
- Total bank loan facilities rated: ₹1,445 crore. 
- Term loans of ₹325 crore carried the long-term rating. 
- Letter of Credit facilities of ₹770 crore were rated CRISIL A4. 
- Packing Credit in Foreign Currency of ₹350 crore was rated CRISIL A4. 
 
Industry Risks 
 
- The domestic airline industry is highly competitive. 
- Frequent entry of new players and fleet additions constrain airlines' ability to increase yields. 
- More than half of airline costs are fixed, making profitability highly sensitive to disruption in operations. 
- ATF accounts for approximately 35–40% of operating costs. 
- ATF prices are linked to global crude oil prices and can be volatile. 
- Airlines have limited ability to pass higher fuel costs to passengers because of intense competition. 
- Lease rentals and maintenance expenses are exposed to foreign exchange movements. 
 
Business Strengths 
 
- Established market position in the domestic aviation market. 
- Domestic market share increased to 15.3% by February 2020. 
- Passenger load factor remained above 90% before the COVID-19 disruption. 
- Strong presence on metro, Tier-I, Tier-II and Tier-III routes. 
- The company had focused on fleet utilisation, on-time performance and minimising cancellations. 
- Lower ATF prices during March 2020 could partially cushion losses caused by high fixed costs. 
 
Rating Considerations 
 
Quinjet Airways has an established market position and had demonstrated strong passenger load factors before the pandemic. However, the sudden suspension of flights creates a severe mismatch between sharply reduced revenue and continuing fixed costs. 
 
The company's financial risk profile is already weak, with a loss in FY2019, negative interest coverage and negative cash accrual. The COVID-19 disruption could further weaken profitability and liquidity. Intense competition, ATF price volatility and foreign exchange exposure add further pressure. 
 
Potential government support, lower ATF prices and cash-conservation measures could provide some relief, but the extent and duration of the operational disruption remain uncertain. 
 
Decision Date: 27 March 2020`;

const QUESTION_1 = { 
  id: "Q1", 
  prompt: 
    "# QUESTION 1 — ASSIGN A RATING\n\nBased ONLY on the information available as of 27 March 2020, what credit rating would you assign to Quinjet Airways' long-term debt facilities?\n\nSelect ONE:", 
  options: [ 
    { label: "A", value: "A", text: "BB" }, 
    { label: "B", value: "B", text: "B" }, 
    { label: "C", value: "C", text: "CCC" }, 
    { label: "D", value: "D", text: "BB-" } 
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
      text: "The company's market share had increased to 15.3%, passenger load factor had remained above 90%, and lower ATF prices could support margins. These factors indicate that the company's credit profile should remain strong despite the temporary disruption." 
    }, 
    { 
      label: "B", 
      value: "B", 
      text: "The company's established market position and strong passenger load factor are sufficient to offset the financial impact of the flight suspension, while deferred lease payments should ensure that liquidity remains adequate." 
    }, 
    { 
      label: "C", 
      value: "C", 
      text: "The company is facing severe operational disruption, but its increased market share, strong pre-pandemic passenger load factor and lower ATF prices provide enough support to justify retaining a speculative-grade rating without further deterioration." 
    }, 
    { 
      label: "D", 
      value: "D", 
      text: "The suspension of flights sharply reduces revenue while more than half of airline costs remain fixed. Combined with negative cash accrual, a FY2019 loss, almost no interest coverage, intense competition and further liquidity pressure from cancellations, the company's financial risk profile has deteriorated significantly." 
    } 
  ], 
  answer: "D" 
};


export default { id: "CASE_06", caseNumber: 6, caseTitle: "CASE 06", caseText: CASE_TEXT, questions: [QUESTION_1, QUESTION_2] };

