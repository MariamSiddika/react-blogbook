import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="adminDash container">
      <h3 className='dashTitle ms-5 mt-3 fw-bold'>Dashboard</h3>
      <div className='row g-5 py-5 mx-auto mt-2 mb-5 px-5'>

        {/* Blog Card */}
        <div className="col-lg-6 col-12">
          <Link className='p-0 m-0' style={{ textDecoration: "none" }} to='/admin/blogs'>
            <div className="card admin-card adminBlogCard shadow p-4">
              <div className="card-body ">
                <h5 className="card-title text-center">Total Blogs</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className='blogNum text-center'>145</h1>
                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-house"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* User Card */}
        <div className="col-lg-6 col-12">
          <Link className='p-0 m-0' style={{ textDecoration: "none" }} to='/admin/users'>
            <div className="card admin-card adminUserCard shadow p-4">
              <div className="card-body">
                <h5 className="card-title text-center">All Bloggers</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className='userNum text-center'>86</h1>
                    <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;