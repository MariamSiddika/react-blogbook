import React from 'react';
import './AdminPosts.css';
import postImg from '../../images/food.jpg';
import { useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';

const AdminPosts = () => {
    const [filter, setFilter] = useState(false);

    return (
        <div className='container mt-5'>
            <h2>Manage Blogs</h2>
            <div className='d-flex align-items-center justify-content-end'>
                <button onClick={() =>
                    setFilter(!filter)
                } className='px-3 py-1 me-3'><i className="fa-solid fa-sliders me-2"></i>Filter</button>
                <button className='px-3 py-1'><i className="fa-solid fa-arrow-up-wide-short me-2"></i>Sort</button>
            </div>
            {
                //    filter && <Form>
                //         <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">

                //         </Form.Group>
                //         <div className="d-flex justify-content-end">
                //         <input type="date" id="starting date" name="startingDate"/>
                //         <p>to</p>
                //         <input type="date" id="ending date" name="startingDate"/>
                //             <Button className="homeCommentBtn me-2 mb-2" type="submit" value="Submit">
                //                 Filter
                //             </Button>
                //         </div>
                //     </Form>
                filter && <Accordion className='w-50 ms-auto mt-3' >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <button className='px-3 py-2'>Filter by Date</button></Accordion.Header>
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
                        <Accordion.Header><button className='px-3 py-2'>Filter by Category</button></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }
            <table style={{ tableLayout: 'fixed' }} className="w-100 my-4">
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

                    <tr className="border-1">
                        <td className="p-3 ">
                            <h5 className=" text-center "> 1{ }</h5>
                        </td>
                        <td className="p-3 text-center">
                            <p className="text-center">John Smith{ }</p>
                        </td>
                        <td className="p-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img style={{ width: '100px', height: '80px' }} className="rounded" src={postImg} alt="product-img" />
                                </div>
                                <p className="">{ }</p>
                            </div>
                        </td>

                        <td className="p-3 text-center">
                            <p className="text-center"> Lorem ipsum dolor sit amet. { }</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>Tech</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>2023-01-07 <br />
                                3:54:17</p>
                        </td>

                        <td className="py-3 px-3 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsam...</p>
                        </td>
                        <td className="py-3 px-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div
                                    className=""
                                // onClick={() => deleteHandler(_id)}
                                >
                                    <i className="postAction postActionOpen fa-regular fa-folder-open me-3"></i>
                                    <i className="postAction postActionDelete fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-1">
                        <td className="p-3 ">
                            <h5 className=" text-center "> 1{ }</h5>
                        </td>
                        <td className="p-3 text-center">
                            <p className="text-center">John Smith{ }</p>
                        </td>
                        <td className="p-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img style={{ width: '100px', height: '80px' }} className="rounded" src={postImg} alt="product-img" />
                                </div>
                                <p className="">{ }</p>
                            </div>
                        </td>

                        <td className="p-3 text-center">
                            <p className="text-center"> Lorem ipsum dolor sit amet. { }</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>Tech</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>2023-01-07 <br />
                                3:54:17</p>
                        </td>

                        <td className="py-3 px-3 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsam...</p>
                        </td>
                        <td className="py-3 px-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div
                                    className=""
                                // onClick={() => deleteHandler(_id)}
                                >
                                    <i className="postAction postActionOpen fa-regular fa-folder-open me-3"></i>
                                    <i className="postAction postActionDelete fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-1">
                        <td className="p-3 ">
                            <h5 className=" text-center "> 1{ }</h5>
                        </td>
                        <td className="p-3 text-center">
                            <p className="text-center">John Smith{ }</p>
                        </td>
                        <td className="p-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img style={{ width: '100px', height: '80px' }} className="rounded" src={postImg} alt="product-img" />
                                </div>
                                <p className="">{ }</p>
                            </div>
                        </td>

                        <td className="p-3 text-center">
                            <p className="text-center"> Lorem ipsum dolor sit amet. { }</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>Tech</p>
                        </td>
                        <td className="p-3 text-center">
                            <p>2023-01-07 <br />
                                3:54:17</p>
                        </td>

                        <td className="py-3 px-3 text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsam...</p>
                        </td>
                        <td className="py-3 px-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <div
                                    className=""
                                // onClick={() => deleteHandler(_id)}
                                >
                                    <i className="postAction postActionOpen fa-regular fa-folder-open me-3"></i>
                                    <i className="postAction  postActionDelete fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>

        </div>
    );
};

export default AdminPosts;  