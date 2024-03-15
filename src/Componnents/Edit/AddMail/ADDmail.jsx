import React from 'react'
import profile from '../../../asset/prof.svg'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const ADDmail = () => {
  return (
    <div>
          <nav className="navbar bg-transparent">
        <div className="container-fluid ">
          <div className='text-center  w-75'>
          <h4  >Email</h4>
          </div>
          <div className="d-flex" >
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>
      <div className='container  p-3 '>

      <div className='fw-bold fs-5 w-100  mb-4  mail '>
        <Form.Label htmlFor="mail">Email : </Form.Label>
            <Form.Control
              type="email"
              id="mail"
              className='mt-3 ps-3  '
              placeholder='Mehrabbozorgi.business@gmail.com'
            />
           
        </div>
        <div className='text-center  w-100'> 

        <Link to="/varyEmail" className='btn w-100 '>
        Verify
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ADDmail