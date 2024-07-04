import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../components/credentials/Login";
import AllProjects from "../components/project/AllProjects";
import AllBlogsPage from "../components/blog/AllBlogs";
import AddNewBlog from "../components/blog/AddNewBlog";
import AddNewProject from "../components/project/AddNewProject";
import AddNewExperience from "../components/experience/AddNewExperience";
import AllExperiences from "../components/experience/AllExperience";
import DashboardHome from "../components/ui/DashboardHome";

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
        path: "",
        element: <DashboardHome />
      },
      {
        path: "all-projects",
        element: <AllProjects />
      },
      {
        path: "all-blogs",
        element: <AllBlogsPage />
      },
      {
        path: "all-experiences",
        element: <AllExperiences />
      },
      {
        path: "add-new-blog",
        element: <AddNewBlog />
      },
      {
        path: "add-new-project",
        element: <AddNewProject />
      },
      {
        path: "add-new-experience",
        element: <AddNewExperience />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default Router;
