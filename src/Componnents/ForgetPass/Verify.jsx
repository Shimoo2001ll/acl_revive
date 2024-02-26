import React from 'react'
import ForgetImg from './ForgetImg'
import {Link} from 'react-router-dom'
import './ForgetPass.css'

const Verify = () => {
  return (
    <div className='verify'>
        <ForgetImg />
        <div  className='via container m-2 p-5 text-center'>
          <h3 className='m-5 p-5'>Forget Password</h3>
          <h4>Verify </h4>
          <span className='container p-5 text-muted d-flex  justify-content-center  align-items-center  '>
          Please enter the code we sent to you 
          </span>
         <div className='text-start p-3 m-3'>
       <form action="" className='container text-center'>
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
       </form>
         </div>
       
           <Link className='btn w-75 rounded  rounded-3  ' to="/newpass" >Varify</Link>
        </div>
    </div>
  )
}

export default Verify