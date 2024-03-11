import React from 'react'
import InputP from '../InputP/InputP'
import BUtton from '../Button/Buutton'
// import TitleServ from '../TitleServ/Title'
import './InputData.css'
import { FaGoogleDrive } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const InputsData = (props) => {
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
              <Link to="/add" className=' text-decoration-none '>
                <InputP type="text" placeholder="Name" />
              </Link>
              <InputP type="email" placeholder="Email" />
              <InputP type="number" placeholder="Phone" />
            </div>
          </div>
          <div className='patiant  '>
            <h4 className='text-center mb-3'>Patient's Card</h4>
            <InputP type="text" placeholder="Name" />
            <InputP type="email" placeholder="Email" />
            <InputP type="number" placeholder="Phone" min="0" maxLength="14" />
            <InputP type="number" placeholder="Age" min="0" maxLength="2" />
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