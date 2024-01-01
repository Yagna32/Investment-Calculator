import { useState } from "react";
import Inputs from "./components/Inputs";
import Outputs from "./components/Output";

function App() {
  const [getData, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // function handleData(event) {
  //   temp[event.target.name] = event.target.value;
  //   if (
  //     temp[`initialInvestment`] &&
  //     temp[`annualInvestment`] &&
  //     temp[`expectedReturn`] &&
  //     temp[`duration`]
  //   ) {
  //     onInput(
  //       temp[`initialInvestment`],
  //       temp[`annualInvestment`],
  //       temp[`expectedReturn`],
  //       temp[`duration`],
  //     );
  //   }
  // }

  function handleInputs(inputIdentifier, value) {
    setData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: +value,
      };
    });
    // const annualData = calculateInvestmentResults(
    //   initialInvestment,
    //   annualInvestment,
    //   expectedReturn,
    //   duration,
    // );
    //setData(annualData);
  }
  return (
    <div>
      <Inputs getData={getData} onInput={handleInputs} />
      <Outputs getData={getData} />
    </div>
  );
}

export default App;
