import React from 'react';
import Search from '../Search/Search';
import File from '../FIles/File';
import imgproGirl from'../../asset/profilegirl.svg'
import imgpro from'../../asset/imgprofile.svg'

const Add = () => {
    const myFiles = [
        {
            icon: <img src={imgproGirl} alt='Doctor' title="doctor" />,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <img src={imgpro} alt='Doctor' title="doctor" />,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <img src={imgproGirl} alt='Doctor' title="doctor" />,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <img src={imgpro} alt='Doctor' title="doctor" />,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <img src={imgproGirl} alt='Doctor' title="doctor" />,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <img src={imgpro} alt='Doctor' title="doctor" />,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <img src={imgproGirl} alt='Doctor' title="doctor" />,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <img src={imgpro} alt='Doctor' title="doctor" />,
            name: "Soo",
            mail: "sd@gmail.com"
        },
        {
            icon: <img src={imgproGirl} alt='Doctor' title="doctor" />,
            name: "Jone",
            mail: "jone233@gmail.com"
        },
        {
            icon: <img src={imgpro} alt='Doctor' title="doctor" />,
            name: "Soo",
            mail: "sd@gmail.com"
        },
      
      
       
      
    ]

  return (
    <div className='container'>
        <Search plasholder="Add a Collaborator to Acl Revive -App "/>
        <div className='reports m-4  '>
                    {
                        myFiles.map((file, index) => {
                            return (
                                //  Every elemet have an unique key
                                <File key={index} awsom={file.icon} name={file.name} mail={file.mail} />
                            )
                        })
                    }
                </div> 
        
    </div>
  )
}

export default Add