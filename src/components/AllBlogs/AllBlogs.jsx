import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";

const AllBlogs = () => {
    const [searchOption, setSearchOption] = useState();
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    const location = useLocation();
    const category = location?.state;
    const blogData = location?.blogState;
    // console.log(blogData);

    useEffect(() => {
        if (category) {
            getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${category}`);
        } else {
            getData(`https://blogs-server-ms.onrender.com/api/v1/blogs`);
        }
    }, []);
    // console.log(data);
    // const handleCategoryClick = (postCat) => {
    //     navigate('/allBlogs');
    //     getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${postCat}`);
    // }

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (loading) {
        return (
            <div className="w-100 h-100 my-auto d-flex justify-content-center align-items-center mt-5">
                <ClockLoader
                    color="#E12454"
                    size={"300"}
                    loading={true}
                    css={override}
                    display={"block"}
                />
            </div>
        );
    }
    //Search handlee
    const searchHandler = (query) => {
        if (query) {
            // console.log(query)
            setSearchOption(query);
        }
        if (query === "") {
            setSearchOption(false);
        }
    };

    let content;

    if (blogData) {
        content = (
            <Row className="mx-4">
                {blogData.map((post) => (
                    <Col xs={12} md={6} lg={4}>
                        <Card className="post mt-4 mb-5 mx-3 shadow">
                            {post.img && (
                                <img
                                    className="postImg w-100 rounded mb-2"
                                    src={post?.img}
                                    alt=""
                                />
                            )}

                            <div className="postInfo d-flex flex-column align-items-center">
                                <div className="postCats">
                                    <span className="postCat mt-3 me-2">{post?.category}</span>
                                </div>
                                <span className="postTitle mt-2">{post?.name}</span>
                                <span className="postDate mt-1">
                                    {new Date(post?.createdAt).toDateString()}
                                </span>
                                <p
                                    dangerouslySetInnerHTML={{ __html: post?.post }}
                                    className="postDesc mt-3 w-100 px-3"
                                ></p>
                            </div>
                            <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                <div className="d-flex align-items-center justify-content-end ">
                                    <button className="btn-read-blog mb-3 me-3 mt-0">
                                        <span>Read Blog</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </Link>

                            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.like_count?.length} likes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.dislike_count?.length} dislikes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.comments?.length} comments
                                    </p>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
    if (category) {
        content = (
            <Row className="mx-4">
                {data.map((post) => (
                    <Col xs={12} md={6} lg={4}>
                        <Card className="post mt-4 mb-5 mx-3 shadow">
                            {post.img && (
                                <img
                                    className="postImg w-100 rounded mb-2"
                                    src={post?.img}
                                    alt=""
                                />
                            )}

                            <div className="postInfo d-flex flex-column align-items-center">
                                <div className="postCats">
                                    <span className="postCat mt-3 me-2">{post?.category}</span>
                                </div>
                                <span className="postTitle mt-2">{post?.name}</span>
                                <span className="postDate mt-1">
                                    {new Date(post?.createdAt).toDateString()}
                                </span>
                                <p
                                    dangerouslySetInnerHTML={{ __html: post?.post }}
                                    className="postDesc mt-3 w-100 px-3"
                                ></p>
                            </div>
                            <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                <div className="d-flex align-items-center justify-content-end ">
                                    <button className="btn-read-blog mb-3 me-3 mt-0">
                                        <span>Read Blog</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </Link>

                            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.like_count?.length} likes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.dislike_count?.length} dislikes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.comments?.length} comments
                                    </p>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
    if (searchOption) {
        console.log(searchOption);
        const filteredData = data?.filter((singleData) => {
            // console.log(singleData.name.toLowerCase());
            return singleData.name.toLowerCase().includes(searchOption.toLowerCase());
        });
        console.log(filteredData);
        content = (
            <Row className="mx-4">
                {filteredData?.map((post) => {
                    // console.log(post);
                    return (
                        <Col xs={12} md={6} lg={4}>
                            <Card className="post mt-4 mb-5 mx-3 shadow">
                                {post.img && (
                                    <img
                                        className="postImg w-100 rounded mb-2"
                                        src={post?.img}
                                        alt=""
                                    />
                                )}

                                <div className="postInfo d-flex flex-column align-items-center">
                                    <div className="postCats">
                                        <span className="postCat mt-3 me-2">{post?.category}</span>
                                    </div>
                                    <span className="postTitle mt-2">{post?.name}</span>
                                    <span className="postDate mt-1">
                                        {new Date(post?.createdAt).toDateString()}
                                    </span>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: post?.post }}
                                        className="postDesc mt-3 w-100 px-3"
                                    ></p>
                                </div>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <div className="d-flex align-items-center justify-content-end ">
                                        <button className="btn-read-blog mb-3 me-3 mt-0">
                                            <span>Read Blog</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </Link>

                                <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                                    <Link
                                        className="text-decoration-none"
                                        to={`/single/${post?._id}`}
                                    >
                                        <p className="reactedCount mb-0">
                                            {post?.like_count?.length} likes
                                        </p>
                                    </Link>
                                    <Link
                                        className="text-decoration-none"
                                        to={`/single/${post?._id}`}
                                    >
                                        <p className="reactedCount mb-0">
                                            {post?.dislike_count?.length} dislikes
                                        </p>
                                    </Link>
                                    <Link
                                        className="text-decoration-none"
                                        to={`/single/${post?._id}`}
                                    >
                                        <p className="reactedCount mb-0">
                                            {post?.comments?.length} comments
                                        </p>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        );
    }

    if (!blogData && !category && !searchOption) {
        content = (
            <Row className="mx-4">
                {data.map((post) => (
                    <Col xs={12} md={6} lg={4}>
                        <Card className="post mt-4 mb-5 mx-3 shadow">
                            {post.img && (
                                <img
                                    className="postImg w-100 rounded mb-2"
                                    src={post?.img}
                                    alt=""
                                />
                            )}

                            <div className="postInfo d-flex flex-column align-items-center">
                                <div className="postCats">
                                    <span className="postCat mt-3 me-2">{post?.category}</span>
                                </div>
                                <span className="postTitle mt-2">{post?.name}</span>
                                <span className="postDate mt-1">
                                    {new Date(post?.createdAt).toDateString()}
                                </span>
                                <p
                                    dangerouslySetInnerHTML={{ __html: post?.post }}
                                    className="postDesc mt-3 w-100 px-3"
                                ></p>
                            </div>
                            <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                <div className="d-flex align-items-center justify-content-end ">
                                    <button className="btn-read-blog mb-3 me-3 mt-0">
                                        <span>Read Blog</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </Link>

                            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.like_count?.length} likes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.dislike_count?.length} dislikes
                                    </p>
                                </Link>
                                <Link className="text-decoration-none" to={`/single/${post?._id}`}>
                                    <p className="reactedCount mb-0">
                                        {post?.comments.length} comments
                                    </p>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }

    return (
        <div className="posts">
            <div className="">
                <InputGroup className="w-50 mx-auto my-5 d-flex align-items-center justify-content-center">
                    <Form.Control
                        onChange={(e) => {
                            console.log(e.target.value);
                            searchHandler(e.target.value);
                        }}
                        placeholder="Search by Name"
                        type="text"
                        aria-label="Search"
                    />
                    <Button className="searchButton">Search</Button>
                </InputGroup>
            </div>
            {content}
        </div>
    );
};

export default AllBlogs;
