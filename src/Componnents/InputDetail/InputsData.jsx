import React from 'react'
import InputP from '../InputP/InputP'
import  BUtton  from '../Button/Buutton'
// import TitleServ from '../TitleServ/Title'
import './InputData.css'
import { FaGoogleDrive } from 'react-icons/fa'


const InputsData = (props) => {
  return (
    <div className='Data pt-2'>
          <div className='container'>  
        <div className=' d-flex flex-wrap justify-content-evenly    align-items-center  '>
        <div className='Doctor m-2 me-5'>
        <div className='REVTitle '>
        <h2>{props.title}</h2>
        </div>
            <h4>Doctor's Card</h4>
<InputP type="text" placeholder="Name" />
<InputP type="email" placeholder="Email" />
<InputP type="number" placeholder="Phone" />
        </div>
        <div className='patiant mt-5 me-5 '>
            <h4>Patient's Card</h4>
<InputP type="text" placeholder="Name" />
<InputP type="email" placeholder="Email" />
<InputP type="number" placeholder="Phone" />
<InputP type="number" placeholder="Age" />
<InputP type="text" placeholder="Result of scan" />
<div className='w-100  mb-3  '>
              <label htmlFor="file" className=' border bg-light p-2 w-100 rounded'>
                <input type='file' id="file" hidden />
                <span className='text-muted'> <FaGoogleDrive /> Upload Mri Scan</span>
              </label>
            </div>
            <div className='w-100  mb-3  '>
              <label htmlFor="file" className=' border bg-light p-2 w-100 rounded'>
                <input type='file' id="file" hidden />
                <span className='text-muted'> <FaGoogleDrive /> Upload Report</span>
              </label>
            </div>
<div className='w-100 d-flex  justify-content-center    align-items-center '>
 <BUtton name='Save' />
 <BUtton name='Cancle' />
</div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default InputsData