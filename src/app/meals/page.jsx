"use client"
import React, { useState } from "react";

const MealPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Choose Your Meal 🍽️
      </h1>

      {/* Search Section */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 flex items-center gap-3 border border-gray-200">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
          Search
        </button>
      </div>

      {/* Meals List Placeholder */}
      <div className="mt-12 text-gray-500 text-lg">
        {/* এখানে পরে তুমি API থেকে Meal Card গুলো show করবে */}
        Search for your favorite meal 😋
      </div>

    </div>
  );
};

export default MealPage;
