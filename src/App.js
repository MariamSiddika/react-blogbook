import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Home from "./pages/Home/Home";
// import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import Single from "./pages/Single/Single";
// import Main from "./layout/Main";
import AboutPage from "./pages/AboutPage/AboutPage";
import Write from "./components/Write/Write";
import AdminDashboard from "./adminComponent/AdminDashboard/AdminDashboard";
import AdminPosts from "./adminComponent/AdminPosts/AdminPosts";
import AdminUsers from "./adminComponent/AdminUsers/AdminUsers";
import UserProfile from "./components/UserProfile/UserProfile";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavComponent from "./components/NavComponent/NavComponent";
import Footer from "./components/Footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    });
    return (
        <div>
            <NavComponent></NavComponent>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route
                    path="/write"
                    element={
                        <PrivateRoute>
                            <Write />
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="/settings" element={<Settings></Settings>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/profile/:userId" element={<UserProfile></UserProfile>}></Route>
                <Route path="/allBlogs" element={<AllBlogs></AllBlogs>}></Route>
                <Route path="/admin" element={<AdminDashboard></AdminDashboard>}></Route>
                <Route path="/admin/blogs" element={<AdminPosts></AdminPosts>}></Route>
                <Route path="/admin/users" element={<AdminUsers></AdminUsers>}></Route>
                <Route path="/single/:postId" element={<Single></Single>}></Route>
                <Route path="/*" element={<Error></Error>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
