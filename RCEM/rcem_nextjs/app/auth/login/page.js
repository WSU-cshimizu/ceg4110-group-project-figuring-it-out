"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make API request to login
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
        role:"admin"
      });

      // Handle successful login
      if (response.data.success) {
        // Store the token in localStorage or cookies (for session persistence)
        localStorage.setItem("token", response.data.token);

        // Redirect or update UI after successful login
        console.log("Login successful:", response.data);
        alert("Login successful!");
        // Add redirect logic if needed, e.g., router.push("/dashboard")
      } else {
        // Handle login error from API
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
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
            To log in, please enter your email address and password.
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
                required
              />
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
                required
              />
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

              <Link href="/signup">
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
