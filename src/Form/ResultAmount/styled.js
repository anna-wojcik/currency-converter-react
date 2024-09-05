import styled from "styled-components";

export const Content = styled.span`
    color: cadetblue;
    padding-left: 8px;

    @media(max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 0;
        padding-top: 10px;
    }
`;