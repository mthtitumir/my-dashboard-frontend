import { TProject } from "../../types";
import useFetchData from "../../utils/fetchData";
import Headline from "../ui/Headline";

const AllProjects = () => {
  const { data, loading, error } = useFetchData<TProject[]>(
    `${import.meta.env.VITE_BACKEND_URL}/blogs`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Headline text="All Projects" />
      <div>
        {data?.map((project, index) => (
          <div key={index} className="flex gap-5 items-center">
            <h1>{index + 1} .</h1>
            <h1>{project.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
