import React from 'react'

const InputP = (props) => {
 
  return (
    <>
        <div className="input-group mb-3 w-100  ">
          <input
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            maxLength={props.maxLength}
           
          />
        </div>
    </>
  )
}

export default InputP