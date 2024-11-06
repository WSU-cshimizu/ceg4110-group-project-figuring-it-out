// app/RootLayout.js
"use client";

import localFont from "next/font/local";
import "./globals.css";
import DashboardLayout from "./components/navigationbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [first, setFirst] = useState(null);

  // Check if current route is in the list of routes where Navbar should be hidden
  const hideNavbarRoutes = ["/auth/login", "/auth/signup", "/auth/forget-password"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!shouldHideNavbar && <Navbar />}
        <div className=" bg-white text-black">{children}</div>
      </body>
    </html>
  );
}
