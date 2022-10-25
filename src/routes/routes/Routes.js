import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])