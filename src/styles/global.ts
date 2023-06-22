import { createGlobalStyle } from "styled-components";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/800.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Barlow';
    .bold{
      font-weight: bold;
    }
  }
`;
export default GlobalStyle;
