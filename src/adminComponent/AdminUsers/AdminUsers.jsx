import React from 'react';
import './AdminUsers.css';

const AdminUsers = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mb-5 manageBloggersTitle shadow ps-4 py-2'>Manage Bloggers</h2>
            <div className='table-responsive'>
                <table style={{tableLayout: 'fixed'}} className="userTable table table-light table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">JOINED AT</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>2023-01-07 <br />
                                3:54:17</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>2023-01-07 <br />
                                3:54:17</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>2023-01-07 <br />
                                3:54:17</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>2023-01-07 <br />
                                3:54:17</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>2023-01-07 <br />
                                3:54:17</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                      

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;