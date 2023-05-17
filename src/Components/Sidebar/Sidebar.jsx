import { Navbar } from "../Navbar/Navbar";
import "./sidebar.scss";
import { Contact } from "../Contact/Contact";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="name-head">
        <h1 className="name">
          navdeep<span style={{ color: "#999999" }}>.</span>
        </h1>
        <Navbar />
      </div>
      <div className="sidebar--contact">
        <Contact />
      </div>
    </div>
  );
};
