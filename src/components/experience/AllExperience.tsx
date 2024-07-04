import Headline from "../ui/Headline";
import { TExperience } from "../../types";
import useFetchData from "../../utils/fetchData";

const AllExperiences = () => {
  const { data, loading, error } = useFetchData<TExperience[]>(
    `${import.meta.env.VITE_BACKEND_URL}/experiences`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Headline text="All Experiences" />
      <div>
        {data?.map((ex, index) => (
          <div key={index} className="flex gap-5 items-center">
            <h1>{index + 1} .</h1>
            <h1>{ex.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllExperiences;
