import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import bg1 from "./assets/bg1.jpg";
import { WelcomePage } from "./Components/Welcome/Welcome";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundPosition: "100px",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
            className="wrap"
          >
            <div
              style={{
                position: "absolute",
              }}
              className="overlay"
            ></div>
            <WelcomePage />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
