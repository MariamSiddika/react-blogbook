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
import Write from "./components/Write/Write";
import Main from "./layout/Main";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
          element: <Write></Write>
        },
        {
          path: '/single',
          element: <Single></Single>
        },
        {
          path: '/settings',
          element: <Settings></Settings>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
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
