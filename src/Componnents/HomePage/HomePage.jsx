import React from 'react'
import NavBar from './NavBar/NavBar'
import orth from '../../asset/Orth role.svg'
import rid from '../../asset/Red role.svg'
import'./HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='main p-4 text-capitalize'>
       <NavBar/>
        <div className='p-2 m-3'>
            <h4>What role do you have?</h4>
            <small  className='text-muted'>to start your project we need to customize your prefrances.
            <br/> please , select your user type.</small>
        </div>
       <div className='role container text-center d-flex flex-wrap  justify-content-center align-item-center '>
        <div className='orole  text-center  shadow rounded fw-bold'>
            <div>
                <Link to="/signup">

            <img src={orth} alt="" />
                </Link>
            </div>
            <div>
                otorpedist
            </div>
        
        </div>
        <div className='orole  text-center  shadow rounded fw-bold'>
            <div >
                <Link to="/login">
                
            <img src={rid} alt=""  />
                </Link>
            </div>
            <div>
                Radiology Center
            </div>
        </div>
       </div>
    </div>
  )
}

export default HomePage