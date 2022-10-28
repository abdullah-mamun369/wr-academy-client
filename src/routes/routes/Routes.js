import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Courses from "../../Components/Courses/Courses"
import Course from "../../Components/Course/Course"
import Faq from "../../Components/FAQ/Faq"
import Blogs from "../../Components/Blogs/Blogs";
import Login from "../../Components/Log-In/Login";
import SignUp from "../../Components/Sign-Up/SignUp";
import Checkout from "../../Components/Checkout/Checkout";
import PrivateRoute from "../private-routes/PrivateRoute";
import error404 from "../../Components/images/error.png"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/courses",
                loader: async () => {
                    return fetch('https://academy-data.vercel.app/allcourses');
                },
                element: <Courses></Courses>,
            },

            {
                path: "/course/:id",
                loader: async ({ params }) => {
                    return fetch(`https://academy-data.vercel.app/courses/${params.id}`);
                },
                element: <Course></Course>
            },

            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },

            {
                path: "/faq",
                element: <Faq></Faq>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/signup",
                element: <SignUp></SignUp>
            },

            {
                path: "/checkout/:id",
                loader: async ({ params }) => {
                    return fetch(`https://academy-data.vercel.app/courses/${params.id}`);
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },


        ]


    },
    {
        path: '*',
        element: <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="App">
                <header className="App-header">
                    <h1 className='error-text text-center text-success mb-5'>404 Error</h1>
                    <img src={error404} className="App-logo" alt="" />
                    <h2 className='text-secondary'>Please type a right address...</h2>
                </header>
            </div>
        </div>
    }
])