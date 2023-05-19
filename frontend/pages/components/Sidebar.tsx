import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

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
            <Link href="/clothes"
              style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
              
              >All
              </Link>
            </li>
            <li className="nav-item">

              <Link
                href="/kids"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Kids

              </Link>
            </li>
            <li className="nav-item">
            <Link href="/women"
               
               style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
               >Women
               </Link>
               <Link href="/Men"
               
               style={{color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}
               >Men
               </Link>
              

            </li>
            <li className='nav-item'>
              <Link
                href="/beauty"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                Beauty
              </Link>

            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
