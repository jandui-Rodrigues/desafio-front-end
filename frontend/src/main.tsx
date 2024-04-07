import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.tsx";
import GlobalStyle from "./style/GlobalStyle.style.tsx";
import { EmployeesProvider } from "./context/Employees.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EmployeesProvider>
        <App />
      </EmployeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
