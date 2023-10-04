import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-white: #FFFFFF;

        --color-azure: #F2FDFF;
        --color-oxfordBlue: #101935;
        --color-darkBrown: #2D3319;
        --color-hookersGreen: #517664;
        --color-maize: #FDE74C;

        --color-black: #121212;
        --color-blackMedium: #4A4A4A;
        --color-blackClaro: #5C5C5C;
        --color-blackTenue: #9E9E9E;

        --color-grayBase: #c2c2c2;
        --color-grayMedium: #e5e5e5;
        --color-grayClaro: #f5f5f5;

        --color-errorBase: #c62828;
        --color-errorMedium: #E53935;
        --color-errorClaro: #fce7e7;

        --font-size-titleBig: 3.75rem;
        --font-size-titleMedium: 2.875rem;
        --font-size-titleSmall: 2.188rem;

        --font-size-bodyBig: 1.688rem;
        --font-size-bodyMedium: 1.125rem;
        --font-size-bodySmall: 1rem;
        --font-size-bodySmaller: 0.875rem;
    }

    *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    font-size: 16px;
    ${"" /* background-color: var(--color-black); */}
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
