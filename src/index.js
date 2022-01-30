import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const ReactDOM = require("react-dom");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
