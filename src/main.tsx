import React from "react";
import ReactDOM from "react-dom/client";
import App from "./page/Home";
import CssBaseline from "@mui/material/CssBaseline";

import { Dashboard } from "@mui/icons-material";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { BlogArticle } from "./page/BlogArticle";
import {
    createTheme,
    GlobalStyles,
    PaletteOptions,
    ThemeProvider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { About } from "./page/About";
import Courses from "./page/Courses";
import "./index.css";

const BlogWrapper = () => {
    const { id }: any = useParams();
    return <BlogArticle id={id} />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },

    {
        path: "/posts",
        element: <App />,
    },

    {
        path: "/courses",
        element: <Courses />,
    },
    {
        path: "/blog/:id",
        element: <BlogWrapper />,
    },
]);

const theme = createTheme({
    palette: {
        primary: {
            main: "#222",
        },
        secondary: {
            main: "#f7f",
        },
        background: {
            default: "#111",
            paper: "#222",
        },
        text: {
            primary: "#fff",
        },
    },
});



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* <CssBaseline />
        <GlobalStyles
            styles={{
                body: { backgroundColor: "teal" },
            }}
        /> */}
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
