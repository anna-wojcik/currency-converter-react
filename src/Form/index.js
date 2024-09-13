import { useState } from "react";
import { currencies } from "../currencies";
import ResultRate from "./ResultRate";
import ResultAmount from "./ResultAmount";
import { Fieldset, Label, Content, UniversalFormElement, Paragraph, Button } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const {
    isLoading,
    error,
    ratesData,
    fullData
  } = useRatesData();

  const handleData = () => {
    const formatedData = new Date(fullData);
    const year = formatedData.toLocaleDateString("pl-PL", { year: "numeric" });
    const month = formatedData.toLocaleDateString("pl-PL", { month: "2-digit" });
    const day = formatedData.toLocaleDateString("pl-PL", { day: "2-digit" });

    return `${year}-${month}-${day}`;
  };

  const objectCurrencies = ratesData ? ratesData.data : null;
  let currencies = [];
  let rates = [];
  for (let currency in objectCurrencies) {
    currencies = [...currencies, objectCurrencies[currency].code];
    rates = [...rates, objectCurrencies[currency].value];
  }

  const calculateResult = () => {
    const index = currencies.findIndex(name => name === currency);
    const rate = rates.at(index);

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

  if (isLoading) {
    return (
      <Paragraph colorCadetBlue>
        Sekundka...
        <br />
        Ładuję kursy walut z Europejskiego Banku Centralnego...😎
      </Paragraph>
    )
  } else if (error) {
    return (
      <Paragraph colorRed>
        Hmm.. Coś poszło nie tak 😯 Sprawdź, czy masz połączenie z internetem.
        <br />
        Jeśli masz... to wygląda na to, że to nasza wina. Możesz spróbować później?
      </Paragraph>
    )
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <p>
          <Label>
            <Content>
              Wpisz kwotę w zł*:
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
              {Object.keys(objectCurrencies).map(name => (
                <option
                  key={name}
                  value={name}
                >
                  {name}
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
        <Paragraph fontSmall centered>
          Kursy walut pobierane są z Europejskiego Banku Centralnego.
          <br />
          Aktualne na dzień: <b>{handleData()}</b>
        </Paragraph>
      </Fieldset>
    </form>
  );
};

export default Form;