import React, { useEffect, createContext, useState, useMemo } from "react";

import { useTheme } from "@emotion/react";

export default function Provider() {
  const theme = useTheme();

  const { font } = theme;

  const WebFontLoader = useMemo(() => {
    return require("webfontloader");
  }, []);

  useEffect(() => {
    if (!WebFontLoader) {
      return;
    }

    WebFontLoader.load({
      google: {
        families: [...font.FAMILIES]
      }
    });
  }, [WebFontLoader, font.FAMILIES]);

  return <></>;
}
