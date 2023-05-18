import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


const Sidebar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <img
        src="https://icon-library.com/images/sidebar-icon/sidebar-icon-16.jpg"

        style={{marginLeft: "30px", width: "30px", height: "30px" }}

        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />

      {sidebarVisible && (
        <div className="sidebar sidebar-vertical"
       

          
        >
          <ul className="nav flex-column">
          <li className="nav-item">
            <Nav.Link href="/clothes"
              style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
              
              >All
              </Nav.Link>
            </li>
            <li className="nav-item">

              <Nav.Link
                href="/kids"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Kids

              </Nav.Link>
            </li>
            <li className="nav-item">
            <Nav.Link href="/women"
               
               style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
               >Women
               </Nav.Link>
               <Nav.Link href="/Men"
               
               style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
               >Men
               </Nav.Link>
              

            </li>
            <li className='nav-item'>
              <Nav.Link
                href="/beauty"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Beauty
              </Nav.Link>

            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
