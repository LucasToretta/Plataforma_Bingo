import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
    font-family: Arial, sans-serif;

    background:
        linear-gradient(
        135deg,
        #020617 0%,
        #07152b 35%,
        #0b1f3a 60%,
        #020617 100%
        );

    color: #fff;

    min-height: 100vh;
    }
    button {
        cursor: pointer;
        font-family: inherit;
    }
    `