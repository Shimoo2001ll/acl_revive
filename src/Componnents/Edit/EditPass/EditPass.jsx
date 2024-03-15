import React, { useState } from 'react'
import profile from '../../../asset/prof.svg'
import Form from 'react-bootstrap/Form';
import swal from "sweetalert2";

const EditPass = () => {
  const[pass,setPass] = useState('')
  const[newpass,setNewPass] = useState('')
  const[confirm,setConfirm] = useState('')
  const alert =(e)=>{
    e.preventDefault()
if(pass ==="" || newpass ==="" ||confirm===""){
 swal.fire({
title:"Please Fill The Inputs",
icon:"error",
timer:3000,
confirmButtonText:"Ok ",

 })
}else{
  swal.fire({
    title:"Password Changed Successfully",
    icon:"success",
    timer:3000,
    confirmButtonText:"Submit ",
    
     })
}
  }
  return (
    <div>
      <nav className="navbar bg-transparent">
        <div className="container-fluid ">
          <div className='text-center ms-5 ps-lg-5 
            w-75'>
            <h4  >Password</h4>
          </div>
          <div className="d-flex" >
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>
      <div className='container  p-3 '>

<div className='fw-bold fs-5 w-100  mb-4  mail '>
  <Form.Label htmlFor="old">Enter Old Password : </Form.Label>
      <Form.Control
        type="password"
        id="old"
        className='mt-3 ps-3  '
        placeholder='**************************************'
        value={pass}
        onChange={e=>setPass(e.target.value)}
      />
     
  </div>
<div className='fw-bold fs-5 w-100  mb-4  mail '>
  <Form.Label htmlFor="new">Enter New Password : </Form.Label>
      <Form.Control
        type="password"
        id="new"
        className='mt-3 ps-3  '
        placeholder='**************************************'
        value={newpass}
        onChange={e=>setNewPass(e.target.value)}
      />
     
  </div>
<div className='fw-bold fs-5 w-100  mb-4  mail '>
  <Form.Label htmlFor="confirm">Enter Confirm Password : </Form.Label>
      <Form.Control
        type="password"
        id="confirm"
        className='mt-3 ps-3  '
        placeholder='**************************************'
        value={confirm}
        onChange={e=>setConfirm(e.target.value)}
      />
     
  </div>
  <div className='text-center  w-100'> 

  <button onClick={alert}  className='btn w-100 '>
  Submit
  </button>
  </div>
      </div>
    </div>
  )
}

export default EditPass