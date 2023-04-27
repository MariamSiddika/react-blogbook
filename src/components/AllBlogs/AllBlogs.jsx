import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import BlogCard from "./BlogCard";
import Error from "../Error/Error";

const AllBlogs = () => {
    const [searchOption, setSearchOption] = useState();
    const { data, getData, error, loading, patchData, deleteData, success } = useFetch();
    const location = useLocation();
    const category = location?.state;
    const blogData = location?.blogState;
    // console.log(blogData);

    useEffect(() => {
        if (category) {
            getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${category}`);
        } else {
            getData(`https://blogs-server-ms.onrender.com/api/v1/blogs`);
        }
    }, []);
    // console.log(data);
    // const handleCategoryClick = (postCat) => {
    //     navigate('/allBlogs');
    //     getData(`https://blogs-server-ms.onrender.com/api/v1/blogs?category=${postCat}`);
    // }

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (loading) {
        return (
            <div className="w-100 h-100 my-auto d-flex justify-content-center align-items-center mt-5">
                <ClockLoader
                    color="#E12454"
                    size={"300"}
                    loading={true}
                    css={override}
                    display={"block"}
                />
            </div>
        );
    }
    //Search handlee
    const searchHandler = (query) => {
        if (query) {
            // console.log(query)
            setSearchOption(query);
        }
        if (query === "") {
            setSearchOption(false);
        }
    };

    let content;

    if (blogData) {
        content = (
            <Row className="mx-4">
                {blogData.map((post) => (
                    <BlogCard post={post} key={post._id} />
                ))}
            </Row>
        );
    }
    if (category) {
        content = (
            <Row className="mx-4">
                {data.map((post) => (
                    <BlogCard post={post} key={post._id} />
                ))}
            </Row>
        );
    }
    if (searchOption) {
        console.log(searchOption);
        const filteredData = data?.filter((singleData) => {
            // console.log(singleData.name.toLowerCase());
            return singleData.name.toLowerCase().includes(searchOption.toLowerCase());
        });
        console.log(filteredData);
       

        filteredData?.length === 0
            ? (content = <Error />)
            : (content = (
                  <Row className="mx-4">
                      {filteredData?.map((post) => {
                          // console.log(post);
                          return <BlogCard post={post} key={post._id} />;
                      })}
                  </Row>
              ));
    }

    if (!blogData && !category && !searchOption) {
        content = (
            <Row className="mx-4">
                {data.map((post) => (
                    <BlogCard post={post} key={post._id} />
                ))}
            </Row>
        );
    }

    return (
        <div className="posts">
            <div className="">
                <InputGroup className="w-50 mx-auto my-5 d-flex align-items-center justify-content-center">
                    <Form.Control
                        onChange={(e) => {
                            console.log(e.target.value);
                            searchHandler(e.target.value);
                        }}
                        placeholder="Search by Name"
                        type="text"
                        aria-label="Search"
                    />
                    <Button className="searchButton">Search</Button>
                </InputGroup>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default AllBlogs;
