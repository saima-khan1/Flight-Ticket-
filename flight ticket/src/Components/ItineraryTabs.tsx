import React from "react";
import { Itinerary } from "../types";

interface ItineraryTabsProps {
  itineraries: Itinerary[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ItineraryTabs: React.FC<ItineraryTabsProps> = ({
  itineraries,
  activeIndex,
  setActiveIndex,
}) => {
  if (itineraries.length <= 1) return null;

  return (
    <div className="p-2   sm:p-0  flex flex-col sm:flex-row sm:items-center gap-1">
      {itineraries.map((itinerary, index) => (
        <span
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`cursor-pointer px-8 py-3 rounded-xl text-white ${
            activeIndex === index ? "bg-blue-600" : "bg-slate-400"
          }`}
        >
          {itinerary.airportFromCode} - {itinerary.airportToCode}
        </span>
      ))}
    </div>
  );
};

export default ItineraryTabs;
