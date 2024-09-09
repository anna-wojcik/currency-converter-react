import { Content } from "../StyledResult";

const ResultAmount = ({ result }) => (
    <Content>
        {result && <strong>
            {result.toAmount.toFixed(2)} PLN</strong>}
    </Content>
);

export default ResultAmount;