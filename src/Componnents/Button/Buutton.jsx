import React from 'react';
// import { Button } from 'bootstrap';

const BUtton = (props) => {
  return (
    <div>
         <button className='btn btn-info '>{props.name}</button>
    </div>
  )
}

export default BUtton