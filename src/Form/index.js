import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walutowy</legend>
        <p>
          <label>
            <span className="form__labelText">
              Wpisz kwotę w zł*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
              type="number"
              name="amount"
              step="0.01"
              min="0"
              autoFocus
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__field"
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
            </select>
          </label>
        </p>
        <p>
          Aktualny kurs:<span className="form__paragraph--course"></span>
        </p>
        <button className="form__button">Przelicz</button>
        <p className="form__paragraph--centered">
          Otrzymujesz:<span></span> PLN.
        </p>
        <p className="form__paragraph--fontSmall">Pola wymagane oznaczone są *</p>
      </fieldset>
    </form>
  );
};

export default Form;