import React from 'react';
import SinglePost from '../../components/SinglePost/SinglePost';
import './AdminPosts.css';

const AdminPosts = () => {
    const posts = [];
    for(let i = 0; i <= 10; i++){
        posts.push(<SinglePost></SinglePost>)
    }
    return (
        <div className='container'>
            <h1>All Blogs</h1>
            {
                posts
            }
        </div>
    );
};

export default AdminPosts;  