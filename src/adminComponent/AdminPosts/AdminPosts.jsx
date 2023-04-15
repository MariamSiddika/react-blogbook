import React from 'react';
import './AdminPosts.css';
import postImg from '../../images/food.jpg';
import { useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import useFirebase from '../../hooks/useFirebase';
import { useEffect } from 'react';

const AdminPosts = () => {
    const [filter, setFilter] = useState(false);
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    const { user } = useFirebase();
    useEffect(() => { getData("https://blogs-server-ms.onrender.com/api/v1/blogs") }, []);
    console.log(data);

    return (
        <div className='container mt-5'>
            <h2 className='manageBlogTitle shadow mb-5 ps-4 py-2'>Manage Blogs</h2>
            <div className='d-flex align-items-center justify-content-end'>
                <button onClick={() =>
                    setFilter(!filter)
                } className='px-3 py-1 me-4 filterBtn'><i className="fa-solid fa-sliders me-2"></i>Filter</button>
                <button className='px-3 py-1 sortBtn'><i className="fa-solid fa-arrow-up-wide-short me-2"></i>Sort</button>
            </div>
            {
                filter && <Accordion className='w-50 ms-auto mt-3' >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <button className='filterByDate px-3 py-2 rounded'><i className="fa-regular fa-calendar-days me-3"></i>Filter by Date</button></Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">

                                </Form.Group>
                                <div className="d-flex justify-content-end align-items-center">
                                    <input className='me-3' type="date" id="starting date" name="startingDate" />
                                    <p className='mb-0'>to</p>
                                    <input className='mx-3' type="date" id="ending date" name="startingDate" />
                                    <Button className="homeCommentBtn me-2 mb-2" type="submit" value="Submit">
                                        Filter
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><button className='filterByCategory px-3 py-2 rounded'><i className=" fa-regular fa-rectangle-list me-3"></i>Filter by Category</button></Accordion.Header>
                        <Accordion.Body>
                            <ul className="filterCatList">
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Lifestyle</li>
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Photography</li>
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Sports</li>
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Movie</li>
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Tech</li>
                                <li className="filterCatListItem d-inline-block w-50 mt-2">Food</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }
            <table style={{ tableLayout: 'fixed' }} className="my-4">
                <thead>
                    <tr className="bg-dark bg-opacity-25">
                        <th className="py-3 px-3 text-center">ID</th>
                        <th className="py-3 px-3 text-center">AUTHOR</th>
                        <th className="py-3 px-3 text-center">IMAGE</th>
                        <th className="py-3 px-3 text-center">TITLE</th>
                        <th className="py-3 px-3 text-center">CATEGORY</th>
                        <th className="py-3 px-3 text-center">POSTED AT</th>
                        <th className="py-3 px-3 text-center">DESCRIPTION</th>
                        <th className="py-3 px-3 text-center">ACTIONS</th>
                    </tr>
                </thead>

                <tbody className="w-100">
                    {
                        data.map((post) => <tr className="border-1">
                            <td className="p-3 ">
                                <h5 className=" text-center ">{post?._id}</h5>
                            </td>
                            <td className="p-3 text-center">
                                <p className="text-center">{post?.author}</p>
                            </td>
                            <td className="p-3 text-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <img style={{ width: '100px', height: '80px' }} className="rounded" src={post?.img} alt="product-img" />
                                    </div>

                                </div>
                            </td>

                            <td className="p-3 text-center">
                                <p className="text-center">{post?.name} </p>
                            </td>
                            <td className="p-3 text-center">
                                <p>{post?.category}</p>
                            </td>
                            <td className="p-3 text-center">
                                <p>{new Date(post?.createdAt).toDateString()}</p>
                            </td>

                            <td className="py-3 px-3 text-center">
                                <p dangerouslySetInnerHTML={{ __html: post?.post, }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsam...</p>
                            </td>
                            <td className="py-3 px-3 text-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div
                                        className=""
                                    // onClick={() => deleteHandler(_id)}
                                    >
                                        <i className="postAction postActionOpen fa-regular fa-folder-open me-4"></i>
                                        <i className="postAction postActionDelete fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default AdminPosts;  