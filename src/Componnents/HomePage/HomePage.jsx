import React from 'react'
import NavBar from './NavBar/NavBar'
import orth from '../../asset/Orth role.svg'
import rid from '../../asset/Red role.svg'
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='main p-4 text-capitalize'>
            <NavBar />
            <div className='p-2 m-3'>
                <h4>What role do you have?</h4>
                <small className='text-muted'>to start your project we need to customize your prefrances.
                    <br /> please , select your user type.</small>
            </div>
            <div className='role container text-center d-flex flex-wrap  justify-content-center align-item-center '>
                <Link to="/signup" className=' text-decoration-none text-dark  '>
                    <div className='orole  text-center  shadow rounded fw-bold'>
                        <div> <img src={orth} alt="otorpedist" /></div>
                        <div>  otorpedist</div>
                    </div>
                </Link>

                <Link to="/login"  className=' text-decoration-none text-dark   '>
                    <div className='orole  text-center  shadow rounded fw-bold'>
                        <div className='p-2  d-flex justify-content-center align-items-center  ' ><img src={rid} alt="Radiology" className='w-100' /></div>
                        <div> Radiology Center  </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage