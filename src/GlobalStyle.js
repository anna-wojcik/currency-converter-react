import { createGlobalStyle } from "styled-components";
import background from "./background-image.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.font.lato}, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
    }   
`;
