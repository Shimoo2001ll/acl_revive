import React from 'react'
import './File.css'


const File = (props) => {
  return (
    <div>        
        <div className='reports m-0 mt-2  m-md-2 m-lg-2  m-xl-2  m-xxl-2   w-100  '>
                    <div className=' rep d-flex border w-100 mb-4 p-2 shadow  rounded '>
                        <div className=' drive ps-2 m-1 m-md-2 m-lg-2  m-xl-2  m-xxl-2  '>
                            <div className='iconS'>
                            {props.awsom}
                            </div>
                            </div>
                        <div className='w-100 d-flex justify-content-between  align-items-center '>
                            <div>
                                <p className='fw-bold'>{props.name}</p>
                                <span >{props.mail}</span>
                            </div>
                            <div className=''>
                              {props.bttn}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
   
  )
}

export default File