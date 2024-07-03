import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../components/credentials/Login";
import AllProjects from "../components/project/AllProjects";
import AllBlogsPage from "../components/blog/AllBlogs";
import AddNewBlog from "../components/blog/AddNewBlog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-projects",
        element: <AllProjects />
      },
      {
        path: "all-blogs",
        element: <AllBlogsPage />
      },
      {
        path: "add-new-blog",
        element: <AddNewBlog />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default Router;
