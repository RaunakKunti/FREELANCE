import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold text-red-600">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};
