import React from "react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
