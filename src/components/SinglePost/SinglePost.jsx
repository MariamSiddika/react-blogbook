import './SinglePost.css'
import postImg from '../../images/food.jpg'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';


const SinglePost = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [isdisLiked, setIsdisLiked] = useState(false);
    const [showCommentBox, setshowCommentBox] = useState(true);
    const { data, getData, error, loading } = useFetch();
    const { postId } = useParams();
    // const path = location.pathname.split("/")[2];
    // console.log(param);

    useEffect(() => {
        if (isLiked === true) {
            setIsdisLiked(false);
            console.log(isLiked, isdisLiked);
        }
    }, [isLiked]);
    useEffect(() => {
        if (isdisLiked === true) {
            setIsLiked(false);
            console.log(isLiked, isdisLiked);
        }
    }, [isdisLiked]);

    const likeHandler = () => {
        setIsLiked((isLiked) => !isLiked);
        if (isLiked === true) {
            setIsdisLiked(false);
        }
    };
    // console.log(isLiked, isdisLiked);

    const disLikeHandler = () => {
        setIsdisLiked((isdisLiked) => !isdisLiked);
        if (isdisLiked === true) {
            setIsLiked(false);
        }
    };

    useEffect(() => { getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`) }, [])

    console.log(data);
    return (
        <Card className='singlePost p-4 mb-4 mt-3'>
            <div className="singlePostWrapper pe-0">
                <img src={data[0]?.img} alt="" className="singlePostImg w-100 rounded" />
            </div>
            <h1 className='singlePostTitle text-center m-2 fs-2 fw-bolder'>{data[0]?.name}
                {/* <div className="singlePostEdit float-end">
                    <i className="singlePostIcon fa-regular fa-pen-to-square me-3"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can me-2"></i>
                </div> */}
            </h1>
            <div className='singlePostInfo mb-4 d-flex justify-content-between'>
                <span className="singlePostAuthor">
                    Author: <b>John Snow</b>
                </span>
                <span className="singlePostDate">
                    <span className='me-4'>{data[0]?.category}</span>   1 hour ago
                </span>
            </div>
            <p className='singlePostDesc'>
                {data[0]?.post}
            </p>
            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 position-relative border-bottom">
                <i
                    onClick={likeHandler}
                    className={
                        isLiked && !isdisLiked
                            ? "cartIcon reactedIcon cartIconOne fa-solid fa-heart position-absolute"
                            : "cartIcon cartIconOne fa-regular fa-heart position-absolute"
                    }
                ></i>

                {
                    <i
                        onClick={disLikeHandler}
                        className={
                            isdisLiked && !isLiked
                                ? "cartIcon reactedIcon cartIconTwo fa-solid fa-thumbs-down position-absolute"
                                : "cartIcon cartIconTwo fa-regular fa-thumbs-down position-absolute"
                        }
                    ></i>
                }

                <i
                    onClick={() => {
                        setshowCommentBox(!showCommentBox);
                        // setIsLiked(false);
                    }}
                    className="cartIcon cartIconThree fa-regular fa-comment position-absolute "
                ></i>
            </Card.Footer>
            {
                showCommentBox && (
                    <div className="commentBox">
                        <h3 className='mt-2'><span>{data[0]?.comments?.length}</span> Comment</h3>
                        <div className="">
                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <div className="d-flex flex-column comment-section">
                                        {
                                            data[0]?.comments?.map((comment) => (
                                                <div className="bg-white p-2">
                                                    <div className="d-flex flex-row"><img className="rounded-circle  me-3" alt='' src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">{comment.name?comment.name: 'Anonymous'}</span><span className="date text-black-50">{new Date(data[0]?.createdAt).toDateString()}</span></div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="comment-text">{comment.comment}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
{/* 
                                        <div className="bg-white">
                                            <div className="d-flex flex-row fs-12">
                                                <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                                <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>

                                            </div>
                                        </div> */}
                                        <div className="bg-light p-2">
                                            <div className="d-flex flex-row align-items-start">
                                                <img className="rounded-circle me-3" alt='' src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea className="form-control ml-1 shadow-none textarea"></textarea></div>
                                            <div className="mt-2 d-flex justify-content-end"><button className="btn btn-comment me-3 btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-comment-cancel btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </Card>
    );
};

export default SinglePost;