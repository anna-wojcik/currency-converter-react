import { useState } from "react";
import { currencies } from "../currencies";
import ResultRate from "./ResultRate";
import ResultAmount from "./ResultAmount";
import DateTime from "./DateTime";
import { StyledForm, Fieldset, Legend, Label, Content, UniversalFormElement, Paragraph, Button } from "./styled";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      toAmount: amount * rate,
      currency,
      rate,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Kalkulator walutowy
        </Legend>
        <DateTime />
        <p>
          <Label>
            <Content>
              Wpisz kwotę*:
            </Content>
            <UniversalFormElement
              as="input"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              name="amount"
              step="0.01"
              min="0"
              autoFocus
              required
            ></UniversalFormElement>
          </Label>
        </p>
        <p>
          <Label>
            <Content>
              Waluta:
            </Content>
            <UniversalFormElement
              as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              name="currency"
            >
              {currencies.map(currency => (
                <option
                  key={currency.shortName}
                  value={currency.shortName}
                >
                  {currency.name}
                </option>
              ))}
            </UniversalFormElement>
          </Label>
        </p>
        <Paragraph centered>
          Aktualny kurs:
          <ResultRate result={result} />
        </Paragraph>
        <Button>Przelicz</Button>
        <Paragraph centered>
          Otrzymujesz:
          <ResultAmount result={result} />
        </Paragraph>
        <Paragraph fontSmall>
          Pola wymagane oznaczone są *
        </Paragraph>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;