
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraries } from "../store/reducers/itineraryReducers.js";
import ItineraryCard from "../components/ItineraryCard";
import { useParams } from "react-router-dom";

export default function Details() {
  const { cityId } = useParams();
  console.log(cityId);
  
  const dispatch = useDispatch();
  const { list: itineraries, loading, error } = useSelector((state) => state.itineraries);

  useEffect(() => {
    dispatch(fetchItineraries(cityId));
  }, [dispatch, cityId]);

  return (
    <div className="container mx-auto p-10 flex flex-col">
      <h1 className="lg:text-4xl text-2xl font-bold text-white text-center p-4">
        Itineraries for Selected City
      </h1>
      <div className="">
            {loading && <p className="text-center text-white">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {itineraries.length === 0 && !loading ? (
                <p className="text-center text-white text-xl font-semibold">No itineraries yet for this city</p>
            ) : (
                <div className=" flex flex-row gap-4 justify-center flex-wrap">
                {itineraries.map((itinerary) => (
                    <ItineraryCard key={itinerary._id} itinerary={itinerary} />
                ))}
                </div>
            )}
      </div>
    </div>
  );
}


