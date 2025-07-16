import React, { useState } from 'react';
import logo from "../images/logo.png";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import rightIMG from "../images/loginRight.png"

const Login = () => {
    // return <h1>Login page Working</h1>
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");


  return (
    <div className="flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
      <div className="flex w-full items-center">
        <div className="left w-[30%] flex  flex-col ml-[100px]">
          <img className='w-[210px]' src={logo} alt='' />
          <form className='pl-3 mt-5' action="">

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Email</p>
              <div className="inputBox w-[100%]">
                <i><MdEmail /></i>
                <input onChange={(e) => {setEmail(e.target.value)}} value={email} type='email' placeholder='Email' id='Email' name='Email' required />
                
              </div>
            </div>


            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Password</p>
              <div className="inputBox w-[100%]">
                <i><RiLockPasswordFill /></i>
                <input onChange={(e) => {setPwd(e.target.value)}} value={pwd} type='password' placeholder='Password' id='Password' name='Password' required />
                <i className='cursor-pointer mr-3 !text-[25px]'><IoEyeSharp/></i>
              </div>
            </div>


             <p className='text-red-500 text-[14px] my-2'>{error}</p>
            <p>Don't have an account <Link to="/signUp" className='text-blue-500'>SignUp</Link></p>
            <button className='p-[10px] bg-green-500 transition-all hover:bg-green-600 text-white rounded-lg w-full border-0 mt-3'>Sign Up</button>

          </form>
        </div>
        <div className="right flex items-end justify-end">
          <img className='w-[35vw]' src={rightIMG} alt='IMG'></img>
        </div>
      </div>
    </div>
  );
};

export default Login; 
