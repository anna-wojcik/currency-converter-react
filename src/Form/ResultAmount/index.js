import { Content } from "../styledResult";

const ResultAmount = ({ result }) => (
    <Content>
        {result && <strong>
            {result.toAmount.toFixed(2)} PLN</strong>}
    </Content>
);

export default ResultAmount;