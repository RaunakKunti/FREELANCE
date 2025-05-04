import React from "react";
import { Outlet, NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../../Store/Auth.jsx";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("Admin Layout", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user.isadmin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-300"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-300"
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="../services"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-300"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-300"
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
