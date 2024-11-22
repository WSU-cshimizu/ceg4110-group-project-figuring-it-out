import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Get the user's authentication data from the cookie
    const authData = Cookies.get("authData");
    if (authData) {
      const parsedData = JSON.parse(authData);
      setRole(parsedData.role);
      setIsAuthenticated(true); // User is logged in
    }
  }, []);

  const logout = () => {
    Cookies.remove("authData"); // Remove the authentication cookie
    setIsAuthenticated(false);
    setRole(null); // Reset role
  };

  return (
    <nav className="bg-[#026937] p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Recreation Center
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>

          {/* Show Login and Signup buttons if not authenticated */}
          {!isAuthenticated ? (
            <>
              <li>
                <Link href="/auth/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-gray-300 hover:text-white">
                  Signup
                </Link>
              </li>
            </>
          ) : (
            // Show role-based links if authenticated
            <>
              {role === "student" && (
                <>
                  <li>
                    <Link href="/student/book-equipments" className="text-gray-300 hover:text-white">
                      Book Equipments
                    </Link>
                  </li>
                  <li>
                    <Link href="/student/damage-reporting" className="text-gray-300 hover:text-white">
                      Report Damage
                    </Link>
                  </li>
                  <li>
                    <Link href="/student/booking-history" className="text-gray-300 hover:text-white">
                      Booking History
                    </Link>
                  </li>
                </>
              )}

              {role === "admin" && (
                <>
                  <li>
                    <Link href="/admin/equipments" className="text-gray-300 hover:text-white">
                      Equipment Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard" className="text-gray-300 hover:text-white">
                      Equipment Dashboard
                    </Link>
                  </li>
                </>
              )}
              {/* Logout Link */}
              <li>
                <Link href="/auth/login" className="text-gray-300 hover:text-white" onClick={() => logout()}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4 bg-[#026937]">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            {/* Show Login and Signup buttons if not authenticated */}
            {!isAuthenticated ? (
              <>
                <li>
                  <Link href="/auth/login" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              // Show role-based links if authenticated
              <>
                {role === "student" && (
                  <>
                    <li>
                      <Link href="/student/book-equipments" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                        Book Equipments
                      </Link>
                    </li>
                    <li>
                      <Link href="/student/damage-reporting" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                        Report Damage
                      </Link>
                    </li>
                    <li>
                      <Link href="/student/booking-history" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                        Booking History
                      </Link>
                    </li>
                  </>
                )}

                {role === "admin" && (
                  <>
                    <li>
                      <Link href="/admin/equipments" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                        Equipment Bookings
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/dashboard" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                        Equipment Dashboard
                      </Link>
                    </li>
                  </>
                )}

                {/* Logout Link */}
                <li>
                  <Link href="/auth/login" className="text-gray-300 hover:text-white" onClick={() => logout()}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
