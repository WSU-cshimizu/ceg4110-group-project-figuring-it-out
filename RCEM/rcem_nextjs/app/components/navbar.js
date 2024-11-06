import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#026937] p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Recreation Center
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="../student" className="text-gray-300 hover:text-white">
              Book Equipments
            </Link>
          </li>
          <li>
            <Link href="../admin/equipments" className="text-gray-300 hover:text-white">
              Equipment Bookings
            </Link>
          </li>
         
          <li>
            <Link
              href="../student/damage-reporting"
              className="text-gray-300 hover:text-white"
            >
              Report Damage
            </Link>
          </li>
          <li>
            <Link
              href="../admin/dashboard"
              className="text-gray-300 hover:text-white"
            >
              Equipment Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="../student/booking-history"
              className="text-gray-300 hover:text-white"
            >
              Booking History
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white block">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white block"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
