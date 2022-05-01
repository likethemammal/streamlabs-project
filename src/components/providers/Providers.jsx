import ThemeProvider from "./ThemeProvider";
import WebFontProvider from "./WebFontProvider";
import GlobalStyles from "../Global.styles";

export default function Providers({ children }) {
  const theme = {
    font: {
      FAMILIES: ["Roboto"]
    },
    colors: {
      PRIMARY: "green",
      BACKGROUND: "hsl(0, 0%, 90%)",
      BORDER: "hsl(100, 0, 90%)"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <WebFontProvider />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
