import './SinglePost.css'
import postImg from '../../images/food.jpg'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const SinglePost = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [isdisLiked, setIsdisLiked] = useState(false);
    const [showCommentBox, setshowCommentBox] = useState(true);

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
    console.log(isLiked, isdisLiked);

    const disLikeHandler = () => {
        setIsdisLiked((isdisLiked) => !isdisLiked);
        if (isdisLiked === true) {
            setIsLiked(false);
        }
    };

    return (
        <Card className='singlePost p-4 mb-4 mt-3'>
            <div className="singlePostWrapper pe-0">
                <img src={postImg} alt="" className="singlePostImg w-100 rounded" />
            </div>
            <h1 className='singlePostTitle text-center m-2 fs-2 fw-bolder'>Lorem ipsum dolor sit amet.
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
                    <span className='me-4'>.Food Photography</span>   1 hour ago
                </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fugit! Ipsam nesciunt deleniti illum officiis perferendis nihil commodi numquam laboriosam laudantium porro dignissimos, molestias, veniam quibusdam nulla obcaecati aut. Quas, libero iusto dicta repellat blanditiis, aliquid itaque corrupti autem adipisci magni ipsum ut quia provident. Repudiandae at tempora nisi natus ex, doloremque cum dolores blanditiis cupiditate veniam nostrum doloribus fugiat fuga vel enim. Possimus quidem provident totam necessitatibus reiciendis doloribus sint animi inventore aspernatur voluptatem commodi soluta voluptatum voluptate amet aliquid esse consequuntur adipisci, ipsam omnis laborum quas officiis. Culpa suscipit illum ipsam, facere commodi nemo labore aliquam, esse tempore modi velit harum qui, veritatis ab quo nihil amet nulla sunt impedit magnam sit unde? Esse, harum ipsam! Veniam aliquid ipsa ad architecto provident. Nisi eveniet quas iste dolore quibusdam odio, illum qui esse nostrum laudantium molestiae quia nobis perspiciatis aperiam voluptates facere provident accusantium excepturi, itaque labore at veritatis laboriosam dolorum! Ex, a impedit assumenda expedita est corrupti ullam natus voluptatum, ducimus fuga minus illo labore vel quam recusandae in reprehenderit repellat! Maiores provident adipisci ab distinctio a voluptatum beatae odio tempora quos iste autem totam, in quidem magnam harum saepe vitae nobis id incidunt rem deserunt eveniet quas maxime? Magnam, rem. Debitis culpa molestias quod repellendus blanditiis officiis, saepe perferendis provident quidem, obcaecati harum sed explicabo aliquam doloremque dolores consectetur quos esse reiciendis dolore nobis deleniti aut minus aspernatur! Harum voluptatum facilis saepe quisquam repellat consequatur odit ratione ipsum autem velit eveniet, veritatis officia sed, modi totam esse.
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
                        <h3 className='mt-2'><span>1</span> Comment</h3>
                        <div className="">
                            <div className="d-flex justify-content-center">
                                <div className="">
                                    <div className="d-flex flex-column comment-section">
                                        <div className="bg-white p-2">
                                            <div className="d-flex flex-row"><img className="rounded-circle  me-3" alt='' src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Jan 2020</span></div>
                                            </div>
                                            <div className="mt-2">
                                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white">
                                            <div className="d-flex flex-row fs-12">
                                                <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                                <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>

                                            </div>
                                        </div>
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