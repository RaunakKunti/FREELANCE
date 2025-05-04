import { NavLink, Link } from "react-router-dom";
export const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white mt-9">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build Smarter with{" "}
            <span className="text-indigo-500">Raunak Ai</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Unlock your potential with modern web tools and AI solutions.
            Whether you're a beginner or a pro, this is your one-stop coding
            zone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="border border-indigo-500 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/240_F_601171841_ek6D8jhk0oh3rwQgSkBdDHcatLaJZ4iQ.jpg"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/240_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" // Replace this with your actual image
            alt="AI Coding Illustration"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Tools for Developers
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Experience the power of AI in coding, debugging, and building apps
            faster than ever. Raunak Ai offers you the next-gen developer
            toolkit powered by intelligent automation.
          </p>
          <Link
            to="/tools"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-white font-medium transition"
          >
            Explore Tools
          </Link>
        </div>
      </section>
    </main>
  );
};
