import React from 'react'
import ForgetImg from './ForgetImg'
import { Link } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'
import './ForgetPass.css'

const Newpass = () => {
    return (
        <div className='verify'>
            <ForgetImg />

            <div className=' container m-4 p-5 text-center'>
                <h3 className='m-5 p-5'>Create a New Password</h3>

                <div className='container  text-start p-2 m-2'>
                    <div className=' text-center '>
                        <label htmlFor="pass" className=' border border-secondary m-3 w-75 text-start  rounded p-2'>
                            <FaLock />
                            <input type="password" name="" id="pass" className=' ps-3 w-75' />
                        </label>
                    </div>
                    <div className=' text-center '>
                        <label htmlFor="confirmpass" className=' border border-secondary  m-3 w-75 text-start rounded p-2'>
                            <FaLock />
                            <input type="password" name="" id="confirmpass" className=' ps-3 w-75' />
                        </label>
                    </div>
                </div>
                <Link className='btn w-75 rounded  rounded-3  ' to="/HomeRid" >Varify</Link>
            </div>
        </div>
    )
}

export default Newpass