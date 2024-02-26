import React from 'react'
import './ForgetPass.css'
import message from '../../asset/message fill.svg'
import fill_evelop from '../../asset/mail-fill.svg'
import ForgetImg from './ForgetImg'
import {Link} from 'react-router-dom'

const ForgetPass = () => {
  return (
    <div className='container forget'>
        <ForgetImg/>
        <div  className='via container m-4 p-5 text-center'>
          <h3 className='m-5 p-5'>Forget Password</h3>
          <span className='container p-5 text-dark '>
          Where would you like to receive a 
             Verification Code ?
          </span>
         <div className='message  d-flex justify-cotent-center align-items-center  border border-secondary  rounded text-start p-3 m-3'>
          <div>
          <img src={message} alt="" />
          </div>
          <div className='container text-center '>
<div className='text-muted fs-6 '>via SMS</div>
<div className='p-2'>
+1 123********99
</div>
          </div>
         </div>
         <div className='email d-flex justify-cotent-center align-items-center  border border-secondary  rounded text-start p-3 m-3'>
         <div>
          <img src={fill_evelop} alt="" />
         </div>
          <div className='container text-center '>
<div className='text-muted fs-6 '>via Email</div>
<div className='p-2'>
lauran****@email.com
</div>
          </div>
         </div>
           <Link className='btn w-75 rounded  rounded-3  ' to="/varify" >Next</Link>
        </div>

    </div>
  )
}

export default ForgetPass