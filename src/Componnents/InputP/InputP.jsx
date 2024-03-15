import React from 'react'

const InputP = (props) => {
//   const [text , setText] =useState()
//   const checkValue= (e)=>{
//     if(text ==="")
//     e.preventDefault()
//     console.log(e)

//   }
 
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
           onChange={props.onChange}
           value={props.value}
          />
        </div>
    </>
  )
}

export default InputP