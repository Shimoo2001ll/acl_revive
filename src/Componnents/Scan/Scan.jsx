import React from 'react'
import'./Scan.css'
import'bootstrap/dist/css/bootstrap.css'

import Sclice from './Sclice'
import MainScan from './MainScan'

const Scan = () => {
  return (
  <div className='Mscan  w-100 text-center  '>
    <Sclice />
   <MainScan dir="for Sagittal Group"/>
  </div>
  )
}

export default Scan