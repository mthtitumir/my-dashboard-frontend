import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/ui/DashboardSidebar";
import { verifyToken } from "../utils/jwt";

const DashboardLayout = () => {
  const token = localStorage.getItem("token");
  const data = verifyToken(token as string);
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-2xl">
        You Are Unauthorized 👿
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8 text-gray-400 c-auto ">
      <div className="grid grid-cols-10 gap-6">
        {/* left box  */}
        <DashboardSidebar />

        {/* right box  */}
        <div className="col-span-12 lg:col-span-8 bg-[#0A192F] rounded-lg lg:rounded-lg border-main h-[calc(100vh-32px)] lg:h-[calc(100vh-64px)] flex flex-col relative">
          {/* navbar  */}
          {/* <ProfileToggle /> */}
          {/* <div className="flex-shrink-0">
            <Navbar position="top" />
          </div> */}
          <div className="flex-grow p-8 overflow-auto ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
