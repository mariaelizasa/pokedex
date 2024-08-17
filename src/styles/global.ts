import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  
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


`;

export default GlobalStyle;
