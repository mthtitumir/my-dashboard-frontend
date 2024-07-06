import { JwtPayload } from "jwt-decode";
import { TBlog, TExperience, TProject } from "../../types";
import useFetchData from "../../utils/fetchData";
import { verifyToken } from "../../utils/jwt";

const DashboardHome = () => {
  const { data: blogData } = useFetchData<TBlog[]>(
    `${import.meta.env.VITE_BACKEND_URL}/blogs`
  );
  const { data: projectData } = useFetchData<TProject[]>(
    `${import.meta.env.VITE_BACKEND_URL}/projects`
  );
  const { data: experienceData } = useFetchData<TExperience[]>(
    `${import.meta.env.VITE_BACKEND_URL}/experiences`
  );
  const addData = [
    {
      sign: "+",
      path: "/dashboard/add-new-blog",
      name: "New Blog",
    },
    {
      sign: "+",
      path: "/dashboard/add-new-project",
      name: "New Project",
    },
    {
      sign: "+",
      path: "/dashboard/add-new-experience",
      name: "New Experience",
    },
  ];
  const userData: JwtPayload & { name: string } = verifyToken(
    localStorage.getItem("token")
  ) as JwtPayload & { name: string };

  const data = [
    {
      name: "Blogs",
      quantity: blogData?.length,
    },
    {
      name: "Projects",
      quantity: projectData?.length,
    },
    {
      name: "Experiences",
      quantity: experienceData?.length,
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-xl md:text-3xl text-slate-200 pb-3">
          Welcome {userData?.name}💐
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-y-8 md:gap-8 mt-5">
        {addData?.map((d) => (
          <div
            key={d.name}
            className="col-span-12 md:col-span-4 border-main border-hover p-5 rounded-md"
          >
            <a href={d.path}>
              <h1 className="text-3xl text-slate-200 text-center">{d.sign}</h1>
              <h1 className="text-xl text-slate-200 text-center">{d.name}</h1>
            </a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-y-8 md:gap-8 mt-5">
        {data?.map((d) => (
          <div
            key={d.name}
            className="col-span-12 md:col-span-4 border-main border-hover p-5 rounded-md"
          >
            <h1 className="text-3xl text-slate-200 text-center">
              {d.quantity}
            </h1>
            <h1 className="text-xl text-slate-200 text-center">
              Your {d.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
