import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }

  body {
    background-color: #dce1df;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    outline: none;
  }
 
  input { 
    outline: none;
  }

  @font-face {
    font-family: 'Montserrat', sans-serif !important;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
}
`;

export default GlobalStyle;
