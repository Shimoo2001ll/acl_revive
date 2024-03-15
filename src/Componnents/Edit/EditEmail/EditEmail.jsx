import React from 'react';
import profile from '../../../asset/prof.svg';
import './EditEmail.css';
import { Link } from 'react-router-dom';

const EditEmail = () => {
  return (
    <div>
        <nav className="navbar bg-transparent">
        <div className="container-fluid ">
          <div className='text-center ms-5 ps-lg-5   w-75'>
          <h4  >Email</h4>
          </div>
          <div className="d-flex" >
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>

      <div className='container mt-5 p-3'>
        <span className=' text-secondary m-3 '>Mehrabbozorgi.business@gmail.com</span>
        <div className=' m-2 p-2 border rounded d-flex  justify-content-between  align-items-center '> 
<div className='ms-4'>Change Mail </div>
<div>
  <Link to="/ADDmail">
 
    <button className='addMail'>+</button>
  </Link>
</div>
        </div>
      </div>
    </div>
  )
}

export default EditEmail