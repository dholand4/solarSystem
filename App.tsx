import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <StatusBar backgroundColor="#0f0f0f" style="light" />
      <Routes />
    </ThemeProvider>
  );
}