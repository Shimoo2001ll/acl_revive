import React from 'react'
import './Patiant.css'
import { FaSearch } from 'react-icons/fa';
import imgprofile from '../../asset/imgprofile.svg'
import imgproGirl from '../../asset/profilegirl.svg'
import File from '../FIles/File';
import { Link } from 'react-router-dom';


const Patiant = () => {
  return (
    <div className='m-2 p-2  '>
    <div className='container'>
        <div>
            <form action="">
                <label htmlFor="search " className='shadow rounded w-100 p-2'>
                    <>
                        <FaSearch className='iconS m-2 ' />

                        <input type="search" name="" id="search" placeholder='Patient Name' className='w-75' />
                    </>
                </label>
            </form>
        </div>
        <div>
            <Link to="/review">
            
        <File awsom={<img src={imgprofile} alt='patiant' title="patient" />} name="Jone" mail="jone233@gmail.com"/>
            </Link>
        <File awsom={<img src={imgproGirl} alt='patiant' title="patient" />} name="dsfg" mail="gghh@gmail.com"/>
        <File awsom={<img src={imgprofile} alt='patiant' title="patient" />} name="Jklkone" mail="hghg@gmail.com"/>
        <File awsom={<img src={imgproGirl} alt='patiant' title="patient" />} name="Johyne" mail="kljkk@gmail.com"/>
        <File awsom={<img src={imgprofile} alt='patiant' title="patient" />} name="AWRE" mail="aws@gmail.com"/>
        <File awsom={<img src={imgproGirl} alt='patiant' title="patient" />} name="jhjh" mail="ewe@gmail.com"/>
        <File awsom={<img src={imgprofile} alt='patiant' title="patient" />} name="Jone" mail="oiu@gmail.com"/>
      
        </div>
        </div>

</div>
  )
}

export default Patiant