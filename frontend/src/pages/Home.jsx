import React from 'react'
import Navbar from '../components/Navbar'
import { GoPlus } from "react-icons/go";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-between px-[100]">\
        <h3 className='mt-7 mb-3 text-3xl'>All Documents</h3>
        <div className="btnBlue"> <i><GoPlus /></i>Create New Document</div>
      </div>
    </>
  )
}

export default Home