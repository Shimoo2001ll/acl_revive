import React from 'react';
// import { Button } from 'bootstrap';
import './Buutton.css'

const BUtton = (props) => {
  return (
    <div>
         <button className='btn btn-info m-3 '>{props.name}</button>
    </div>
  )
}

export default BUtton