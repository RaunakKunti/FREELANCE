import { useAuth } from "../../Store/Auth.jsx";

export const About = () => {
  const { user } = useAuth();
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-500">
          About Us
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Empowering developers with intelligent tools, one line of code at a
          time.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="https://t3.ftcdn.net/jpg/08/24/71/98/360_F_824719896_gKb7ueuQjnBROHdABOJMvbiZ1vHX8Xiw.jpg" // replace with your own image
            alt="Team Illustration"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-gray-400 mb-4">
            Welcome {user ? user.username : "user"}👋 to our website. Raunak Ai
            is a platform built for modern developers. From learning new
            technologies to leveraging AI for productivity, we offer tools,
            insights, and resources to help you build smarter.
          </p>
          <p className="text-gray-400">
            We believe in open access to knowledge, intuitive design, and fast
            iteration. Whether you're just getting started or you're deep into
            full-stack development, Raunak Ai has something for you.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6">Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          To revolutionize the way developers learn, collaborate, and build by
          harnessing the power of AI and clean design. We aim to be the go-to
          companion for developers who want to work faster, better, and smarter.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
        <p className="text-gray-400 text-lg">
          We envision a future where code writes itself — guided by the
          creativity of human developers. With Raunak Ai, we’re getting closer
          to that future every day.
        </p>
      </section>
    </main>
  );
};
