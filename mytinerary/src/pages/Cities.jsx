import { useEffect, useState } from "react";
import CityCard from "../components/CityCard.jsx";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/cities/all?name=${search}`);
        const data = await response.json();
        setCities(data.response); 
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [search]);

  return (
    <div className="container mx-auto p-10">

      <h1 className="lg:text-4xl text-2xl font-bold text-white text-center p-4">
        Explore Cities Around the World
      </h1>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-1/2 border border-gray-300 rounded-md shadow-md"
        />
      </div>

      {cities.length === 0 ? (<p className="text-center text-white text-xl font-semibold"> No results found for "{search}" </p>) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <CityCard key={city._id} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}
