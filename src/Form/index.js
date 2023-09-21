import "./style.css";

const Form = () => (
    <form>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walutowy</legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Wpisz kwotę*:
                    </span>
                    <input className="form__field" type="number" name="amount" step="0.01"
                        min="0" required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select className="form__field" name="currency">
                        <option value="EUR">EUR - Unia Europejska</option>
                        <option value="USD">USD - USA</option>
                        <option value="GBP">GBP - W. Brytania</option>
                        <option value="CHF">CHF - Szwajcaria</option>
                        <option value="AUD">AUD - Australia</option>
                    </select>
                </label>
            </p>
            <p>Aktualny kurs:<span className="form__paragraph--course"></span>
            </p>
            <button className="form__button">Przelicz</button>
            <p className="form__paragraph--centered">Otrzymujesz:<span></span> PLN.
            </p>
            <p className="form__paragraph--fontSmall">Pola wymagane oznaczone są *</p>
        </fieldset>
    </form>
);

export default Form;