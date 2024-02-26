import React from 'react'
import'./ForgetPass.css'
import imgforget from'../../asset/ForgetPass.svg'



const ForgetImg = () => {
  return (
    <div> <div  className='container mt-4 d-none d-lg-block d-xl-block'>
    <img className='image' src={imgforget} alt="forget password"  />
</div>

</div>
  )
}

export default ForgetImg