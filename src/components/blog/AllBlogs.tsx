import Headline from "../ui/Headline";
import useFetchData from "../../utils/fetchData";
import { TBlog } from "../../types";

const AllBlogsPage = () => {
  const { data, loading, error } = useFetchData<TBlog[]>(
    `${import.meta.env.VITE_BACKEND_URL}/blogs`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Headline text="All Blogs" />
      <div>
        {data?.map((blog, index) => (
          <div key={index} className="flex gap-5 items-center">
            <h1>{index + 1} .</h1>
            <h1>{blog.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
