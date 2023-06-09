

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
          <Navbar.Brand >
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
              <Link
                href="/"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                  textDecoration: "none"
                }}
              >
                {" "}
                HOME{" "}
              </Link>
            </Nav>

            <Link
              href="/Search"
              style={{
                color:'black',
                fontFamily: "Sans-serif",
                fontSize: "15px",
                marginRight: "60px",
                textDecoration: "none",
              }}
            >
              {" "}
              SEARCH{" "}
            </Link>

                  {currentUser.id===0 && <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Link href="/login" style={{color:'black', fontFamily:"Sans-serif",fontSize:"15px",textDecoration: "none"}} >SIGN IN</Link>
                    <Link href="/signup" style={{ color:'black',fontFamily:"Sans-serif",fontSize:"15px" ,paddingLeft:"15px",textDecoration: "none"}} >SIGN UP</Link>
                  </div>}
                  {currentUser.id>0 && <Link href="/" style={{ color:'black',fontFamily:"Sans-serif",fontSize:"15px" ,textDecoration: "none"}} onClick={()=>logout()}>LOGOUT</Link>}
                  {currentUser.isAdmin===1 && <Link href="/addProduct" style={{ fontFamily:"Sans-serif",fontSize:"15px" ,paddingLeft:"15px",textDecoration: "none", color:"black"}} >Add Product</Link>}
                  {currentUser.id>0 && currentUser.isAdmin===0 && <Link href="/Cart"> <img src="https://cdn-icons-png.flaticon.com/512/118/118089.png" style={{marginRight:"70px", marginLeft:"80px",width:"30px",height:"30px"}}/></Link>}
                  {currentUser.id>0 && currentUser.isAdmin===1 && <Link href='/users' style={{ fontFamily:"Sans-serif",fontSize:"17px" ,paddingLeft:"15px", textDecoration: "none",color:"black"}} >Admin </Link>}
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
          )
}

  
export default NavBar

 
