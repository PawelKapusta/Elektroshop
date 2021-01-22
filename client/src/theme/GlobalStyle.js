import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background: #D9D9D9;
    background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);
    background: linear-gradient(to right, #E0E0E0, #A0A0A0);
    

  }
`;

export default GlobalStyle;
