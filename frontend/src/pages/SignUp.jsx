import React from 'react';
import logo from "../images/logo.png";
import { FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";




const SignUp = () => {
  return (
    <div className="flex items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
      <div className="flex w-full items-center">
        <div className="left w-[35%] flex  flex-col ml-[100px]">
          <img className='w-[210px]' src={logo} alt='' />
          <form className='pl-3 mt-5' action="">
            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Username</p>
              <div className="inputBox w-[100%]">
                <i><FaUser /></i>
                <input type='text' placeholder='Username' id='username' name='username' required />
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Name</p>
              <div className="inputBox w-[100%]">
                <i className='cursor-pointer mr-3 !text-[25px]'><FaUser /></i>
                <input type='text' placeholder='Name' id='Name' name='Name' required />
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Email</p>
              <div className="inputBox w-[100%]">
                <i><MdEmail /></i>
                <input type='email' placeholder='Email' id='Email' name='Email' required />
                
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Phone</p>
              <div className="inputBox w-[100%]">
                <i><FaPhoneAlt /></i>
                <input type='phone' placeholder='Phone' id='Phone' name='Phone' required />
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Password</p>
              <div className="inputBox w-[100%]">
                <i><RiLockPasswordFill /></i>
                <input type='password' placeholder='Password' id='Password' name='Password' required />
                <i><IoEyeSharp/></i>
              </div>
            </div>

          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default SignUp;
