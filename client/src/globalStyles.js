import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f3f3f3;
        font-family: 'Roboto', sans-serif;
    }

    @page {
        margin: 1in;
    }

    @media print {
        body {
            background-color: none;
        }
    }
`;

export default GlobalStyle;
