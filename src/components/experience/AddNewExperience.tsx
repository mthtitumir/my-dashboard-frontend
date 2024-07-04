"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headline from "../ui/Headline";
import toast from "react-hot-toast";

type ExperienceFormInputs = {
  title: string;
  company: string;
  company_website: string;
  location: string;
  job_location: string;
  duration: string;
  responsibilities: string;
  technologies: string;
};

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  company: yup.string().required("Company is required"),
  company_website: yup
    .string()
    .url("Enter a valid URL")
    .required("Company website is required"),
  location: yup.string().required("Location is required"),
  job_location: yup.string().required("Job location is required"),
  duration: yup.string().required("Duration is required"),
  responsibilities: yup.string().required("Responsibilities are required"),
  technologies: yup.string().required("Technologies are required"),
});

const AddNewExperience: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExperienceFormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onSubmit = async (data: ExperienceFormInputs) => {
    const processedData = {
      ...data,
      responsibilities: data.responsibilities
        .split(",")
        .map((resp) => resp.trim()),
      technologies: data.technologies.split(",").map((tech) => tech.trim()),
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/experiences`,
        processedData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Experience added successfully");
        navigate("/dashboard/all-experiences");
      } else toast.error(res.data.message);
    } catch (error) {
      console.error("Failed to submit experience", error);
      toast.error("Failed to add experience!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto rounded-md bg-inherit">
      <Headline text="Add New Experience" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-md font-medium ">
            Title
          </label>
          <input
            id="title"
            placeholder="Write the title of the experience"
            {...register("title")}
            className={`${errors.title ? "border-red-500" : ""}`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-md font-medium ">
            Company
          </label>
          <input
            id="company"
            placeholder="Company name"
            {...register("company")}
            className={`  ${errors.company ? "border-red-500" : ""}`}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="company_website"
            className="block text-md font-medium "
          >
            Company Website
          </label>
          <input
            id="company_website"
            placeholder="Company website link"
            {...register("company_website")}
            className={`  ${errors.company_website ? "border-red-500" : ""}`}
          />
          {errors.company_website && (
            <p className="text-red-500 text-sm">
              {errors.company_website.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-md font-medium">
            Location
          </label>
          <input
            id="location"
            placeholder="Location"
            {...register("location")}
            className={`  ${errors.location ? "border-red-500" : ""}`}
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="job_location" className="block text-md font-medium">
            Job Location
          </label>
          <input
            id="job_location"
            placeholder="Job location"
            {...register("job_location")}
            className={`  ${errors.job_location ? "border-red-500" : ""}`}
          />
          {errors.job_location && (
            <p className="text-red-500 text-sm">
              {errors.job_location.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-md font-medium">
            Duration
          </label>
          <input
            id="duration"
            placeholder="Duration"
            {...register("duration")}
            className={`  ${errors.duration ? "border-red-500" : ""}`}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="responsibilities"
            className="block text-md font-medium"
          >
            Responsibilities
          </label>
          <textarea
            id="responsibilities"
            placeholder="List responsibilities (separated with comma)"
            {...register("responsibilities")}
            className={`  ${errors.responsibilities ? "border-red-500" : ""}`}
          />
          {errors.responsibilities && (
            <p className="text-red-500 text-sm">
              {errors.responsibilities.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="technologies" className="block text-md font-medium">
            Technologies
          </label>
          <textarea
            id="technologies"
            placeholder="List technologies (separated with comma)"
            {...register("technologies")}
            className={`  ${errors.technologies ? "border-red-500" : ""}`}
          />
          {errors.technologies && (
            <p className="text-red-500 text-sm">
              {errors.technologies.message}
            </p>
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

export default AddNewExperience;
