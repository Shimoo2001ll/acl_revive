import './Buutton.css'
import React from 'react'

const BUtton = (props) => {



  return (
    <div>
         <button onClick={props.onClick} className='btn btn-info m-3 '>{props.name}</button>
    </div>
  )}
  

export default BUtton