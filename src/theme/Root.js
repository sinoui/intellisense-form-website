import React from "react";
import { defaultTheme } from "@sinoui/theme";
import { ThemeProvider } from "styled-components";

const Root = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Root;
