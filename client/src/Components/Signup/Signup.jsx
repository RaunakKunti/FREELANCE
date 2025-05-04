import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/Auth";
import { toast } from "react-toastify";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokeninLocalStorage, API } = useAuth(); // Get the function from context
  const handleChange = (e) => {
    // console.log(e);

    //from which field data is comming these are html attribute
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    //connect frontend with backend
    try {
      const response = await fetch("${API}/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("response from server", res_data.extraDetails);

      // Check if the response is ok (status code 200-299)
      if (response.ok) {
        storeTokeninLocalStorage(res_data.token); // Store the token in local storage
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successful!");
        navigate("/"); // Redirect to login page after successful registration
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div>
          <img
            src="/assets/signup.png" // Make sure this image exists in public/assets
            alt="Signup Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Signup Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Create Account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="phone no."
                autoComplete="off"
                required
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                value={user.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
