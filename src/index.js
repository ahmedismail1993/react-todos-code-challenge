import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./pages/index";
import ReduxProvider from "./redux/index";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <IndexPage />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
