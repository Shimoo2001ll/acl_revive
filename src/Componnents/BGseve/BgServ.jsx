import React from 'react';
import "./BgServ.css"
import bgserv from "../../asset/servbg.svg"


const BgServ = () => {
  return (
    <div>
         <div className='bg  '>
        <img src={bgserv} alt="" className=' rounded  h-90' />
      </div>
    </div>
  )
}

export default BgServ