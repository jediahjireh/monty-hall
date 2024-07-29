// import react and component from react library
import React from "react";
// import react-dom to render the component
import ReactDOM from "react-dom";

// import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// import custom CSS file
import "./custom.css";

// import App component from respective file
import App from "./components/App";

// obtain root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// render App component inside root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
