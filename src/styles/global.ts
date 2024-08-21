import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
   font-family: "Silkscreen", sans-serif !important;
   
 
  }

  body {
    margin: 0;
  padding: 0;
  height: 100vh; 
  background: url('/background.png') no-repeat center center fixed;
  background-size: cover; 
 
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
