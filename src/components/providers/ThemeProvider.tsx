import React, { useEffect, createContext, useState } from "react";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export default function ThemeProvider({
  children,
  theme = {}
}: {
  children?: React.ReactElement;
  theme?: any;
}): JSX.Element {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
