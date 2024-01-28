const financialLiteracyQuestions = [
    {
        id: 1,
        question: "What is the purpose of a budget?",
        options: ["A. To track income", "B. To plan spending", "C. To save money", "D. All of the above"],
        correctAnswer: "D. All of the above"
    },
    {
        id: 2,
        question: "What does APR stand for?",
        options: ["A. Annual Percentage Rate", "B. Average Personal Revenue", "C. Annual Payment Ratio", "D. Asset Performance Rating"],
        correctAnswer: "A. Annual Percentage Rate"
    },
    {
        id: 3,
        question: "Which of the following is considered a long-term investment?",
        options: ["A. Savings account", "B. Stocks", "C. Certificate of deposit", "D. All of the above"],
        correctAnswer: "B. Stocks"
    },
    {
        id: 4,
        question: "What is compound interest?",
        options: ["A. Interest paid on the original principal only", "B. Interest calculated on both the initial principal and the accumulated interest", "C. Interest paid at the end of the investment term", "D. None of the above"],
        correctAnswer: "B. Interest calculated on both the initial principal and the accumulated interest"
    },
    {
        id: 5,
        question: "Which of the following is an advantage of renting a home instead of buying?",
        options: ["A. Potential for equity appreciation", "B. Stable monthly payments", "C. Flexibility to move", "D. Tax benefits"],
        correctAnswer: "C. Flexibility to move"
    },
    {
        id: 6,
        question: "What is the 50/30/20 rule in budgeting?",
        options: ["A. 50% savings, 30% bills, 20% discretionary spending", "B. 50% bills, 30% savings, 20% discretionary spending", "C. 50% discretionary spending, 30% bills, 20% savings", "D. None of the above"],
        correctAnswer: "A. 50% savings, 30% bills, 20% discretionary spending"
    },
    {
        id: 7,
        question: "Which of the following is a disadvantage of using credit cards?",
        options: ["A. Convenience", "B. Building credit history", "C. Risk of overspending", "D. Cashback rewards"],
        correctAnswer: "C. Risk of overspending"
    },
    {
        id: 8,
        question: "What does ROI stand for in investing?",
        options: ["A. Rate of Interest", "B. Return on Investment", "C. Risk of Inflation", "D. Real estate Option Investment"],
        correctAnswer: "B. Return on Investment"
    },
    {
        id: 9,
        question: "Which of the following is a type of retirement account?",
        options: ["A. IRA (Individual Retirement Account)", "B. HSA (Health Savings Account)", "C. ETF (Exchange-Traded Fund)", "D. CD (Certificate of Deposit)"],
        correctAnswer: "A. IRA (Individual Retirement Account)"
    },
    {
        id: 10,
        question: "What is liquidity in finance?",
        options: ["A. Ability to convert assets into cash quickly", "B. Long-term investment strategy", "C. Total value of assets owned", "D. Rate of return on investment"],
        correctAnswer: "A. Ability to convert assets into cash quickly"
    },
    {
        id: 11,
        question: "Which of the following is a characteristic of a fixed-rate mortgage?",
        options: ["A. Monthly payments can change over time", "B. Interest rate remains constant for the life of the loan", "C. Ideal for short-term homeowners", "D. Interest rate depends on market fluctuations"],
        correctAnswer: "B. Interest rate remains constant for the life of the loan"
    },
    {
        id: 12,
        question: "What is a FICO score used for?",
        options: ["A. Assessing income level", "B. Evaluating employment history", "C. Determining creditworthiness", "D. Calculating tax liability"],
        correctAnswer: "C. Determining creditworthiness"
    },
    {
        id: 13,
        question: "What is the purpose of an emergency fund?",
        options: ["A. Investing in the stock market", "B. Financing vacations", "C. Covering unexpected expenses", "D. Purchasing luxury items"],
        correctAnswer: "C. Covering unexpected expenses"
    },
    {
        id: 14,
        question: "Which of the following factors affects your credit score?",
        options: ["A. Income level", "B. Number of credit inquiries", "C. Age and gender", "D. Political affiliation"],
        correctAnswer: "B. Number of credit inquiries"
    },
    {
        id: 15,
        question: "What is diversification in investing?",
        options: ["A. Investing in a single stock", "B. Spreading investments across different assets", "C. Focusing on short-term gains", "D. Ignoring market trends"],
        correctAnswer: "B. Spreading investments across different assets"
    },
    {
        id: 16,
        question: "What is the difference between a debit card and a credit card?",
        options: ["A. Debit card transactions don't affect your bank balance", "B. Credit card transactions require a PIN", "C. Debit cards charge interest on purchases", "D. Credit cards offer rewards points"],
        correctAnswer: "A. Debit card transactions don't affect your bank balance"
    },
    {
        id: 17,
        question: "What is an ETF?",
        options: ["A. Earnings from Treasury Funds", "B. Exchange-Traded Fund", "C. Exceptional Tax-Free investment", "D. Equity Transfer Fund"],
        correctAnswer: "B. Exchange-Traded Fund"
    },
    {
        id: 18,
        question: "What is the purpose of life insurance?",
        options: ["A. To cover funeral expenses", "B. To provide financial protection for dependents", "C. To pay off student loans", "D. To fund retirement"],
        correctAnswer: "B. To provide financial protection for dependents"
    },
    {
        id: 19,
        question: "What is an example of a variable expense?",
        options: ["A. Rent", "B. Mortgage payment", "C. Groceries", "D. Property taxes"],
        correctAnswer: "C. Groceries"
    },
    {
        id: 20,
        question: "What does the term 'APY' stand for?",
        options: ["A. Annual Percentage Yield", "B. Average Personal Yearly", "C. Asset Profit Yield", "D. Average Payment Yearly"],
        correctAnswer: "A. Annual Percentage Yield"
    },
    {
        id: 21,
        question: "What is the difference between a traditional IRA and a Roth IRA?",
        options: ["A. Contributions to a traditional IRA are tax-deductible", "B. Roth IRA contributions are made with pre-tax dollars", "C. Roth IRA withdrawals are tax-free in retirement", "D. Traditional IRA withdrawals are tax-free in retirement"],
        correctAnswer: "C. Roth IRA withdrawals are tax-free in retirement"
    },
    {
        id: 22,
        question: "What is a mutual fund?",
        options: ["A. A type of bank account", "B. An investment that pools money from multiple investors to buy securities", "C. A government-issued bond", "D. A form of insurance"],
        correctAnswer: "B. An investment that pools money from multiple investors to buy securities"
    },
    {
        id: 23,
        question: "What is the purpose of a will?",
        options: ["A. To specify how assets are distributed after death", "B. To establish a trust fund", "C. To create a retirement plan", "D. To manage investments"],
        correctAnswer: "A. To specify how assets are distributed after death"
    },
    {
        id: 24,
        question: "What is the recommended percentage of income to save for retirement?",
        options: ["A. 5-10%", "B. 15-20%", "C. 25-30%", "D. 40-50%"],
        correctAnswer: "B. 15-20%"
    },
    {
        id: 25,
        question: "What is the difference between stocks and bonds?",
        options: ["A. Stocks represent ownership in a company, while bonds represent debt", "B. Bonds represent ownership in a company, while stocks represent debt", "C. Stocks are guaranteed returns, while bonds are not", "D. Bonds offer higher potential returns than stocks"],
        correctAnswer: "A. Stocks represent ownership in a company, while bonds represent debt"
    },
    {
        id: 26,
        question: "What is the purpose of a credit score?",
        options: ["A. To determine eligibility for a mortgage", "B. To assess risk for lenders", "C. To calculate interest rates on loans", "D. All of the above"],
        correctAnswer: "D. All of the above"
    },
    {
        id: 27,
        question: "What is an emergency fund typically recommended to cover?",
        options: ["A. 1 month of expenses", "B. 3-6 months of expenses", "C. 12 months of expenses", "D. 24 months of expenses"],
        correctAnswer: "B. 3-6 months of expenses"
    },
    {
        id: 28,
        question: "What is the purpose of diversification in an investment portfolio?",
        options: ["A. To increase potential returns", "B. To reduce risk", "C. To maximize tax benefits", "D. To minimize liquidity"],
        correctAnswer: "B. To reduce risk"
    },
    {
        id: 29,
        question: "What is the difference between a traditional 401(k) and a Roth 401(k)?",
        options: ["A. Contributions to a traditional 401(k) are tax-deductible", "B. Roth 401(k) contributions are made with pre-tax dollars", "C. Roth 401(k) withdrawals are tax-free in retirement", "D. Traditional 401(k) withdrawals are tax-free in retirement"],
        correctAnswer: "C. Roth 401(k) withdrawals are tax-free in retirement"
    },
    {
        id: 30,
        question: "What is the purpose of insurance?",
        options: ["A. To protect against financial losses", "B. To generate income", "C. To pay off debt", "D. To maximize investment returns"],
        correctAnswer: "A. To protect against financial losses"
    }    
]