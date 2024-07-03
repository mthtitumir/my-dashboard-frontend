import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headline from "../ui/Headline";
import toast from "react-hot-toast";

type ProjectFormInputs = {
  project_id: number;
  title: string;
  description: string;
  contributions: string;
  duration: string;
  technologies_used: string;
  live_url: string;
  github_client: string;
  github_server: string;
  image_url: string;
  stack: string;
  team_size?: number;
  status: string;
};

const schema = yup.object().shape({
  project_id: yup.number().required("Project ID is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contributions: yup.string().required("Contributions is required"),
  duration: yup.string().required("Duration is required"),
  technologies_used: yup.string().required("Technologies is required"),
  live_url: yup.string().required("Live URL is required"),
  github_client: yup.string().required("GitHub client URL is required"),
  github_server: yup.string().required("GitHub server URL is required"),
  image_url: yup.string().required("Image URL is required"),
  stack: yup.string().required("Stack is required"),
  team_size: yup.number(),
  status: yup.string().required("Status is required"),
});

const AddNewProject: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onSubmit = async (data: ProjectFormInputs) => {
    const processedData = {
      ...data,
      contributions: data.contributions
        .split(",")
        .map((contribution) => contribution.trim()),
      technologies_used: data.technologies_used
        .split(",")
        .map((tech) => tech.trim()),
    };
    console.log(processedData);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/projects`, data, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res);      
      if (res.status == 200) {
        toast.success("New project added successfully");
        navigate("/dashboard/all-projects");
      } else toast.error(res.data.message);
    } catch (error) {
      console.error("Failed to submit project", error);
      toast.error("Failed to add project!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto rounded-md bg-inherit">
      <Headline text="Add A New Project" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="project_id" className="block text-md font-medium">
            Project ID
          </label>
          <input
            id="project_id"
            placeholder="Enter project ID"
            {...register("project_id")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.project_id ? "border-red-500" : ""
            }`}
          />
          {errors.project_id && (
            <p className="text-red-500 text-sm">{errors.project_id.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-md font-medium">
            Title
          </label>
          <input
            id="title"
            placeholder="Enter project title"
            {...register("title")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-md font-medium">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter project description"
            {...register("description")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="contributions" className="block text-md font-medium">
            Contributions
          </label>
          <input
            id="contributions"
            placeholder="Enter contributions separated by commas"
            {...register("contributions")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.contributions ? "border-red-500" : ""
            }`}
          />
          {errors.contributions && (
            <p className="text-red-500 text-sm">
              {errors.contributions.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-md font-medium">
            Duration
          </label>
          <input
            id="duration"
            placeholder="Enter project duration"
            {...register("duration")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.duration ? "border-red-500" : ""
            }`}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="technologies_used"
            className="block text-md font-medium"
          >
            Technologies Used
          </label>
          <input
            id="technologies_used"
            placeholder="Enter technologies used separated by commas"
            {...register("technologies_used")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.technologies_used ? "border-red-500" : ""
            }`}
          />
          {errors.technologies_used && (
            <p className="text-red-500 text-sm">
              {errors.technologies_used.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="live_url" className="block text-md font-medium">
            Live URL
          </label>
          <input
            id="live_url"
            placeholder="Enter live URL"
            {...register("live_url")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.live_url ? "border-red-500" : ""
            }`}
          />
          {errors.live_url && (
            <p className="text-red-500 text-sm">{errors.live_url.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="github_client" className="block text-md font-medium">
            GitHub Client URL
          </label>
          <input
            id="github_client"
            placeholder="Enter GitHub client URL"
            {...register("github_client")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.github_client ? "border-red-500" : ""
            }`}
          />
          {errors.github_client && (
            <p className="text-red-500 text-sm">
              {errors.github_client.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="github_server" className="block text-md font-medium">
            GitHub Server URL
          </label>
          <input
            id="github_server"
            placeholder="Enter GitHub server URL"
            {...register("github_server")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.github_server ? "border-red-500" : ""
            }`}
          />
          {errors.github_server && (
            <p className="text-red-500 text-sm">
              {errors.github_server.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image_url" className="block text-md font-medium">
            Image URL
          </label>
          <input
            id="image_url"
            placeholder="Enter image URL"
            {...register("image_url")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.image_url ? "border-red-500" : ""
            }`}
          />
          {errors.image_url && (
            <p className="text-red-500 text-sm">{errors.image_url.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="stack" className="block text-md font-medium">
            Stack
          </label>
          <input
            id="stack"
            placeholder="Enter stack"
            {...register("stack")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.stack ? "border-red-500" : ""
            }`}
          />
          {errors.stack && (
            <p className="text-red-500 text-sm">{errors.stack.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="team_size" className="block text-md font-medium">
            Team Size
          </label>
          <input
            id="team_size"
            placeholder="Enter team size"
            {...register("team_size")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.team_size ? "border-red-500" : ""
            }`}
          />
          {errors.team_size && (
            <p className="text-red-500 text-sm">{errors.team_size.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-md font-medium">
            Status
          </label>
          <input
            id="status"
            placeholder="Enter status"
            {...register("status")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.status ? "border-red-500" : ""
            }`}
          />
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProject;
