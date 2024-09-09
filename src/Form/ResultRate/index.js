import { Content } from "../StyledResult";

const ResultRate = ({ result }) => (
    <Content>
        {result && (
            <>
                1 {result.currency} = {result.rate} PLN
            </>
        )}
    </Content>
);

export default ResultRate;