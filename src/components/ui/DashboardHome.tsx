import { TBlog, TExperience, TProject } from "../../types";
import useFetchData from "../../utils/fetchData";

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
  
  return (
    <div>
      <h1>Blogs: {blogData?.length}</h1>
      <h1>Projects: {projectData?.length}</h1>
      <h1>Experience: {experienceData?.length}</h1>
    </div>
  );
};

export default DashboardHome;
