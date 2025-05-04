import React from "react";
import { useAuth } from "../../Store/Auth";

const Services = () => {
  const { services } = useAuth();

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      {/* Container for the cards */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div
              key={index}
              className="w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src="/assets/service1.png"
                alt="Service"
                className="w-full h-40 object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-indigo-400 mb-2">
                  {service}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{description}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-400">{provider}</span>
                  <span className="text-lg font-semibold text-green-400">
                    {price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Services;
