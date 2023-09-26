import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      fromAmount: +amount,
      toAmount: amount / rate,
      currency,
      rate,
    });
  };

  return (
    <Container>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
