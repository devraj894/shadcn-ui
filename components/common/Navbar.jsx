"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaBars,
  FaTimes,
  FaHome,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-white to-gray-50 border-b shadow-sm px-6 py-4">
      <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
        </div>

        <button className="p-2 rounded-full hover:bg-indigo-100 transition">
          <FaBell className="w-5 h-5 text-gray-700" />
        </button>

        <Avatar className="shadow-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-indigo-100 min900:hidden transition"
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5 text-gray-700" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/25 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-white border-r shadow-lg z-20 p-5 space-y-4"
          >
            <MobileNavItem href="/" icon={<FaHome />} label="Dashboard" />
            <MobileNavItem
              href="/analytics"
              icon={<FaChartBar />}
              label="Analytics"
            />
            <MobileNavItem href="#" icon={<FaBell />} label="Notifications" />
            <MobileNavItem href="#" icon={<FaCog />} label="Settings" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 font-medium hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-500 transition"
    >
      <span className="p-2 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
        {icon}
      </span>
      {label}
    </Link>
  );
}
