import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import bg1 from "./assets/images/bg1.jpg";
import { WelcomePage } from "./Components/Welcome/Welcome";
import { Bars } from "./Components/Navbar/NavElements";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
            className="wrap"
          >
            <div className="overlay"></div>
            <WelcomePage />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
