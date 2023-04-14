import React from 'react';
import postImg from '../../images/food.jpg';
import './UserPost.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserPost = ({ userPost }) => {
    return (
        <Card className="mb-5">
            <div className='userPost p-4'>
                <div className="userPostWrapper pe-0">
                    <img src={postImg} alt="" className="userPostImg w-100 rounded" />
                </div>
                <h1 className='userPostTitle text-center m-2 fs-2 fw-bolder'>Lorem ipsum dolor sit amet.
                    <div className="userPostEdit float-end">
                        <i className="userPostIcon fa-regular fa-pen-to-square me-3"></i>
                        <i className="userPostIcon fa-regular fa-trash-can me-2"></i>
                    </div>
                </h1>
                <div className='userPostInfo mb-4 d-flex justify-content-between'>
                    <span className="userPostAuthor">
                        Author: <b>Mark David</b>
                    </span>
                    <span className="userPostDate">
                        <span className='me-4'>.Food Photography</span>   1 hour ago
                    </span>
                </div>
                <p className='userPostDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fugit! Ipsam nesciunt deleniti illum officiis perferendis nihil commodi numquam laboriosam laudantium porro dignissimos, molestias, veniam quibusdam nulla obcaecati aut. Quas, libero iusto dicta repellat blanditiis, aliquid itaque corrupti autem adipisci magni ipsum ut quia provident. Repudiandae at tempora nisi natus ex, doloremque cum dolores blanditiis cupiditate veniam nostrum doloribus fugiat fuga vel enim. Possimus quidem provident totam necessitatibus reiciendis doloribus sint animi inventore aspernatur voluptatem commodi soluta voluptatum voluptate amet aliquid esse consequuntur adipisci, ipsam omnis laborum quas officiis. Culpa suscipit illum ipsam, facere commodi nemo labore aliquam, esse tempore modi velit harum qui, veritatis ab quo nihil amet nulla sunt impedit magnam sit unde? Esse, harum ipsam! Veniam aliquid ipsa ad architecto provident. Nisi eveniet quas iste dolore quibusdam odio, illum qui esse nostrum laudantium molestiae quia nobis perspiciatis aperiam voluptates facere provident accusantium excepturi, itaque labore at veritatis laboriosam dolorum! Ex, a impedit assumenda expedita est corrupti ullam natus voluptatum, ducimus fuga minus illo labore vel quam recusandae in reprehenderit repellat! Maiores provident adipisci ab distinctio a voluptatum beatae odio tempora quos iste autem totam, in quidem magnam harum saepe vitae nobis id incidunt rem deserunt eveniet quas maxime? Magnam, rem. Debitis culpa molestias quod repellendus blanditiis officiis, saepe perferendis provident quidem, obcaecati harum sed explicabo aliquam doloremque dolores consectetur quos esse reiciendis dolore nobis deleniti aut minus aspernatur! Harum voluptatum facilis saepe quisquam repellat consequatur odit ratione ipsum autem velit eveniet, veritatis officia sed, modi totam esse.
                </p>
            </div>
            <Card.Footer className="cartFooter d-flex align-items-center justify-content-between w-100 border-bottom">
                    <Link className='text-decoration-none' to={`/single/${userPost?._id}`}><p className="reactedCount mb-0">{userPost?.like_count} likes</p></Link>
                    <Link className='text-decoration-none' to={`/single/${userPost?._id}`}><p className="reactedCount mb-0">{userPost.dislike_count} dislikes</p></Link>
                    <Link className='text-decoration-none' to={`/single/${userPost._id}`}><p className="reactedCount mb-0">{userPost.comments.length} comments</p></Link>
                </Card.Footer>
        </Card>
    );
};

export default UserPost;