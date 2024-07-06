import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/ui/DashboardSidebar";
import { verifyToken } from "../utils/jwt";
import ProfileToggle from "../components/ui/ProfileToggle";

const DashboardLayout = () => {
  const token = localStorage.getItem("token");
  const data = verifyToken(token as string);
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col gap-3 items-center justify-center text-red-600 text-2xl">
        <h1>You Are Unauthorized 👿</h1>
        <a href="/login">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none">
            LOGIN
          </button>
        </a>
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
          <ProfileToggle />
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
