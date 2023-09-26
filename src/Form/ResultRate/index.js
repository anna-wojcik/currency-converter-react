import "./style.css";

const ResultRate = ({ result }) => {
    return (
        <span className="result--rate">
            {result && (
                <>
                    1 {result.currency} = {result.rate} PLN
                </>
            )}
        </span>
    )
};

export default ResultRate;