// app/RootLayout.js
"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [first, setFirst] = useState(null);

  // Check if current route is in the list of routes where Navbar should be hidden
  const hideNavbarRoutes = ["/auth/login", "/auth/signup", "/auth/forget-password"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!shouldHideNavbar && <Navbar />}
        <div>{children}</div>
      </body>
    </html>
  );
}
