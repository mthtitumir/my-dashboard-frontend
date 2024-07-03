import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToastId = toast.loading("Logging in .......");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          email,
          password,
        }
      );
      const token = response?.data?.data?.accessToken;
      if (token) {
        toast.dismiss(loadingToastId);
        toast.success("Login successful!");
        localStorage.setItem("token", token);
        navigate("/dashboard");
        setEmail("");
        setPassword("");
      } else {
        toast.dismiss(loadingToastId);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-300">
      <div className="border-main p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border-main bg-inherit rounded-md shadow-sm outline-none focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border-main bg-inherit rounded-md shadow-sm focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
