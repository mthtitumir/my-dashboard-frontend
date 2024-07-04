import { icons } from "../../icons";
import { useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const sidebarData = [
    {
      icon: icons.dashboard.dashboard,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: icons.dashboard.blogs,
      name: "All Blogs",
      path: "/dashboard/all-blogs",
    },
    {
      icon: icons.dashboard.projects,
      name: "All Projects",
      path: "/dashboard/all-projects",
    },
    {
      icon: icons.dashboard.experiences,
      name: "Experiences",
      path: "/dashboard/all-experiences",
    },
    {
      icon: icons.dashboard.newBlog,
      name: "New Blog",
      path: "/dashboard/add-new-blog",
    },
    {
      icon: icons.dashboard.newProject,
      name: "New Project",
      path: "/dashboard/add-new-project",
    },
    {
      icon: icons.dashboard.newExperience,
      name: "New Exp.",
      path: "/dashboard/add-new-experience",
    },
    {
      icon: icons.dashboard.home,
      name: "Go Home",
      path: "/",
    },
  ];
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="hidden lg:block lg:col-span-2 bg-[#0A192F] rounded-lg p-8 border-main h-[calc(100vh-64px)] sticky top-12 z-50">
      <div>
        <h1 className="text-center text-xl text-white ">M. T. H. TITUMIR</h1>
      </div>
      <div className="h-px bg-gray-500 mt-1 mb-4"></div>
      <div className="flex flex-col gap-3">
        {sidebarData?.map((sd, index) => (
          <a key={index} href={sd.path}>
            <div
              key={index}
              className={`${
                sd.path === pathname
                  ? "text-sky-500 border border-sky-500"
                  : "text-inherit border-main"
              } text-sm md:text-sm lg:text-md uppercase tracking-wider flex items-center gap-2 rounded-sm px-3 py-1`}
            >
              <sd.icon size={20} />
              <h1>{sd.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
