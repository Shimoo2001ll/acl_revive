import React, { useState } from 'react'
import Logo from '../../asset/logo.svg'
import facebook from '../../asset/facebook.svg'
import google from '../../asset/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    // const [error, setErorr] = useState(false)
    // const [alert, setAlert] = useState(false)


    const navigate = useNavigate()


    const checkInputs = () => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if email and password are not empty
        if (email === "" || pass === "") {
            toast.error('Please fill in all fields')
            return;
        }

        // Check if email is in valid format
        if (!emailRegex.test(email)) {
            toast.error('Please enter valid mail contain (@ , .com ) ')
            return;
        } else {
            // setAlert('')
        }

        // Check if password length is at least 6 characters
        if (pass.length < 8) {
            toast.error('Passward must be at least 8 characters long')
            return;
        }
        //  if all vaildation pass , process with success
        toast.success("You are loggied in !")
        setTimeout(() => {
            navigate("/HomeRid")
        }, 1000)
        return;
    }

    const handelChangeEmail = (e) => {

        setEmail(e.target.value)

    }
    const handelChangePass = (e) => {
        setPass(e.target.value)
    }


        return (
            <div className=' log  w-75 mt-2 pt-5 '>

                <div className='m-5 text-center'>
                    <img src={Logo} alt="acl logo" title='Acl logo' width={100} height={100} />
                </div>
                <div className='form w-75'>
                    <form action="" className='' >
                        <div className='mb-3 w-100'>
                            <label className="form-label fw-bold">Email : </label>
                            <div className='inp border border-muted row p-2 rounded'>
                                <FaRegEnvelope className='awenvelop col-2 p-0 m-0 ' />
                                <input type='email' placeholder='example@gmail.com' className=' col-10 m-0 p-0' value={email} onChange={handelChangeEmail} />
                            </div>
                        </div>
                        {/* {alert} */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold ">Password:</label>
                            <div className='inp border border-muted row p-2 rounded'>
                                <FaLock className='awenvelop col-2 p-0 m-0 ' />
                                <input type="password" placeholder='****************' className=' col-10 m-0 p-0' value={pass} onChange={handelChangePass} />
                            </div>
                        </div>
                        <div>
                            <Link type="submit" onClick={checkInputs} className="btn  w-100 text-center text-capitalize "
                            > log in</Link>
                        </div>
                    </form>

                </div>
                <div className=' mt-5'>
                    <Link to="/forget" className='forgetPass text-muted fs-6 '> Forget Password?</Link>
                </div>
                <div className='OR text-center m-3 p-3'>
                    <div className='otherLink text-muted text-capitalize p-2 m-2'>or</div>
                    <div className=" awsom text-center">
                        <div className='goo  text-center '>
                            <img src={google} alt="" />
                        </div>
                        <div className='face  text-center '>
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }

    export default Login;