import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Outputs({ getData }) {
  const annualData = calculateInvestmentResults(getData);
  console.log(getData);
  console.log(annualData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData &&
          annualData.map((row) => {
            const totalInterest =
              row.valueEndOfYear - row.annualInvestment * row.year;
            const InvestedCap = row.valueEndOfYear - totalInterest;
            return (
              <tr key={row.year}>
                <th>{row.year}</th>
                <th>{formatter.format(row.valueEndOfYear)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{formatter.format(row.interest)}</th>
                <th>{formatter.format(InvestedCap)}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
