"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const errors = {
      username: formData.username ? "" : "Username is required",
      password: formData.password ? "" : "Password is required",
      confirmPassword: formData.confirmPassword
        ? formData.confirmPassword !== formData.password
          ? "Passwords do not match"
          : ""
        : "Please confirm your password",
      role: formData.role ? "" : "Role selection is required",
    };
    setFormErrors(errors);

    // Return false if there are any errors
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return; // Don't submit the form if validation fails
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signUP",
        {
          username: formData.username,
          password: formData.password,
          role: formData.role,
        }
      );

      if (response.data.success) {
        toast.success("Account created Successfully");

        router.push("/admin/dashboard");
      } else {
        alert(response.data.message);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up. Please try again later.");

    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 bg-white">
        <div className="w-1/2 p-8 border-r border-gray-300">
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Username"
              />
              {formErrors.username && (
                <p className="text-red-500 text-sm">{formErrors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm">{formErrors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Confirm Password"
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              {formErrors.role && (
                <p className="text-red-500 text-sm">{formErrors.role}</p>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800"
              >
                Sign Up
              </button>
            </div>

            <div>
              <Link
                href="/auth/login"
                className="text-sm text-blue-500 hover:underline"
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400">
              Welcome to the Recreation Center!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
