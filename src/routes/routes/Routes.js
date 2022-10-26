import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Courses from "../../Components/Courses/Courses"
import Course from "../../Components/Course/Course"
import Faq from "../../Components/FAQ/Faq"
import Blogs from "../../Components/Blogs/Blogs";
import Login from "../../Components/Log-In/Login";
import SignUp from "../../Components/Sign-Up/SignUp";

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
                    return fetch('http://localhost:5000/allcourses');
                },
                element: <Courses></Courses>,
            },

            {
                path: "/course/:id",
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`);
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
            }
        ]
    }
])