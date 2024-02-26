import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../asset/whitelogo.svg'
import'./NavBarM.css'

function NavBarM  () {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className='col-6'>
            <img src={Logo} alt="" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav col-10 justify-content-end">
              <li className="nav-item"> 
                <Link  className='nav-link text-light' to="HomeRid">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="scan">Scan</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="Report">Report</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="Patiant">Patiant</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-light' to="Services">Services</Link>
              </li>
              <li className="nav-item">
         
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBarM