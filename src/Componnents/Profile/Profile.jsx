import React, { useRef, useState } from 'react';
import './Profile.css';
import profile from '../../asset/changePhoto.svg';
import Form from 'react-bootstrap/Form';
import edit from '../../asset/edit.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const photoRef = useRef(null)
  const [imge, newimg] = useState("")
  //  make input clic
  const handelImgClick = () => {
    photoRef.current.click();

  }
  //  function to change the profile photo
  const handelImgChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    newimg(event.target.files[0]);

  }
  return (
    <div className='container'>
      <div className='changePhoto text-center p-2 m-2'  >
        <div className=' text-center labImg   ' onClick={handelImgClick}>
          {
            imge ? <img src={URL.createObjectURL(imge)} alt='profile' /> : <img src={profile} alt='profile' />
          }
          <input type="file" name="" hidden ref={photoRef} id="" onChange={handelImgChange} />
          {/* <img src={profile} alt="profile"  /> */}
        </div>

      </div>
      <div className='fields  text-capitalize '>
        <div className=' row d-flex justify-content-between  align-items-center  '>
          <div className='col fw-bold '>
            <Form.Label htmlFor="FName">First Name : </Form.Label>
            <Form.Control
              type="text"
              id="FName"
           />
          </div>
          <div className='col fw-bold '>
            <Form.Label htmlFor="LName">Last Name : </Form.Label>
            <Form.Control
              type="text"
              id="LName"
            />
          </div>
        </div>
        <div className='fw-bold mt-4'><Form.Label htmlFor="num">Contact Number : </Form.Label>
            <Form.Control
              type="number"
              id="num"
              min="0"
              maxLength="14"
            />
        </div>
        <div className='fw-bold mt-4 mail '><Form.Label htmlFor="mail">email : </Form.Label>
            <Form.Control
              type="email"
              id="mail"
            />
            <Link to="/EditEmail" >
             <div className=' edit'>
              <img src={edit} alt="edit" title='Edite Mail' />
            </div>
            </Link>
        </div>
        <div className='fw-bold mt-4 mail'><Form.Label htmlFor="pass">password : </Form.Label>
            <Form.Control
              type="pass"
              id="pass"
            />
            <Link to="/EditPass">
            
              <div className=' edit'>
              <img src={edit} alt="edit" title=" Edit Password" />
            </div>
            </Link>
        </div>
        <div className='text-end m-3'>
          <button className=' cancle-btn '>Cancle</button>
          <button className='  save-btn  '>save</button>
        </div>
          </div>
        </div>
  
  )
}

export default Profile