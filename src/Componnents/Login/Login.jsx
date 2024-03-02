import React, { useState } from 'react'
import Logo from '../../asset/logo.svg'
import facebook from '../../asset/facebook.svg'
import google from '../../asset/google.svg'
import { Link } from 'react-router-dom';
import'./Login.css'
import{FaRegEnvelope} from 'react-icons/fa'
import{FaLock} from 'react-icons/fa'


function Login() {
    const [email , setEmail ] = useState('')
    const [pass , setPass ] = useState('')
    const [error , setErorr ] = useState('')
    const checkInputs = (e)=>{
        if(email==="" || pass ===""){
    e.preventDefault();
    setErorr(<p className=' alert  alert-danger  text-capitalize '> Please fill in all the fielde </p>)
    return;
}
    }
    return (
        <div className=' log  w-75 mt-2 pt-5 '>
            <div className='m-5 text-center'>
                <img src={Logo} alt="acl logo" title='Acl logo' width={100} height={100} />
            </div>
            <div className='form w-75'>
                <form action="" className=''>
                    <div className='mb-3 w-100'>
                        <label className="form-label fw-bold">Email : </label>
                        <div className='inp border border-muted row p-2 rounded'>
                            <FaRegEnvelope className='awenvelop col-2 p-0 m-0 '/>
                            <input type='email' placeholder='example@gmail.com' className=' col-10 m-0 p-0' value={email} onChange={e=> setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label fw-bold ">Password:</label>
                        <div className='inp border border-muted row p-2 rounded'>
                            <FaLock className='awenvelop col-2 p-0 m-0 '/>
                            <input type="password" placeholder='****************' className=' col-10 m-0 p-0' value={pass} onChange={e=> setPass(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        {error && error}
                        <Link to='/HomeRid' onClick={checkInputs}  className="btn  w-100 text-center text-capitalize "
                        > log in</Link>
                    </div>
                </form>
            </div>
            <div className='forgetPass mt-5'>
                    <Link to="/forget" className='signup text-muted fs-6 '> Forget Password?</Link>
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
        </div>
    )
}

export default Login;