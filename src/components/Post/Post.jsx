// import React, { useState } from 'react';
import './Post.css';
import postImg from '../../images/food.jpg';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    // const [detail, setDetail] = useState(false);
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/single`;
        navigate(path);
    }
    return (
        <Card className='post mt-4 mb-5 mx-3 shadow'>
            <img className='postImg w-100 rounded' src={postImg} alt="" />
            <div className="postInfo d-flex flex-column align-items-center">
                <div className="postCats">
                    <span className="postCat mt-3 me-2">Food</span>
                    <span className="postCat mt-3 me-2">Photography</span>
                </div>
                <span className="postTitle mt-3">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr className='mb-0' />
                <span className="postDate">1 hour ago</span>
                <p onClick={routeChange} className='postDesc mt-3 w-100 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione mollitia libero autem maxime? Velit alias corrupti quod sed nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione mollitia libero autem maxime? Velit alias corrupti quod sed nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione mollitia liberoautem maxime? Velit alias corrupti quod sed.</p>
                {/* {
                    detail && (
                        <Single></Single>
                    )
                } */}
                <Card.Footer className='cartFooter d-flex align-items-center justify-content-between w-100 position-relative'>
                    <i className="cartIcon cartIconOne fa-regular fa-heart position-absolute"></i>
                    <i className="cartIcon cartIconTwo fa-regular fa-thumbs-down position-absolute"></i>
                    <i className="cartIcon cartIconThree fa-regular fa-comment position-absolute "></i>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default Post;