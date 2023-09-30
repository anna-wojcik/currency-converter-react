import "./style.css";

const ResultRate = ({ result }) => (
    <span className="resultRate">
        {result && (
            <>
                1 {result.currency} = {result.rate} PLN
            </>
        )}
    </span>
);

export default ResultRate;