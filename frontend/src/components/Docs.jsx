import React, { useState } from 'react';
import docsIcon from '../images/docsIcon.png';
import { MdDelete } from "react-icons/md";
import deleteImg from "../images/delete.png";
import { api_base_url } from '../Helper';
import { useNavigate } from 'react-router-dom';


const Docs = ({ docs, onDelete }) => {
  const [error, setError] = useState("");
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

  const navigate = useNavigate();

  const deleteDoc = (id) => {
    fetch(api_base_url + "/deleteDoc", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docId: id,
        userId: localStorage.getItem("userId")
      })
    })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        setError(data.message);
      } else {
        setIsDeleteModelShow(false);
        setTimeout(() => {
          alert(data.message);
        }, 100);
        onDelete(id); // Update parent component (UI)
      }
    })
    .catch(err => {
      setError("Something went wrong while deleting.");
    });
  };
 
  return (
    <>
      <div id={docs._id} className='docs cursor-pointer rounded-lg flex items-center mt-3 justify-between p-[10px] bg-[#F0F0F0] transition-all hover:bg-[#DCDCDC]'>
        <div onClick={() => {navigate(`/createDocs/${docs._id}`)}} className="left flex items-center gap-2">
          <img src={docsIcon} alt="doc-icon" />
          <div>
            <h3 className='text-[20px]'>{docs.title}</h3>
            <p className='text-[14px] text-[#808080]'>
              Created in : {new Date(docs.date).toDateString()} | Last Updated : {new Date(docs.lastUpdate).toDateString()}
            </p>
          </div>
        </div>
        <div className="DocsRight">
          <i onClick={() => setIsDeleteModelShow(true)} className='delete text-[30px] text-red-500 cursor-pointer transition-all hover:text-red-700'>
            <MdDelete />
          </i>
        </div>
      </div>

      {isDeleteModelShow && (
        <div className="deleteDocsModelCon fixed top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.3)] w-screen h-screen flex flex-col items-center justify-center">
          <div className="deleteModel flex items-center flex-col justify-center p-[15px] bg-[#fff] rounded-lg w-[30vw] h-[29vh]">
            <div className='text-[20px]'>Delete Document</div>
            <div className="flex items-center gap-3">
              <img src={deleteImg} alt="delete-confirmation" />
              <div>
                <h3 className='text-[20px]'>Do you want to delete this document?</h3>
                <p className='text-[14px] text-[#808080]'>Delete / Cancel</p>
              </div>
            </div>
            <div className="flex mt-4 items-center gap-2 justify-between w-full">
              <button onClick={() => deleteDoc(docs._id)} className='p-[10px] bg-red-500 text-white rounded-lg border-0 cursor-pointer min-w-[48%]'>Delete</button>
              <button onClick={() => setIsDeleteModelShow(false)} className='p-[10px] bg-[#D1D5DB] text-black rounded-lg border-0 cursor-pointer min-w-[48%]'>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Docs;
