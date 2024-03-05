import React from 'react'

const InputP = (props) => {
  if(props.type === "file"){
    <div className="input-group mb-3 w-100 ">
      <label htmlFor="file">
        <input type='file' id='file' hidden/>
      </label>
    </div>
  }
  return (
    <div>
        <div className="input-group mb-3 w-100 ">
          <input
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            maxLength={props.maxLength}
           
          />
        </div>
    </div>
  )
}

export default InputP