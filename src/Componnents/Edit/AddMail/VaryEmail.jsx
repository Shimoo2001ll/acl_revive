import React from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2'

const VaryEmail = () => {
  const varify=()=>{
    swal.fire({
      title:"Email changed Successfully",
      icon:"success"
    })
  }
  return (
    <div className='verify'>
        <div  className='via container m-2 p-5 text-center'>
          <h3 className='m-5 p-5'>E-mail Verification</h3>
          <h4>Verify </h4>
          <span className='container p-5 text-muted d-flex  justify-content-center  align-items-center  '>
          Please enter the code we sent you to email  </span>
         <div className='text-start p-3 m-3 '>
       <form action="" className='=d-flex  justify-content-center  align-items-center  text-center'>
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
<input className='border border-secondary  rounded m-1 p-2  ' type="number" name="" id="" />
       </form>
       <div className='text-center m-2 mt-3'>
        <span className=' text-muted '>Didn’t Receive the Code ?</span>
        <div>   
        <button className='p-2 fw-bold  border-0  bg-transparent '>Resend Code</button>
        </div>
       </div>
         </div>
       
           <Link onClick={varify} className='btn w-75 rounded  rounded-3  ' >Varify</Link>
        </div>
    </div>

  )
}

export default VaryEmail