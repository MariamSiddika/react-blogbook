import React from 'react';
import './AdminUsers.css';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import swal from 'sweetalert';

const AdminUsers = () => {
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    useEffect(() => { getData("https://blogs-server-ms.onrender.com/api/v1/users?role=user") }, []);

    const handleUserDelete = (userId) => {
        swal({
            title: "Are you sure?",
            text: "If you proceed, this user will be permanently removed!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                deleteData(`https://blogs-server-ms.onrender.com/api/v1/users?_id=${userId}`);
                swal("Poof! The user has been removed!", {
                    icon: "success",
                });
            } else {
                swal("The user is safe!");
            }
        });
    };
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
                        {
                            data.map((user) => <tr>
                            <td>{user?._id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                {new Date(user?.createdAt).toDateString()}
                            </td>
                            <td>
                                <i onClick={() => handleUserDelete(user?._id)} className="actionIcon actionDelete fa-regular fa-trash-can me-4"></i>
                                <i className="actionIcon actionView fa-regular fa-eye"></i>
                            </td>
                        </tr>)
                        }
                        
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;