import React, { useEffect, useState } from "react";
import "./Post.css";
import postImg from "../../images/food.jpg";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';

const Post = () => {
    const [showCommentBox, setshowCommentBox] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isdisLiked, setIsdisLiked] = useState(false);

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

    useEffect(() => {
        if (isLiked === true) {
            setIsdisLiked(false);
            console.log(isLiked, isdisLiked);
        }
    }, [isLiked, isdisLiked, likeHandler, disLikeHandler]);
    useEffect(() => {
        if (isdisLiked === true) {
            setIsLiked(false);
            console.log(isLiked, isdisLiked);
        }
    }, [isLiked, isdisLiked, likeHandler, disLikeHandler]);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/single`;
        navigate(path);
    };
    return (
        <Card className="post mt-4 mb-5 mx-3 shadow">
            <img onClick={routeChange} className="postImg w-100 rounded" src={postImg} alt="" />
            <div onClick={routeChange} className="postInfo d-flex flex-column align-items-center">
                <div className="postCats">
                    <span className="postCat mt-3 me-2">Food</span>
                    <span className="postCat mt-3 me-2">Photography</span>
                </div>
                <span className="postTitle mt-3">Lorem ipsum dolor sit amet.</span>
                <hr className="mb-0" />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc mt-3 w-100 px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis
                    consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione
                    mollitia libero autem maxime? Velit alias corrupti quod sed nihil!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis
                    consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione
                    mollitia libero autem maxime? Velit alias corrupti quod sed nihil!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quos debitis reiciendis
                    consequuntur, doloremque, nostrum quod itaque odit, tempora fuga ratione
                    mollitia liberoautem maxime? Velit alias corrupti quod sed.
                </p>
            </div>

            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 position-relative border-bottom">
                {isLiked && !isdisLiked ? (
                    <i
                        onClick={likeHandler}
                        className="cartIcon reactedIcon cartIconOne fa-solid fa-heart position-absolute"
                    ></i>
                ) : (
                    <i
                        onClick={likeHandler}
                        className="cartIcon cartIconOne fa-regular fa-heart position-absolute"
                    ></i>
                )}
                {isdisLiked && !isLiked ? (
                    <i
                        onClick={disLikeHandler}
                        className="cartIcon reactedIcon cartIconTwo fa-solid fa-thumbs-down position-absolute"
                    ></i>
                ) : (
                    <i
                        onClick={disLikeHandler}
                        className="cartIcon cartIconTwo fa-regular fa-thumbs-down position-absolute"
                    ></i>
                )}

                {/* <i onClick={disLikeHandler} className={isdisLiked && !isLiked ? "cartIcon reactedIcon cartIconTwo fa-solid fa-thumbs-down position-absolute" : "cartIcon cartIconTwo fa-regular fa-thumbs-down position-absolute"} ></i> */}

                <i
                    onClick={() => {
                        setshowCommentBox(!showCommentBox);
                        setIsLiked(false);
                    }}
                    className="cartIcon cartIconThree fa-regular fa-comment position-absolute "
                ></i>
            </Card.Footer>
            {showCommentBox && (
                <Form>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Write your comment.." rows={3} />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button className="homeCommentBtn me-2 mb-2" type="submit" value="Submit">
                            Comment
                        </Button>
                    </div>
                </Form>
            )}
        </Card>
    );
};

export default Post;
