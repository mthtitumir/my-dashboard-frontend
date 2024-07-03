"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headline from "../ui/Headline";

type BlogFormInputs = {
  title: string;
  banner: string;
  tags: string;
  shortDesc: string;
  longDesc?: string;
  content: string;
};

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  banner: yup.string().required("Banner is required"),
  tags: yup.string().required("Tags are required"),
  shortDesc: yup.string().required("Short description is required"),
  longDesc: yup.string(),
  content: yup.string().required("Content is required"),
});

const PostBlogForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onSubmit = async (data: BlogFormInputs) => {
    const processedData = {
      ...data,
      tags: data.tags.split(",").map((tag) => tag.trim()),
    };
    console.log(processedData);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blogs`,
        processedData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/dashboard/all-blogs"); // Redirect to the homepage or blogs page after successful submission
    } catch (error) {
      console.error("Failed to submit blog post", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 rounded-md bg-inherit">
      <Headline text="Post A New Blog" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-md font-medium ">
            Title
          </label>
          <input
            id="title"
            placeholder="Write the title of the blog"
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
          <label htmlFor="banner" className="block text-md font-medium ">
            Banner
          </label>
          <input
            id="banner"
            placeholder="Give the banner link"
            {...register("banner")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.banner ? "border-red-500" : ""
            }`}
          />
          {errors.banner && (
            <p className="text-red-500 text-sm">{errors.banner.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block text-md font-medium ">
            Tags
          </label>
          <input
            id="tags"
            placeholder="Write the tags (separated with comma)"
            {...register("tags")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.tags ? "border-red-500" : ""
            }`}
          />
          {errors.tags && (
            <p className="text-red-500 text-sm">{errors.tags.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="shortDesc" className="block text-md font-medium">
            Short Description
          </label>
          <input
            id="shortDesc"
            placeholder="Write long description"
            {...register("shortDesc")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.shortDesc ? "border-red-500" : ""
            }`}
          />
          {errors.shortDesc && (
            <p className="text-red-500 text-sm">{errors.shortDesc.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="longDesc" className="block text-md font-medium">
            Long Description
          </label>
          <textarea
            id="longDesc"
            placeholder="Write long description"
            {...register("longDesc")}
            className="mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-md font-medium">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write full content"
            {...register("content")}
            className={`bg-inherit border-main mt-1 px-3 py-2 block w-full rounded-md shadow-sm${
              errors.content ? "border-red-500" : ""
            }`}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBlogForm;
