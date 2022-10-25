import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Courses from "../../Components/Courses/Courses"
import Course from "../../Components/Course/Course"
import Faq from "../../Components/FAQ/Faq"

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
                element: <Courses></Courses>
            },

            {
                path: "/course",
                element: <Course></Course>
            },

            {
                path: "/faq",
                element: <Faq></Faq>
            }
        ]
    }
])