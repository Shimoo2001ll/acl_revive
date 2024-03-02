import React from 'react';
import'./Scan.css';
import mri from'../../asset/sMri.svg';
import {FaArrowAltCircleDown} from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Sclice = () => {
  return (
    <>
    <div className='Slice   '>
    <div className='list d-flex  justify-content-center  align-items-center '>
      <Link to="/Scan" className='num text-dark text-decoration-none  d-flex  justify-content-center  align-items-center'>1</Link>
      <Link to="/upload2" className='num text-dark text-decoration-none d-flex  justify-content-center  align-items-center'>2</Link>
      <Link to="/upload3" className='num text-dark text-decoration-none d-flex  justify-content-center  align-items-center'>3</Link>
    </div>
    <div className='mri'>
    <div className=''>
    <img src={mri} alt=""/>
    </div>
    <div className=''>
    <img src={mri} alt="" />
    </div>
    <div className=''>
    <img src={mri} alt=""  />
    </div>
    </div>
    <div>
    <small className='text-muted fw-bold'>More <span > <FaArrowAltCircleDown/> </span></small>
    </div>
        </div></>
  )
}

export default Sclice