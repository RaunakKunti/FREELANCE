import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/Auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokeninLocalStorage, API } = useAuth(); // Get the function from context

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log(response);
      const res_data = await response.json();
      console.log("response from server", res_data.extraDetails);

      if (response.ok) {
        // console.log("token: ", res_data);
        // localStorage.setItem("token", res_data.token); // Store the token in local storage
        storeTokeninLocalStorage(res_data.token); // Store the token in local storage
        setData({
          email: "",
          password: "",
        });
        toast.success("Login successful!");
        navigate("/"); // Redirect to home page after successful login
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              value={data.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
};
