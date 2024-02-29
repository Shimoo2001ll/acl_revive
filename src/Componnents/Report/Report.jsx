import React from 'react';
import { FaSearch } from 'react-icons/fa';
import File from '../FIles/File'
import { FaGoogleDrive } from 'react-icons/fa'
import BUtton from '../Button/Buutton'

import './Report.css'

const Report = () => {

    const myFiles = [
        {
            icon: <FaGoogleDrive/>,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <FaGoogleDrive/>,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <FaGoogleDrive/>,
            name: "sjs",
            mail: "lkllkl@gmail.com"
        },
        {
            icon: <FaGoogleDrive/>,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <FaGoogleDrive/>,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <FaGoogleDrive/>,
            name: "sjs",
            mail: "lkllkl@gmail.com"
        },
    ]

    return (
        <div className='   '>
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
                    {
                        myFiles.map((file, index) => {
                            return (
                                //  Every elemet have an unique key
                                <File key={index} awsom={file.icon} name={file.name} mail={file.mail} bttn={ <div><BUtton name="Open"/></div>}/>
                            )
                        })
                    }
  
   
                </div> 
                </div>

        </div>
    )
}

export default Report