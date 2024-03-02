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
    <Navbar expand="lg" className="bg-transparent  ">
      <Container>
        <Navbar.Brand href="#home"> <div className='col-6'>
          <Link to='/HomeRid' className=' text-decoration-none '>
          
          <img src={Logo} alt="" />
          </Link>
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link text-dark' to="/HomeRid">Home</Link>
            <Link className='nav-link text-dark' to="/scan">Scan</Link>
            <Link className='nav-link text-dark' to="/Report">Report</Link>
            <Link className='nav-link text-dark' to="/Patiant">Patiant</Link>
            <Link className='nav-link text-dark' to="/Services">Services</Link>
            <Link className='nav-link  w-25 ' to="/profile"><img src={profile} alt="profile" title="profile" /></Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;


