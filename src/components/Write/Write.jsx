import React, { useState } from 'react';
import './Write.css';
import postImg from '../../images/primary-blog-bg.jpg';
import JoditEditor from 'jodit-react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Write = () => {
    // const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        readonly: false,

        height: 350,
        placeholder: "Tell your story...",
    }
    const animatedComponents = makeAnimated();
    const options = [
        { label: 'Life', value: 'life' },
        { label: 'Tech', value: 'tech' },
        { label: 'Food', value: 'food' },
        { label: 'Photography', value: 'photography' },
        { label: 'Sports', value: 'sports' },
        { label: 'Movie', value: 'movie' },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        // const content = {
        //     description: editor.current.value,
        // };
        console.log(content);
    };

    return (
        <div className='write pt-5 d-flex flex-column justify-content-center align-items-center'>
            <img className='writeImg' src={postImg} alt="" />
            <form className='writeForm'>
               
                    <div className="writeFormGroup d-flex align-items-center">
                        <label htmlFor="fileInput">
                        <i className="writeIcon d-flex align-items-center justify-content-center fa-solid fa-plus"></i>
                    </label>
                    <input type="file" name="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" className='writeInput p-4' placeholder='Title' autoFocus={true} />
                    </div>

                    <Select className='w-25 ms-auto mb-3'
                        label="Category"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={options}
                        placeholder="Category"
                    />
               

                <div className="writeFormGroup">
                    {/* <textarea placeholder='Tell your story...' type="text" className='writeInput writeText p-4'></textarea> */}

                    <JoditEditor
                        // ref={editor}
                        // value={content}

                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    // onChange={(newContent) => {
                    // setContent(newContent);
                    // }}
                    />
                </div>
                <div className='d-flex justify-content-end publish-btn'>
                    <button onClick={handleSubmit} className="btn-lg btn-publish d-inline-flex align-items-center justify-content-center align-self-center border-0 px-4 py-3 mb-5">
                        <span>Publish</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Write;