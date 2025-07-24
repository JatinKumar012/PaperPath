import { useParams } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-pro-react";
import Navbar from '../components/Navbar';

const createDocs = () => {
    let { docsId } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('')
    return (
        <>
            <Navbar />
            <div className='px-[100px] mt-3'>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1} // tabIndex of textarea
                onChange={newContent => setContent(newContent)}
            />
            </div>
        </>
    )
}

export default createDocs;
