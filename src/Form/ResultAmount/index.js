import { Content } from "./styled";

const ResultAmount = ({ result }) => (
    <Content>
        {result && <strong>
            {result.toAmount.toFixed(2)} PLN</strong>}
    </Content>
);

export default ResultAmount;