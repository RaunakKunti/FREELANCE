import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../Store/Auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Adminupdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { AuthorizationToken, API } = useAuth();
  const params = useParams(); // Get the userId from the URL parameters

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleUpdate = async (userId) => {
    try {
      const response = await fetch(`${API}/api/admin/users/edit/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log("user after update", data);

      setData(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated successfully!");
      } else {
        toast.error("Failed to update user!");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  useEffect(() => {
    handleUpdate();
  }, []);
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="username"
                required
                value={data.username}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="phone"
                name="phone"
                required
                value={data.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
