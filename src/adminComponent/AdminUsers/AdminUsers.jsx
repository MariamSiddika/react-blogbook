import React, { useState, useEffect } from "react";
import "./AdminUsers.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import Error from "../../components/Error/Error";
import UserTableRow from "./UserTableRow";

const AdminUsers = () => {
    const [searchOption, setSearchOption] = useState();
    const [sortedData, setSortedData] = useState([]);
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    useEffect(() => {
        getData("https://blogs-server-ms.onrender.com/api/v1/users?role=user");
    }, []);

    useEffect(() => {
        // sort data alphabetically based on name
        const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setSortedData(sortedData);
    }, [data]);

    let content;
    const searchUserHandler = (query) => {
        if (query) {
            setSearchOption(query);
        } else {
            setSearchOption(false);
        }
    };
    const handleUserDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteData(`https://blogs-server-ms.onrender.com/api/v1/users?_id=${userId}`);
        }
    };

    if (searchOption) {
        const filteredData = sortedData.filter((singleData) => {
            return singleData.name.toLowerCase().includes(searchOption.toLowerCase()) || singleData.email.toLowerCase().includes(searchOption.toLowerCase());
        });
        content =
            filteredData.length === 0 ? (
                <div className="">
                    <Error />
                </div>
            ) : (
                <UserTableRow
                    data={filteredData}
                    handleUserDelete={handleUserDelete}
                ></UserTableRow>
            );
    } else {
        content =
            sortedData.length === 0 ? (
                <div className="">
                    <Error />
                </div>
            ) : (
                <UserTableRow data={sortedData} handleUserDelete={handleUserDelete}></UserTableRow>
            );
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-5 manageBloggersTitle shadow ps-4 py-2">Manage Bloggers</h2>
            <div className="d-flex align-items-center justify-content-end mb-3">
                <InputGroup className="w-50 mx-auto my-5 d-flex align-items-center justify-content-center">
                    <Form.Control
                        style={{ border: "2px solid teal" }}
                        onChange={(e) => {
                            searchUserHandler(e.target.value);
                        }}
                        placeholder="Search by User Name"
                        type="text"
                        aria-label="Search"
                    />
                </InputGroup>
                <button
                    className="px-3 py-1 sortBtn"
                    onClick={() => setSortedData([...sortedData].reverse())}
                >
                    <i className="fa-solid fa-arrow-up-wide-short me-2"></i>Sort
                </button>
            </div>

            <div className="table-responsive">
                <table
                    style={{ tableLayout: "fixed" }}
                    className="userTable table table-light table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">JOINED AT</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    {content}
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;
