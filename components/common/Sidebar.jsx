import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHome, FaChartBar, FaBell, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden min900:flex flex-col w-64 h-full fixed left-0 top-0 border-r border-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-md">
      {/* Avatar Section */}
      <div className="flex items-center gap-4 p-5 border-b border-gray-200">
        <Avatar className="shadow-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5 space-y-3">
        <NavItem
          href="/"
          icon={<FaHome />}
          label="Dashboard"
          bgColor="bg-blue-100"
        />
        <NavItem
          href="/analytics"
          icon={<FaChartBar />}
          label="Analytics"
          bgColor="bg-green-100"
        />
      </nav>
    </aside>
  );
}

function NavItem({ href, icon, label, bgColor }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-500 transition`}
    >
      <span
        className={`p-2 rounded-full text-gray-600 flex items-center justify-center ${bgColor}`}
      >
        {icon}
      </span>
      {label}
    </Link>
  );
}
