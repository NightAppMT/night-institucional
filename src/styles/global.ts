import { createGlobalStyle } from "styled-components";
import "@fontsource/barlow";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Barlow';
  }
`;
export default GlobalStyle;
