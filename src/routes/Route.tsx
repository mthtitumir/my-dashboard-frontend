import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../components/credentials/Login";

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
        path: "all-blogs",
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default Router;
