import "./style.css";

const ResultAmount = ({ result }) => {
    return (
        <span className="result--amount">
            {result && (
                <>
                    <strong
                        >{result.toAmount.toFixed(2)} PLN
                    </strong>
                </>
            )}
        </span>
    )
};

export default ResultAmount;