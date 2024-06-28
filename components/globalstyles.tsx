import { createGlobalStyle } from "styled-components";
import LatoFont from "./fonts";

const GlobalStyle = createGlobalStyle`
    /* ${LatoFont}, */
   html,
   body {
      color: ${({ theme }) => theme.colors.primary};
      padding: 0;
      margin: 0;
      font-family: "Lato", sans-serif;
      font-style: normal;
   }

   a {
      color: inherit;
      text-decoration: none;
   }

   * {
      box-sizing: border-box;
   }
`;

export default GlobalStyle;