import { useParams } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from "jodit-pro-react";
import Navbar from '../components/Navbar';
import { api_base_url } from '../Helper';

const createDocs = () => {
    let { docsId } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [error, setError] = useState("");
    const [data, setData] = useState("");

    const updateDoc = () => {
        fetch(api_base_url + "/uploadDoc", {
            mode: "cors",
            method:'POST',
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify({
                userId : localStorage.getItem("userId"),
                docsId : docsId,
                content: content
            })
        }).then(res=>res.json()).then(data=>{
            if(data.success === false){
              setError(data.message)
            }
            else { 
                setError("");
            }
        })
    }

    const getContent = () => {
    fetch(api_base_url + "/getDoc", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            docsId: docsId,
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success === false) {
            setError(data.message);
        } else {
            setContent(data.doc.content);
        }
    })
    .catch(err => {
        setError("Something went wrong");
        console.error(err);
    });
};


     useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <Navbar />
            <div className='px-[100px] mt-3'>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1} // tabIndex of textarea
                // onChange={(e)=> {
                //     setContent(e.target.value);
                //     updateDoc();
                // }} 
                onChange={e =>{setContent(e); updateDoc()}}
            />
            </div>
        </>
    )
}

export default createDocs;
