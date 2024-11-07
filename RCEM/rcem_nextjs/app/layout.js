// app/RootLayout.js
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Navbar from "./components/navbar";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";  // Import Toastify
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState(null);

  // Routes where the navbar should be hidden
  const hideNavbarRoutes = ["/auth/login", "/auth/signup", "/auth/forget-password"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  useEffect(() => {
    // Check for the authData cookie
    const authData = Cookies.get("authData");
    if (authData) {
      const { role: userRole } = JSON.parse(authData); // Parse the role from cookie
      setRole(userRole);

      // Redirect based on role if on login/signup pages
      if (pathname === "/auth/login" || pathname === "/auth/signup") {
        if (userRole === "admin") {
          router.push("/admin/dashboard");
        } else if (userRole === "student") {
          router.push("/student/book-equipments");
        }
      }

      // Restrict access to admin and student routes
      if (userRole === "admin" && pathname.startsWith("/student")) {
        toast.error("Access denied: Admins cannot access student pages.");
        router.push("/admin/dashboard"); // Redirect admin to dashboard if trying to access student pages
      } else if (userRole === "student" && pathname.startsWith("/admin")) {
        toast.error("Access denied: Students cannot access admin pages.");
        router.push("/student/book-equipments"); // Redirect student to bookings if trying to access admin pages
      }
    } else {
      // Redirect unauthenticated users to login page if they are trying to access restricted routes
      if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
        toast.error("Please log in to access this page.");
        router.push("/auth/login");
      }
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
        {!shouldHideNavbar && <Navbar />}
        <div className="bg-white text-black">{children}</div>
      </body>
    </html>
  );
}
