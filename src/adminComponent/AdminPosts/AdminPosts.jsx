import React from 'react';
import postImg from '../../images/food.jpg'
import './AdminPosts.css';

const AdminPosts = () => {
    // const posts = [];
    // for(let i = 0; i <= 10; i++){
    //     posts.push(<SinglePost></SinglePost>)
    // }
    return (
        <div className='container'>
            <h1>Manage Blogs</h1>
            {/* {
                posts
            } */}
            <div className='singlePost p-4'>
            <div className="singlePostWrapper pe-0">
                <img src={postImg} alt="" className="singlePostImg w-100 rounded" />
            </div>
            <h1 className='singlePostTitle text-center m-2 fs-2 fw-bolder'>Lorem ipsum dolor sit amet.
                <div className="singlePostEdit float-end">
                    {/* <i className="singlePostIcon fa-regular fa-pen-to-square me-3"></i> */}
                    <i className="singlePostIcon fa-regular fa-trash-can me-2"></i>
                </div>
            </h1>
            <div className='singlePostInfo mb-4 d-flex justify-content-between'>
                <span className="singlePostAuthor">
                    Author: <b>John Snow</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fugit! Ipsam nesciunt deleniti illum officiis perferendis nihil commodi numquam laboriosam laudantium porro dignissimos, molestias, veniam quibusdam nulla obcaecati aut. Quas, libero iusto dicta repellat blanditiis, aliquid itaque corrupti autem adipisci magni ipsum ut quia provident. Repudiandae at tempora nisi natus ex, doloremque cum dolores blanditiis cupiditate veniam nostrum doloribus fugiat fuga vel enim. Possimus quidem provident totam necessitatibus reiciendis doloribus sint animi inventore aspernatur voluptatem commodi soluta voluptatum voluptate amet aliquid esse consequuntur adipisci, ipsam omnis laborum quas officiis. Culpa suscipit illum ipsam, facere commodi nemo labore aliquam, esse tempore modi velit harum qui, veritatis ab quo nihil amet nulla sunt impedit magnam sit unde? Esse, harum ipsam! Veniam aliquid ipsa ad architecto provident. Nisi eveniet quas iste dolore quibusdam odio, illum qui esse nostrum laudantium molestiae quia nobis perspiciatis aperiam voluptates facere provident accusantium excepturi, itaque labore at veritatis laboriosam dolorum! Ex, a impedit assumenda expedita est corrupti ullam natus voluptatum, ducimus fuga minus illo labore vel quam recusandae in reprehenderit repellat! Maiores provident adipisci ab distinctio a voluptatum beatae odio tempora quos iste autem totam, in quidem magnam harum saepe vitae nobis id incidunt rem deserunt eveniet quas maxime? Magnam, rem. Debitis culpa molestias quod repellendus blanditiis officiis, saepe perferendis provident quidem, obcaecati harum sed explicabo aliquam doloremque dolores consectetur quos esse reiciendis dolore nobis deleniti aut minus aspernatur! Harum voluptatum facilis saepe quisquam repellat consequatur odit ratione ipsum autem velit eveniet, veritatis officia sed, modi totam esse.
            </p>



            
        </div>
            <div className='singlePost p-4'>
            <div className="singlePostWrapper pe-0">
                <img src={postImg} alt="" className="singlePostImg w-100 rounded" />
            </div>
            <h1 className='singlePostTitle text-center m-2 fs-2 fw-bolder'>Lorem ipsum dolor sit amet.
                <div className="singlePostEdit float-end">
                    {/* <i className="singlePostIcon fa-regular fa-pen-to-square me-3"></i> */}
                    <i className="singlePostIcon fa-regular fa-trash-can me-2"></i>
                </div>
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



            
        </div>

        </div>
    );
};

export default AdminPosts;  