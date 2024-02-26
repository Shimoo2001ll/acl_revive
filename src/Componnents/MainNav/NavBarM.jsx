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
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-10 justify-content-end">
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBarM