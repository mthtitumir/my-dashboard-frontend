import { TProject } from "../../types";
import Headline from "../ui/Headline";
import axios from "axios";
import { useEffect, useState } from "react";

const AllProjects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/projects`
        );
        setProjects(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Headline text="All Projects" />
      <div>
        {projects?.map((project, index) => (
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
