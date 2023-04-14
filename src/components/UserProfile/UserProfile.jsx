import React from 'react';
import './UseProfile.css';
import UserPost from '../UserPost/UserPost';
import useFirebase from '../../hooks/useFirebase';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';

const UserProfile = () => {
    const { user, updateName } = useFirebase();
    const { data, getData, error, loading } = useFetch();

    // useEffect(() =>{
    //     if(user?.email){
    //         getData("https://blogs-server-ms.onrender.com/api/v1/blogs?email=siddika@gmail.com")
    //     }
    // }, []);
    if(user?.email){
        getData("https://blogs-server-ms.onrender.com/api/v1/blogs?email=siddika@gmail.com")
    }
    console.log(user?.email);
    console.log(data);
   
    return (
        <div className='userProfile mt-4 mb-5'>
            <div className="profileInfo d-flex align-items-center justify-content-start shadow pb-2">
                {
                    user?.img
                        ?
                        <img className='userPp ms-5' src={user?.img} alt="" />
                        :
                        <i
                            className=" fa-regular fa-user ms-5 ps-2"
                            style={{ fontSize: "55px" }}
                        ></i>
                }

                {/* <img className='userPp  ms-5' src={pp} alt="" /> */}
                <div className='userInfo  ms-5'>
                    <h4 className='infoName'>{user?.displayName}</h4>
                    <div className='d-flex align-items-center justify-content-start'>
                        <i className="fa-solid fa-envelope infoMailIcon me-2"></i>
                        <p className='mb-0 infoMail'>{user?.email}</p>
                    </div>
                </div>
            </div>
            <h1 className='recentBlog mt-5 ps-5 shadow mb-3'>Your Blogs</h1>
            <div className='container pt-5 px-5'>
                {
                    data?.map((userPost) => <UserPost key={userPost?._id} userPost={userPost}></UserPost>)
                }
                {/* <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost> */}
            </div>
        </div>
    );
};

export default UserProfile;