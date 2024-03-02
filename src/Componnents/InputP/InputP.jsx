import React from 'react'

const InputP = (props) => {


  return (
    <div>
        <div className="input-group mb-3 w-100 ">
          <input
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
           
          />
        </div>
    </div>
  )
}

export default InputP