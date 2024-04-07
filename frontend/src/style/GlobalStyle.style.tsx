import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        background: ${theme.colors.gray_00};
        color: ${theme.colors.black};
        padding-bottom: 5rem;
    }
    html {
        font-size: 62.5%;
    }
    `;

export default GlobalStyle;
