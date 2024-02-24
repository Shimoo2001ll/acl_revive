import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../../../asset/logo.svg'
import profile from '../../../asset/profile.svg'

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-transparent">
        <div className="container-fluid">
        <img src={logo} alt="" />
          <div className="d-flex" >
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;