import React from 'react'
import './Patiant.css'
import imgprofile from '../../asset/imgprofile.svg'
import imgproGirl from '../../asset/profilegirl.svg'
import File from '../FIles/File';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'


const Patiant = () => {
  return (
    <div className='m-2 p-2  '>
    <div className='container'>
        <div>
          <Search plasholder=" patiant name"/>
        </div>
        <div>
            <Link to="/review" className=' text-decoration-none text-dark'>  
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