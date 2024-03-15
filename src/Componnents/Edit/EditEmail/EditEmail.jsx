import React from 'react';
import Enav from '../EditNav/Enav'
import './EditEmail.css';
import { Link } from 'react-router-dom';

const EditEmail = () => {
  return (
    <div>
      
<Enav/>
      <div className='container mt-5 p-3'>
        <span className=' text-secondary m-3 '>Mehrabbozorgi.business@gmail.com</span>
        <div className=' m-2 p-2 border rounded d-flex  justify-content-between  align-items-center '> 
<div className='ms-4'>Change Mail </div>
<div>
  <Link to="/ADDmail">
 
    <button className='addMail me-5 pe-5 fw-bold' title="Add Email">+</button>
  </Link>
</div>
        </div>
      </div>
    </div>
  )
}

export default EditEmail