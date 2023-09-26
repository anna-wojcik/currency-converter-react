const ResultAmount = ({ result }) => {
    return (
        <span>
            {result && (
                <>
                    <strong
                        > {result.toAmount.toFixed(2)} PLN
                    </strong>
                </>
            )}
        </span>
    )
};

export default ResultAmount;