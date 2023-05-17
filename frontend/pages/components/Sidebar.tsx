import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

const Sidebar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <img
        src="https://icon-library.com/images/sidebar-icon/sidebar-icon-16.jpg"
        style={{ marginLeft: "100px", width: "50px", height: "50px" }}
        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />

      {sidebarVisible && (
        <div className="sidebar sidebar-vertical">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link
                href="/Kidz"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Kidz
              </Nav.Link>
            </li>
            <li className="nav-item">
            <Nav.Link href="/Adult"
               
               style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
               >Adult
               </Nav.Link>
               <li className="nav-item">
            <Nav.Link href="/clothes"
              style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
              
              >All
              </Nav.Link>
            </li>
              <Nav.Link
                href="/Adult"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Adult
              </Nav.Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
