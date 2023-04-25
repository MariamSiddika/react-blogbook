import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import Single from "./pages/Single/Single";
import Main from "./layout/Main";
import AboutPage from "./pages/AboutPage/AboutPage";
import Write from "./components/Write/Write";
import AdminDashboard from "./adminComponent/AdminDashboard/AdminDashboard";
import AdminPosts from "./adminComponent/AdminPosts/AdminPosts";
import AdminUsers from "./adminComponent/AdminUsers/AdminUsers";
import UserProfile from "./components/UserProfile/UserProfile";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import './App.css';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <AboutPage></AboutPage>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/write',
          element:
            <PrivateRoute>
              <Write></Write>
            </PrivateRoute>
        },
        {
          path: '/single/:postId',
          element: <Single></Single>
        },
        {
          path: '/settings',
          element: 
          <PrivateRoute>
              <Settings></Settings>
            </PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/admin',
          element: <AdminDashboard></AdminDashboard>
        },
        {
          path: '/admin/blogs',
          element: <AdminPosts></AdminPosts>
        },
        {
          path: '/admin/users',
          element: <AdminUsers></AdminUsers>
        },
        {
          path: '/profile/:userId',
          element: 
          <PrivateRoute>
              <UserProfile></UserProfile>
            </PrivateRoute>
        },
        {
          path: '/allBlogs',
          element: <AllBlogs></AllBlogs>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  return (
    <div>
      {
        isLoading ? (<Loader></Loader>) : (
          <RouterProvider router={router}></RouterProvider>
        )
      }
    </div>
  );
}

export default App;
