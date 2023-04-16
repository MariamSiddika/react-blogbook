import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    useEffect(() => { getData("https://blogs-server-ms.onrender.com/api/v1/blogs") }, []);
    // console.log(data);
    const handleCategoryClick = (postCat) => {
         getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${postCat}`); 
    }
    
    return (
        <div className='posts'>

            <Row className='mx-4'>
                {
                    data.map((post) =>
                        <Col xs={12} md={6} lg={4}>
                            <Card className="post mt-4 mb-5 mx-3 shadow">
                                {
                                    post.img && <img
                                        className="postImg w-100 rounded mb-2" src={post?.img} alt="" />
                                }

                                <div
                                    // onClick={routeChange} 
                                    className="postInfo d-flex flex-column align-items-center">
                                    <div className="postCats">
                                        <span onClick={() => handleCategoryClick(post?.category)} className="postCat mt-3 me-2">{post?.category}</span>

                                    </div>
                                    <span className="postTitle mt-2">{post?.name}</span>
                                    <span className="postDate mt-1">{new Date(post?.createdAt).toDateString()}</span>
                                    {/* <span className="postDate mt-1">1 hour ago</span> */}
                                    <p dangerouslySetInnerHTML={{ __html: post?.post, }} className="postDesc mt-3 w-100 px-3" >
                                        {/* {post.post} */}
                                        {/* // <div dangerouslySetInnerHTML={{_html:post}} /> */}
                                    </p>

                                </div>
                                <Link className='text-decoration-none' to={`/single/${post?._id}`}>
                                    <div className="d-flex align-items-center justify-content-end ">
                                        <button className="btn-read-blog mb-3 me-3 mt-0"><span>Read Blog</span>
                                            <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </Link>

                                <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                                    <Link className='text-decoration-none' to={`/single/${post?._id}`}><p className="reactedCount mb-0">{post?.like_count} likes</p></Link>
                                    <Link className='text-decoration-none' to={`/single/${post?._id}`}><p className="reactedCount mb-0">{post?.dislike_count} dislikes</p></Link>
                                    <Link className='text-decoration-none' to={`/single/${post?._id}`}><p className="reactedCount mb-0">{post?.comments.length} comments</p></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }


            </Row>
            {/* <button className='btn btn-lg d-flex mx-auto text-white showMoreBtn px-5 mb-3'>Show More</button> */}
        </div>
    );
};

export default AllBlogs;