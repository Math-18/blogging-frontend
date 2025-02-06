import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: black; 
    color: white; 
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    height: 100%;
    background-color: black; 
    display: flex;
    flex-direction: column;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }
`;

export default GlobalStyle;
