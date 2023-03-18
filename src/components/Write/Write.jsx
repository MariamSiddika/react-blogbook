import React from 'react';
import './Write.css';
import postImg from '../../images/primary-blog-bg.jpg'

const Write = () => {
    return (
        <div className='write pt-5'>
            <img className='writeImg' src={postImg} alt="" />
            <form className='writeForm'>
                <div className="writeFormGroup d-flex align-items-center">
                    <label htmlFor="fileInput">
                        <i className="writeIcon d-flex align-items-center justify-content-center fa-solid fa-plus"></i>
                    </label>
                    <input type="file" name="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" className='writeInput p-4' placeholder='Title' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText p-4'></textarea>
                </div>
                <div className='text-center publish-btn'>
                <button className='writeSubmit btn text-white py-2 px-4 mt-2 mb-5 border-0 rounded'>Publish</button>
                </div>
            </form>
        </div>
    );
};

export default Write;