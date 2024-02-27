import React from 'react';
import './NavBarM.css'
import { Link } from 'react-router-dom';
import Logo from '../../asset/whitelogo.svg'
import profile from '../../asset/prof.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"> <div className='col-6'>
          <img src={Logo} alt="" />
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link text-light' to="/HomeRid">Home</Link>
            <Link className='nav-link text-light' to="/scan">Scan</Link>
            <Link className='nav-link text-light' to="/Report">Report</Link>
            <Link className='nav-link text-light' to="/Patiant">Patiant</Link>
            <Link className='nav-link text-light' to="/Services">Services</Link>
            <Link className='nav-link text-light w-25 ' to="/profile"><img src={profile} alt="" /></Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;


