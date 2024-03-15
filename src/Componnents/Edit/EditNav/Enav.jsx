import React from 'react'
import profile from '../../../asset/prof.svg';
import { Link } from 'react-router-dom';

const Enav = () => {
  return (
    <div>
          <nav className="navbar bg-transparent">
        <div className="container-fluid ">
          <div className='text-center ms-5 ps-lg-5   w-75'>
          <h4  >Email</h4>
          </div>
          <Link to="/profile">
          <div className="d-flex" >
            <img src={profile} alt="profile" title='profile' />
          </div>
          
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Enav