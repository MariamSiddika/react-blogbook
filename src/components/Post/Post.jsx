import "./Post.css";
// import postImg from "../../images/food.jpg";
import { Card, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Post = ({ post }) => {
    const navigate = useNavigate();
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();

    // console.log(post)
    const handleCategoryClick = (postCat) => {

        // navigate('/allBlogs');
        getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${postCat}`);
    }
    const content = post?.post;
    return (
        <Col xs={12} md={6} lg={4}>
            <Card className="post mt-4 mb-5 mx-3 shadow">
                {
                    post.img && <img
                        className="postImg w-100 rounded mb-2" src={post.img} alt="" />
                }

                <div
                    // onClick={routeChange} 
                    className="postInfo d-flex flex-column align-items-center">
                    <div className="postCats">
                        <Link className='text-decoration-none' to='/allBlogs' state={post?.category}>
                            <span onClick={() => handleCategoryClick(post?.category)} className="postCat mt-3 me-2">{post.category}</span></Link>


                    </div>
                    <span className="postTitle mt-2">{post.name}</span>
                    <span className="postDate mt-1">{new Date(post.createdAt).toDateString()}</span>
                    {/* <span className="postDate mt-1">1 hour ago</span> */}
                    <p dangerouslySetInnerHTML={{ __html: content, }} className="postDesc mt-3 w-100 px-3" >

                    </p>

                </div>
                <Link className='text-decoration-none' to={`/single/${post._id}`}>
                    <div className="d-flex align-items-center justify-content-end ">
                        <button className="btn-read-blog mb-3 me-3 mt-0"><span>Read Blog</span>
                            <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </Link>

                <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                    <Link className='text-decoration-none' to={`/single/${post._id}`}><p className="reactedCount mb-0">{post.like_count} likes</p></Link>
                    <Link className='text-decoration-none' to={`/single/${post._id}`}><p className="reactedCount mb-0">{post.dislike_count} dislikes</p></Link>
                    <Link className='text-decoration-none' to={`/single/${post._id}`}><p className="reactedCount mb-0">{post.comments.length} comments</p></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Post;