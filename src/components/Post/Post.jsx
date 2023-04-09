import "./Post.css";
// import postImg from "../../images/food.jpg";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    // console.log(post)

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = `/single`;
    //     navigate(path);
    // };
    return (
        <Col xs={12} md={6} lg={4}>
            <Card className="post mt-4 mb-5 mx-3 shadow">
                {
                    post.img && <img
                    className="postImg w-100 rounded" src={post.img} alt="" />
                }
                
                <div
                    // onClick={routeChange} 
                    className="postInfo d-flex flex-column align-items-center">
                    <div className="postCats">
                        <span className="postCat mt-3 me-2">{post.category}</span>

                    </div>
                    <span className="postTitle mt-2">{post.name}</span>
                    <span className="postDate mt-1">{new Date(post.createdAt).toDateString()}</span>
                    {/* <span className="postDate mt-1">1 hour ago</span> */}
                    <p className="postDesc mt-3 w-100 px-3">
                        {post.post}
                    </p>

                </div>
                <Link className='text-decoration-none' to={`/single/${post._id}`}>
                    <div className="d-flex align-items-center justify-content-end ">
                        <button className="btn-read-blog mb-4 me-3 mt-0"><span>Read Blog</span>
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