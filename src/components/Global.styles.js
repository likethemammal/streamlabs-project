import { css, Global, useTheme } from "@emotion/react";

const resetCSS = ({ theme }) => css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
  }

  body {
    font-family: ${theme.font.FAMILIES[0]};
    font-size: 16px;
    color: ${theme.colors.PRIMARY};
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
      color: inherit;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const globalCSS = ({ ...props }) => css`
  ${resetCSS(props)};
`;

const GlobalStyles = () => {
  const theme = useTheme();

  return <Global styles={globalCSS({ theme })} />;
};

export default GlobalStyles;
