import React from 'react'
import InputP from '../InputP/InputP'
import  BUtton  from '../Button/Buutton'
import TitleServ from '../TitleServ/Title'

const Review = () => {
  return (
    <div className='container'>
      
        <div className=' d-flex flex-wrap justify-content-evenly    align-items-center   '>
        <div className='Doctor m-2 me-5'>
        <div className='m-2 mb-5 pb-5 p-3'>
            <TitleServ title="Review information " />
        </div>
            <h4>Doctor's Card</h4>
<InputP type="text" placeholder="Name" />
<InputP type="email" placeholder="Email" />
<InputP type="number" placeholder="Phone" />
        </div>
        <div className='patiant mt-5 '>
            <h4>Patient's Card</h4>
<InputP type="text" placeholder="Name" />
<InputP type="email" placeholder="Email" />
<InputP type="number" placeholder="Phone" />
<InputP type="number" placeholder="Age" />
<InputP type="text" placeholder="Result of scan" />
<InputP type="file" placeholder="upload Mri Scan" />
<InputP type="file" placeholder="upload Report" />
<div className='w-100 d-flex  justify-content-center    align-items-center '>
 <BUtton name='Save' />
 <BUtton name='Cancle' />
</div>
        </div>
        </div>

    </div>
  )
}

export default Review