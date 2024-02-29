import React from 'react';
import { FaSearch } from 'react-icons/fa';
import File from '../FIles/File'
import { FaGoogleDrive } from 'react-icons/fa'
import BUtton from '../Button/Buutton'

import './Report.css'

const Report = () => {
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
                <div className='reports m-4  '>
         <File awsom={<FaGoogleDrive/>} name="Jone" mail="jone233@gmail.com" bttn={ <div><BUtton name="Open"/></div>}/>
         <File awsom={<FaGoogleDrive/>} name="Soo" mail="sd@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="sjs" mail="lkl@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Jone" mail="jone233@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Soo" mail="sd@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="sjs" mail="lkl@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Jone" mail="jone233@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Soo" mail="sd@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="sjs" mail="lkl@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Jone" mail="jone233@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="Soo" mail="sd@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
         <File awsom={<FaGoogleDrive/>} name="sjs" mail="lkl@gmail.com"  bttn={ <div><BUtton name="Open"/></div>} />
   
                </div> 
                </div>

        </div>
    )
}

export default Report