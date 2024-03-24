import React, { useState } from 'react'
import Enav from '../EditNav/Enav'
import Form from 'react-bootstrap/Form';
import swal from "sweetalert2";
import {   toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast';

const EditPass = () => {
  const[pass,setPass] = useState('')
  const[newpass,setNewPass] = useState('')
  const[confirm,setConfirm] = useState('')
  const[alertpass,setAlert] = useState(false)
 

  const alert =(e)=>{
    e.preventDefault()
if(pass ===""||newpass ==="" ||confirm===""){
 swal.fire({
title:"Please Fill The Inputs",
icon:"error",
timer:3000,
confirmButtonText:"Ok ",
confirmButtonColor: "rgba(7, 104, 159, .8)"

 })
}
newPassChecker()
// passLength()

}
// check new pass lleghth and be duplicated with confirm

function newPassChecker(){
  if( pass !=="" && newpass !=="" && confirm !=="" &&  pass!== newpass && newpass === confirm ){
    swal.fire({
      title:"Password Changed Successfully",
      icon:"success",
      timer:3000,
      confirmButtonText:"Submit ",
      confirmButtonColor: "rgba(7, 104, 159, .8)"
      
       })
  }
  
  if( pass !=="" && newpass !=="" && confirm !=="" &&  newpass !== confirm ){
    swal.fire({
      title:"Confirm should equal the New password ",
      icon:"error",
      timer:5000,
      confirmButtonColor: "rgba(7, 104, 159, .8)",
      confirmButtonText:"Ok",
      
       })
  }
  if(pass !=="" && newpass !=="" && confirm !=="" && pass === newpass){
    swal.fire({
      title:"New Password must not equal the Old Password",
      icon:"error",
      timer:3000,
      confirmButtonColor: "rgba(7, 104, 159, .8)",
      confirmButtonText:"Ok",
      
       })
  }
  if (newpass.length < 8) {
    toast.error('Passward must be at least 8 characters long')
    return;
}
}




  return (
    <div>
     <Enav/>
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
  {alertpass && setAlert(<p className='alert alert-danger  m-2'>Pass length should be more than 8 characters</p>)}
  <div>

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
      <Toaster/>
    </div>
  )
}

export default EditPass