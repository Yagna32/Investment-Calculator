const temp = {};
export default function Inputs({ getData, onInput }) {
  return (
    <div id="user-input">
      <ol className="input-group">
        <li>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            value={getData.initialInvestment}
            onChange={(event) =>
              onInput("initialInvestment", event.target.value)
            }
            required
          />
        </li>
        <li>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            value={getData.annualInvestment}
            onChange={(event) =>
              onInput("annualInvestment", event.target.value)
            }
            required
          />
        </li>
      </ol>
      <ol className="input-group">
        <li>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            value={getData.expectedReturn}
            onChange={(event) => onInput("expectedReturn", event.target.value)}
            required
          />
        </li>
        <li>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            value={getData.duration}
            onChange={(event) => onInput("duration", event.target.value)}
            required
          />
        </li>
      </ol>
    </div>
  );
}
