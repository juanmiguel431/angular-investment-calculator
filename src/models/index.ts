export type CalculateInvestmentResultsProps = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

export type CalculateInvestmentResultsReturn = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
