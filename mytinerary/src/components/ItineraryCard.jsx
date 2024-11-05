import React from "react";

export default function ItineraryCard({ itinerary }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-5">
      <img
        src={itinerary.userPhoto}
        alt={itinerary.userName}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{itinerary.userName}</h2>
      <h3 className="text-md font-semibold">{itinerary.name}</h3>
      <p className="text-sm text-gray-500">Duration: {itinerary.duration} hours</p>
      <p className="text-sm text-gray-500">Price: {"💵".repeat(itinerary.price)}</p>
      <div className="mt-3">
        {itinerary.hashtags.map((tag, index) => (
          <span key={index} className="text-blue-600 mr-2">
            {tag}
          </span>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        View more
      </button>
    </div>
  );
}
