import React from 'react';
import File from '../FIles/File'
import { FaGoogleDrive } from 'react-icons/fa'
import BUtton from '../Button/Buutton'
import './Report.css'
import Search from '../Search/Search';

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
       
            <div className='container'>
                <div>
                 <Search plasholder="Patient Name"/>
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


    )
}

export default Report