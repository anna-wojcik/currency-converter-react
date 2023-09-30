import "./style.css";

const ResultAmount = ({ result }) => (
    <span className="resultAmount">
        {result && <strong>
            {result.toAmount.toFixed(2)} PLN</strong>}
    </span>
);

export default ResultAmount;