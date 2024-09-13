import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 600px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 30px ${({ theme }) => theme.color.black};
    border-radius: 10px;
    padding: 30px;
    margin: 10px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileSpecial}px){
        width: 90%;
    }
`;