import React, { useState } from 'react';
import logo from "../images/logo.png";
import { FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import rightIMG from "../images/signUpRight.png"
import { api_base_url } from '../Helper';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const createdUser = (e) => {
    e.preventDefault();
      fetch(api_base_url + "/signUp",  {
        mode: "cors",
        method: "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          username: username,
          name : name,
          email : email,
          phone : phone,
          password : pwd,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.success == false) {
          setError(data.message);
        } else{
          navigate("/login");
      }
      })
  } 

  return (
    <div className="flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
      <div className="flex w-full items-center">
        <div className="left w-[30%] flex  flex-col ml-[100px]">
          <img  className='w-[210px]' src={logo} alt='' />
          <form  onSubmit={createdUser} className='pl-3 mt-5' action="">
            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Username</p>
              <div className="inputBox w-[100%]">
                <i><FaUser /></i>
                <input onChange={(e) => {setUsername(e.target.value)}} value={username} type='text' placeholder='Username' id='username' name='username' required />
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Name</p>
              <div className="inputBox w-[100%]">
                <i><FaUser /></i>
                <input onChange={(e) => {setName(e.target.value)}} value={name} type='text' placeholder='Name' id='Name' name='Name' required />
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Email</p>
              <div className="inputBox w-[100%]">
                <i><MdEmail /></i>
                <input onChange={(e) => {setEmail(e.target.value)}} value={email} type='email' placeholder='Email' id='Email' name='Email' required />
                
              </div>
            </div>

            <div className='inputCon'>
              <p className='text-[14px] text-[#808080]'>Phone</p>
              <div className="inputBox w-[100%]">
                <i><FaPhoneAlt /></i>
                <input onChange={(e) => {setPhone(e.target.value)}} value={phone} type='phone' placeholder='Phone' id='Phone' name='Phone' required />
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
            <p>Already have an account <Link to="/login" className='text-blue-500'>Login</Link></p>
            <button  type="submit" className='p-[10px] bg-green-500 transition-all hover:bg-green-600 text-white rounded-lg w-full border-0 mt-3'>Sign Up</button>

          </form>
        </div>
        <div className="right flex items-end justify-end">
          <img className='h-full' src={rightIMG} alt='IMG'></img>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 
