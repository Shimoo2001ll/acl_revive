import React from 'react';
import './HomeRid.css';
import acl from '../../asset/Acl Revive.svg';
import aclLegknee from '../../asset/Leg with knee pain.jpg';
import { Link } from 'react-router-dom';
import Logo from '../../asset/whitelogo.svg'
import profile from '../../asset/prof.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const HomeRid = () => {
  return (
    <> 
   
    <div className='mHome '>
  <Navbar expand="lg" className='nnavv ' >
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
      
            <div className='intro   mt-1 '>
                <div className='introtitle  rounded '>
                    <img src={acl} alt='acl-Head' className=' rounded ' />
                    <p className='text-light w-100 '>crucial step in regaining full knee function after an injury to this important ligament. The rehabilitation process typically consists of four phases:</p>
                </div>
                <div className='imgIntro text-center  d-none d-md-block d-lg-block d-xl-block d-xxl-block '>
                    <img src={aclLegknee} alt="aclLegknee" title='acl Leg knee with pain' />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeRid;