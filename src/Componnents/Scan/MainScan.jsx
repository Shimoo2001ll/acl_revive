
import React from 'react'
import upload from '../../asset/UploadPhoto.svg'
const MainScan = (props) => {
  return (
    <div>
  <div className='Uplod'>
  <div className='d-flex justify-content-start mb-2  '>
<h3 className='p-4'>
  Upload Photo
</h3>
  </div>
<div className='  '>
  <input type='file' id="file"/>
  <label htmlFor="file" className='input_upload  w-100 '>
    <div className='m-3'>
    <img src={upload} alt=""  width={100} height={100} />
    </div>
    <div className='p-4 m-4 fw-bold  fs-4 '>
    <p className='upload'>Upload Photo  <span className='text-muted'> or just drag and drop</span></p>
    <p className='text-dark text-capitalize '>{props.dir}</p>
    </div>
    </label>
</div>
<div className=' d-flex justify-content-end  '>

<button className='btn  w-25 m-2 text-center'>Scan</button>
</div>
    </div>
    </div>
  )
}

export default MainScan