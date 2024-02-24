import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarM from '../MainNav/NavBarM'

const LayOut = () => {
  return (
    <div>
        <NavBarM/>
        <Outlet/>
            
       
    </div>
  )
}

export default LayOut