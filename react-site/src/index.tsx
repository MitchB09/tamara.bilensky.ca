import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Tamara Bilensky RMT</title>
      <meta name="robots" content="index, follow" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.dir);
