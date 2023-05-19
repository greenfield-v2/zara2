

import React, { useContext } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './Sidebar';
import { Context } from '../Context';

const NavBar = () => {
  const {logout ,currentUser}=useContext(Context)
  console.log(currentUser)
  return (
    <div>
      <Navbar bg="white" expand="lg" variant="light" className="navbares">
        <Sidebar />
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
              style={{ marginLeft: "100px", width: "200px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/*When the user clicks on the Link */}
              <Nav.Link
                href="/"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                {" "}
                HOME{" "}
              </Nav.Link>
            </Nav>

            <Nav.Link
              href="/Search"
              style={{
                fontFamily: "Sans-serif",
                fontSize: "15px",
                marginRight: "60px",
                textDecoration: "underline",
              }}
            >
              {" "}
              SEARCH{" "}
            </Nav.Link>

                  {currentUser.id===0 && <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Nav.Link href="/login" style={{ fontFamily:"Sans-serif",fontSize:"15px"}} >LOG IN</Nav.Link>
                    <Nav.Link href="/signup" style={{ fontFamily:"Sans-serif",fontSize:"15px"}} >SIGN UP</Nav.Link>
                  </div>}
                  {currentUser.id>0 && <Nav.Link href="/" style={{ fontFamily:"Sans-serif",fontSize:"15px"}} >LOGOUT</Nav.Link>}
                  <img src="https://cdn-icons-png.flaticon.com/512/118/118089.png" style={{marginRight:"70px", marginLeft:"80px",width:"30px",height:"30px"}}/>

                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
          )
}

  
export default NavBar

 
