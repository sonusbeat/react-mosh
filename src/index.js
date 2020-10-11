import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Counters />, document.getElementById("root"));

serviceWorker.unregister();
