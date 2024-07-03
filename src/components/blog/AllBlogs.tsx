import axios from "axios";
import { useEffect, useState } from "react";
import Headline from "../ui/Headline";
import { TBlog } from "../../types";

const AllBlogsPage = () => {
    const [blogs, setBlogs] = useState<TBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/blogs`
          );
          setBlogs(response?.data?.data);
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
      <Headline text="All Blogs" />
      <div>
        {
          blogs?.map((blog, index) => (
            <div key={index} className="flex gap-5 items-center">
              <h1>{index+1} .</h1>
              <h1>{blog.title}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllBlogsPage