import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.scorpion};
    font-family: ${({ theme }) => theme.font.ubuntuMono}, sans-serif;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
    margin-bottom: 30px;
`;