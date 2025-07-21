import React from 'react'
import Navbar from '../components/Navbar'
import { GoPlus } from "react-icons/go";
import Docs from '../components/Docs';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px]">
        <h3 className='mt-7 mb-3 text-3xl'>All Documents</h3>
        <button className="btnBlue" > <i><GoPlus /></i>Create New Document</button>
      </div>

      <div className='allDocs px-[100px] mt-4'>
        <Docs />
        <Docs />
        <Docs />
        <Docs />
        <Docs />
      </div>

      <div className="createDocsModelCon fixed top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.3)] w-screen h-screen flex flex-col items-center justify-center">
        <div className='createDocsModel p-[15px] bg-[#fff ]rounded-lg w-[35vm] h-[25px]'>
          <h3 className='text-[20px]'>Create New Document</h3>
          <div className='inputCon'>
            <p className='text-[14px] text-[#808080]'>Title</p>
            <div className="inputBox w-[100%]">
              <i><MdEmail /></i>
              <input type='text' placeholder='Title' id='title' name='title' required />

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home