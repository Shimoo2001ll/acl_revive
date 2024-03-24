import React, { useState } from 'react'
import InputP from '../InputP/InputP'
import BUtton from '../Button/Buutton'
// import TitleServ from '../TitleServ/Title'
import './InputData.css'
import { FaGoogleDrive } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const InputsData = (props) => {
  const [nameDOC, setNameDoc] = useState("")
  const [emailDOC, setEmailDoc] = useState("")
  const [numberDoc, setNumberDoc] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  // const [alert , setAlert] = useState("")
  const checkValue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{14}$/;
    if (name === "" || email === "" || number === "" || nameDOC === "" || emailDOC === "" || numberDoc === "") {
      toast.error("Please Fill all inputs in page (name ,mail,phone,....)")
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Please enter valid mail contain (@ , .com ) ')
      return false;
    }
    if (!phoneRegex.test(number)) {
      toast.error("phone number should be 14 character")
      return false;
    }


    return true
  }
  //  save data
  const saveValue = () => {

    if (checkValue()) {
      toast.success('Data saved successfully !!')
      
      return true
    }
    return false

  }
  //  send data
  const sendValue = () => {
    if (checkValue()) {
      toast.success('Data send successfully !!')
      return true
    }
    return false

  }

  return (
    <div className=' d-flex  justify-content-evenly  align-items-center '>
      <div className='Data  p-1'>
        <div className=' m-5 p-2 d-flex flex-wrap justify-content-between align-items-center'>
          <div className='REVTitle w-100  '>
            <h2>{props.title}</h2>
          </div>
          <div className='Doctor  '>
            <div className='w-100 '>
              <h4 className=' text-center '>Doctor's Card</h4>
              {/* <Link to="/add" className=' text-decoration-none '> */}
              <Link className=' text-decoration-none '>
                <InputP type="text" placeholder="Name" value={nameDOC} onChange={e => setNameDoc(e.target.value)} />
              </Link>
              <InputP type="email" placeholder="Email" value={emailDOC} onChange={e => setEmailDoc(e.target.value)} />
              <InputP type="number" placeholder="Phone" min="0" maxLength="14" value={numberDoc} onChange={e => setNumberDoc(e.target.value)} />
            </div>
          </div>
          <div className='patiant  '>
            <h4 className='text-center mb-3'>Patient's Card</h4>
            <InputP type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <InputP type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <InputP type="number" placeholder="Phone" min="0" maxLength="14" value={number} onChange={e => setNumber(e.target.value)} />
            <InputP type="number" placeholder="Age" min="0" max='70' maxLength="14" />
            <InputP type="text" placeholder="Result of scan" />
            <div className='w-100  mb-3  '>
              <label htmlFor="file1" className=' border bg-light p-2 w-100 rounded'>
                <input type='file' id="file1" hidden />
                <span className='text-muted'> <FaGoogleDrive /> Upload Mri Scan</span>
              </label>
            </div>
            <div className='w-100  mb-3  '>
              <label htmlFor="file" className=' border bg-light p-2 w-100 rounded'>
                <input type='file' id="file" hidden />
                <span className='text-muted'> <FaGoogleDrive /> Upload Report</span>
              </label>
            </div>
            <div className='w-100 d-flex  justify-content-center    align-items-center'>
              <BUtton name='Save' onClick={saveValue} />
              <BUtton name='Send' onClick={sendValue} />
            </div>

            <ToastContainer />

          </div>
        </div>

      </div>
    </div>
  )
}

export default InputsData