import React from 'react'
import'./Scan.css'
import'bootstrap/dist/css/bootstrap.css'
import upload from '../../asset/UploadPhoto.svg'
import mri from'../../asset/sMri.svg'

const Scan = () => {
  return (
  <div className='Mscan row w-100 text-center p-2 '>
    <div className='Slice col-5'>
<div className='list d-flex  justify-content-center  align-items-center '>
<ul>
  <li className='d-flex  justify-content-center  align-items-center'>1</li>
  <li className='d-flex  justify-content-center  align-items-center'>2</li>
  <li className='d-flex  justify-content-center  align-items-center'>3</li>
</ul>
</div>
<div className='mri'>
<img src={mri} alt="" srcset="" />
</div>
<div className='mri'>
<img src={mri} alt="" srcset="" />
</div>
<div className='mri'>
<img src={mri} alt="" srcset="" />
</div>
<div>
<small className='text-muted fw-bold'>More</small>
</div>
    </div>
<div className='Uplod   col-5'>
  <div className='d-flex justify-content-start'>
<h3>
  Upload Photo
</h3>
  </div>
<div className='p-3 '>
  <input type='file' id="file"/>
  <label htmlFor="file" className='p-3 w-100 '>
    <div className='m-3'>
    <img src={upload} alt="" srcset="" width={100} height={100} />
    </div>
    Upload MRI</label>
</div>
<div className=' d-flex justify-content-end  '>

<button className='btn  w-25 m-2 text-center'>Scan</button>
</div>
    </div>
  </div>
  )
}

export default Scan