import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>
);
