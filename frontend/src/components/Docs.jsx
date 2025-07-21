import React from 'react'
import docsIcon from '../images/docsIcon.png'
import { MdDelete } from "react-icons/md"

const Docs = ({docs}) => {
  return (
    <>
     <div className='docs cursor-pointer rounded-lg flex items-center mt-3 justify-between p-[10px] bg-[#F0F0F0] transition-all hover:bg-[#DCDCDC]'>
      <div className="left flex items-center gap-2">
         <img src={docsIcon} />
         <div>
          <h3 className='text-[20px]'>Tips & Tricks for Next Js And React Js</h3>
          <p className='text-[14px] text-[#808080]'>Created in : 3 July 2025 | Last Updated : 3 July 2025</p>
         </div>
      </div>
      <div className="DocsRight">
        <i className='delete text-[30px] text-red-500 cursor-pointer transition-all hover:text-red-700'><MdDelete /></i>
      </div>
     </div>
    </>
  )
}

export default Docs