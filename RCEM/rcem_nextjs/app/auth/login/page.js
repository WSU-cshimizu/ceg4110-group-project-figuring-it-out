"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-toastify"; // Assuming you're using toast for notifications

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    role: "",
  });
  const router = useRouter(); // Initialize the router

  // Handle form validation
  const validateForm = () => {
    const errors = {
      username: username ? "" : "Username is required",
      password: password ? "" : "Password is required",
      role: role ? "" : "Please select a role",
    };
    setFormErrors(errors);

    // Return false if there are any errors
    return !Object.values(errors).some((error) => error);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form before sending the request
    if (!validateForm()) {
      setLoading(false);
      return; // Don't submit the form if validation fails
    }

    try {
      // Make API request to login
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
          role, // Use selected role here
        }
      );

      // Log response for debugging
      console.log("API Response:", response);

      if (response.data.success) {
        // Store the token and role in a cookie with a meaningful expiration time (1 day)
        Cookies.set(
          "authData",
          JSON.stringify({
            token: response.data.token,
            role: response.data.data.role,
          }),
          { expires: 1 }
        );

        toast.success("Login Success!");

        // Redirect based on role
        if (role === "admin") {
          router.push("/admin/dashboard"); // Redirect admin to dashboard
        } else if (role === "student") {
          router.push("/student/book-equipments"); // Redirect student to booking page
        }
      } else {
        setError(response.data.message || "Login failed");
        toast.error(
          "Login failed: " + (response.data.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 bg-white">
        <div className="w-1/2 p-8 border-r border-gray-300">
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">Login</h1>
          <p className="mb-4 text-gray-700">
            To log in, please enter your email address, password, and select
            your role.
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Email/Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Email/username"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm">{formErrors.password}</p>
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              {formErrors.role && (
                <p className="text-red-500 text-sm">{formErrors.role}</p>
              )}
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <Link href="/auth/signup">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400"
                >
                  Create New Account
                </button>
              </Link>
            </div>

            <div>
              <Link
                href="/forget-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forget Password?
              </Link>
            </div>
          </form>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400">Not sure</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
