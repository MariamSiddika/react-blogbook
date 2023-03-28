import React from 'react';
import './AdminUsers.css';

const AdminUsers = () => {
    return (
        <div className='container mt-5'>
            <h1 className='mb-4'>All Users</h1>
            <div className='table-responsive'>
                <table className="userTable table table-light table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
                            <td>
                                <i className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>mark@mail.com</td>
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