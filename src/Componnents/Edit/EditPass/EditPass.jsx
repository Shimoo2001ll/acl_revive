import React, { useState } from 'react'
import Enav from '../EditNav/Enav'
import Form from 'react-bootstrap/Form';
import swal from "sweetalert2";

const EditPass = () => {
  const[pass,setPass] = useState('')
  const[newpass,setNewPass] = useState('')
  const[confirm,setConfirm] = useState('')
  // const[passCond,setpassCond] = useState(false)

  const alert =(e)=>{
    e.preventDefault()
if(pass ===""||newpass ==="" ||confirm===""){
 swal.fire({
title:"Please Fill The Inputs",
icon:"error",
timer:3000,
confirmButtonText:"Ok ",

 })
}
newPassChecker()

}
// check new pass lleghth and be duplicated with confirm

function newPassChecker(){
  if( pass !=="" && newpass !=="" && confirm !=="" &&  pass!== newpass && newpass === confirm ){
    swal.fire({
      title:"Password Changed Successfully",
      icon:"success",
      timer:3000,
      confirmButtonText:"Submit ",
      
       })
  }
  
  if( pass !=="" && newpass !=="" && confirm !=="" &&  newpass !== confirm ){
    swal.fire({
      title:"New password not equal the confirm",
      icon:"error",
      timer:2000,
      confirmButtonText:"Ok",
      
       })
  }
  if(newpass !== confirm){
    swal.fire({
      title:"New password not equal the confirm",
      icon:"error",
      timer:2000,
      confirmButtonText:"Ok",
      
       })
  }
  if(pass !=="" && newpass !=="" && confirm !=="" && pass === newpass){
    swal.fire({
      title:"Old Password must not equal the New Password",
      icon:"error",
      timer:2000,
      confirmButtonText:"Ok",
      
       })
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
  <div>
    {/* {passCond && setpassCond(<p className='alert alert-danger m-2'> password should be more than 8 character </p>)} */}
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