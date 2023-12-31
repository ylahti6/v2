import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/variable.css";
import App from "./App";
import Content from "./Content";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Writing from "./Sections/Writing";
import Footer from "./Sections/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="wrap">
      <App />
      <Content>
        <About />
        <Work />
        {/* <Writing /> */}
        <Footer />
      </Content>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
