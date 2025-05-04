import { useState } from "react";
import { useAuth } from "../../Store/Auth.jsx";
import { toast } from "react-toastify";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true); // default value for userData to be shown in the contact us page

  const { user, API } = useAuth(); // Get the user data from context

  if (userData && user) {
    //by default user data is true
    setData({
      name: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(`${API}/api/contact/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        const res_data = await response.json();
        console.log("data stored successfully", res_data);
        setData({
          name: "",
          email: "",
          message: "",
        });
      }
      console.log(response);
    } catch (error) {
      console.log("contact form", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image (hidden on small devices) */}
        <div className="hidden md:block">
          <img
            src="/assets/contact-us.png" // Make sure this image exists
            alt="Contact Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Get in Touch With Us
          </h2>
          <form className="space-y-6" onSubmit={submitData}>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={data.name}
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
              <label className="block text-sm mb-1 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                value={data.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
