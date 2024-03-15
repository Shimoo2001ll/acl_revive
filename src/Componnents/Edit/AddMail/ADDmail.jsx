import React ,{useState}from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import Enav from '../EditNav/Enav'

const ADDmail = () => {
  const [mail ,setMail] = useState("")
  const check=(e)=>{
    if(mail===""){
  e.preventDefault()
swal.fire({
  title:`Fill The Input `,
  icon:"error",
})
}else{
  return ( <Link to="/varyEmail" className=' text-decoration-none  text-light '  >
  Verify
  </Link>)
}
  }
  return (
    <div>
     <Enav/>
      <div className='container  p-3 '>

      <div className='fw-bold fs-5 w-100  mb-4  mail '>
        <Form.Label htmlFor="mail">Email : </Form.Label>
            <Form.Control
              type="email"
              id="mail"
              className='mt-3 ps-3  '
              placeholder='Mehrabbozorgi.business@gmail.com'
              value={mail}
              onChange={e=>setMail(e.target.value)}
            />
           
        </div>
        <div className='text-center  w-100'> 

          
        <Link to="/varyEmail" onClick={check} className='btn w-100 text-decoration-none  text-light   '  >
        Verify
        </Link>
     
        </div>
      </div>
    </div>
  )
}

export default ADDmail