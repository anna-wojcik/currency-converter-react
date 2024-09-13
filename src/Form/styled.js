import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
    border: none;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileSpecial}px){
        flex-direction: column;
    }
`;

export const Content = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const UniversalFormElement = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    padding: 6px;
    width: 100%;
    max-width: 200px;
`;

export const Paragraph = styled.p`
    ${({ colorCadetBlue }) => colorCadetBlue && css`
        color: ${({theme}) => theme.color.cadetblue}
    `}

    ${({ colorRed }) => colorRed && css`
        color: ${({theme}) => theme.color.red}
    `}

    ${({ centered }) => centered && css`
        padding: 10px;
        text-align: center;
    `}

    ${({ fontSmall }) => fontSmall && css`
        font-size: 14px;
        color: ${({ theme }) => theme.color.scorpion};
    `}
;`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.cadetblue};
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 10px;
    padding: 10px 60px;
    display: block;
    margin: 0px auto;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;