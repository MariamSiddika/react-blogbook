import "./SinglePost.css";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import CommentModal from "../CommentModal/CommentModal";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import swal from "sweetalert";
import { useRef } from "react";
import axios from "axios";

const SinglePost = () => {
    const [userDetail, setUserDetail] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isdisLiked, setIsdisLiked] = useState(false);
    const [showCommentBox, setshowCommentBox] = useState(true);
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    const { postId } = useParams();
    const { user } = useFirebase();

    // const commentEmailRef = useRef();
    const commentRef = useRef();

    const handleCategoryClick = (postCat) => {
        // navigate('/allBlogs');
        getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${postCat}`);
    };
    useEffect(() => {
        getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`);
    }, []);
    // console.log(data[0]?.comments);

    if (user?.email) {
        axios
            .get(`https://blogs-server-ms.onrender.com/api/v1/users?email=${user?.email}`)
            .then((res) => {
                const resData = res.data[0];
                setUserDetail(resData);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`);
    }, []);
    const likeCount = data[0]?.like_count;
    const disLikeCount = data[0]?.dislike_count;
    console.log(likeCount, disLikeCount);
    const [likeCounter, setLikeCounter] = useState(likeCount ? likeCount : 0);
    const [disLikeCounter, setDisLikeCounter] = useState(disLikeCount ? disLikeCount : 0);
    console.log(typeof data[0]?.like_count);

    useEffect(() => {
        if (isLiked) {
            setIsdisLiked(false);
            setLikeCounter((prev) => prev + 1);
            setDisLikeCounter((prev) => (prev - 1 < 0 ? 0 : prev - 1));
        } else if (!isLiked) {
            setLikeCounter((prev) => (prev - 1 < 0 ? 0 : prev - 1));
            setDisLikeCounter((prev) => prev + 1);
        }
    }, [isLiked, likeCount, disLikeCount]);
    useEffect(() => {
        // if (isdisLiked === true) {
        //     setIsLiked(false);
        //     console.log(likeCount, disLikeCount);
        // }

        if (isdisLiked === true) {
            setIsLiked(false);
            setDisLikeCounter((prev) => prev + 1);
            setLikeCounter((prev) => (prev - 1 < 0 ? 0 : prev - 1));
        } else if (isdisLiked === false) {
            setDisLikeCounter((prev) => (prev - 1 < 0 ? 0 : prev - 1));
            setLikeCounter((prev) => prev + 1);
        }
    }, [isdisLiked, likeCount, disLikeCount]);

    const likeHandler = () => {
        setIsLiked((isLiked) => !isLiked);
    };
    // console.log(isLiked, isdisLiked);

    const disLikeHandler = () => {
        setIsdisLiked((isdisLiked) => !isdisLiked);
    };

    const handleBlogEdit = () => {};
    const handleBlogDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this blog!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                deleteData(`https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`);
                swal("Poof! Your blog has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your blog is safe!");
            }
        });
    };

    const handleComment = (e) => {
        e.preventDefault();
        const commentValue = commentRef.current.value;
        const userCommentData = {
            comments: [
                ...data[0]?.comments,
                { name: userDetail.name, email: userDetail.email, comment: commentValue },
            ],
        };
        console.log(userCommentData);
        patchData(
            `https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`,
            userCommentData
        );

        commentRef.current.value = "";
        // new Swal.fire(
        //     'Good job!',
        //     'Your comment is added!',
        //     'success'
        //   )
    };
    const content = data[0]?.post;
    return (
        <Card className="singlePost p-4 mb-4 mt-3">
            <div className="singlePostWrapper pe-0">
                <img src={data[0]?.img} alt="" className="singlePostImg w-100 rounded" />
            </div>
            <h1 className="singlePostTitle text-center m-2 fs-2 fw-bolder">
                {data[0]?.name}
                {user?.email === data[0]?.email && (
                    <div className="singlePostEdit float-end">
                        <i
                            onClick={handleBlogEdit}
                            className="singlePostIcon fa-regular fa-pen-to-square me-3"
                        ></i>
                        <i
                            onClick={handleBlogDelete}
                            className="singlePostIcon fa-regular fa-trash-can me-2"
                        ></i>
                    </div>
                )}
            </h1>
            <div className="singlePostInfo mb-4 d-flex justify-content-between">
                <span className="singlePostAuthor">
                    Author: <b>{data[0]?.author}</b>
                </span>
                <span className="singlePostDate">
                    <Link className="text-decoration-none" to="/allBlogs" state={data[0]?.category}>
                        <span
                            onClick={() => handleCategoryClick(data[0]?.category)}
                            className="singlePostCategory me-4"
                        >
                            {data[0]?.category}
                        </span>
                    </Link>

                    {/* <span className="singlePostCategory me-4">{data[0]?.category}</span>{" "} */}
                    {new Date(data[0]?.createdAt).toDateString()}
                </span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }} className="singlePostDesc">
                {/* {data[0]?.post} */}
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
                <p className="mb-0 cartIconOneCount position-absolute">{likeCounter} Likes</p>

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
                <p className="mb-0 cartIconTwoCount position-absolute">{disLikeCounter} Dislikes</p>

                <i
                    onClick={() => {
                        setshowCommentBox(!showCommentBox);
                        // setIsLiked(false);
                    }}
                    className="cartIcon cartIconThree fa-regular fa-comment position-absolute "
                ></i>
                <p className="mb-0 commentCount position-absolute">
                    {data[0]?.comments?.length} Comments
                </p>
            </Card.Footer>

            {/* Comment section */}
            {showCommentBox && (
                <div className="commentBox">
                    <h3 className="mt-2">
                        <span>{data[0]?.comments?.length}</span> Comment
                    </h3>
                    <div className="">
                        <div className="w-100 d-flex justify-content-center">
                            <div className="w-100">
                                <div className="d-flex flex-column comment-section">
                                    {data[0]?.comments?.map((comment) => (
                                        <div className="bg-white p-2">
                                            <div className="d-flex flex-row">
                                                {user.img ? (
                                                    <img
                                                        className="rounded-circle  me-3"
                                                        alt=""
                                                        src={user.img}
                                                        width="40"
                                                    />
                                                ) : (
                                                    <i
                                                        className=" me-3 fa-regular fa-user mt-1"
                                                        style={{ fontSize: "25px" }}
                                                    ></i>
                                                )}

                                                <div className="d-flex flex-column justify-content-start ml-2">
                                                    <span className="d-block font-weight-bold name">
                                                        {/* {user?.displayName
                                                            ? user?.displayName : "Anonymous"} */}
                                                        {comment?.name
                                                            ? comment?.name
                                                            : "Anonymous"}
                                                    </span>
                                                    <span className="date text-black-50">
                                                        {new Date(
                                                            comment?.createdAt
                                                        ).toDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <p className="comment-text">{comment?.comment}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="bg-light p-2">
                                        <div className="d-flex flex-row align-items-start">
                                            {user?.auth ? (
                                                <img
                                                    className="rounded-circle me-3"
                                                    alt=""
                                                    src={user?.img}
                                                    width="40"
                                                />
                                            ) : (
                                                <i
                                                    className=" me-3 fa-regular fa-user mt-1"
                                                    style={{ fontSize: "25px" }}
                                                ></i>
                                            )}
                                            {user?.auth && (
                                                <textarea
                                                    ref={commentRef}
                                                    className="form-control ml-1 shadow-none textarea"
                                                ></textarea>
                                            )}
                                        </div>
                                        <div className="mt-2 d-flex justify-content-end">
                                            {user?.auth ? (
                                                <>
                                                    <button
                                                        className="btn btn-comment me-3 btn-sm shadow-none"
                                                        type="button"
                                                        // disabled = {!userDetail}
                                                        onClick={handleComment}
                                                    >
                                                        Post comment
                                                    </button>
                                                    <button
                                                        className="btn btn-comment-cancel btn-sm ml-1 shadow-none"
                                                        type="button"
                                                    >
                                                        Cancel
                                                    </button>{" "}
                                                </>
                                            ) : (
                                                <CommentModal data={data[0]}></CommentModal>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default SinglePost;
