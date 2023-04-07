import "./Post.css";
import postImg from "../../images/food.jpg";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = () => {

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = `/single`;
    //     navigate(path);
    // };
    return (
        <Card className="post mt-4 mb-5 mx-3 shadow">
            <img 
            // onClick={routeChange} 
            className="postImg w-100 rounded" src={postImg} alt="" />
            <div 
            // onClick={routeChange} 
            className="postInfo d-flex flex-column align-items-center">
                <div className="postCats">
                    <span className="postCat mt-3 me-2">Food</span>
                    <span className="postCat mt-3 me-2">Photography</span>
                </div>
                <span className="postTitle mt-2">Lorem ipsum dolor sit amet.</span>
                <span className="postDate mt-1">1 hour ago</span>
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
            <Link className='text-decoration-none' to="/single">
                <div className="d-flex align-items-center justify-content-end ">
                    <button className="btn-read-blog mb-4 me-3 mt-0"><span>Read Blog</span>
                        <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </Link>

            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                <Link className='text-decoration-none' to="/single"><p className="reactedCount mb-0">5 likes</p></Link>
                <Link className='text-decoration-none' to="/single"><p className="reactedCount mb-0">1 dislike</p></Link>
                <Link className='text-decoration-none' to="/single"><p className="reactedCount mb-0">2 comments</p></Link>
            </Card.Footer>

        </Card>
    );
};

export default Post;