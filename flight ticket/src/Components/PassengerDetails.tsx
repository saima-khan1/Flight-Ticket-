import React from "react";
import { FaSuitcase, FaUtensils } from "react-icons/fa";
import { PassengerType, Itinerary } from "../types";

interface PassengerDetailsProps {
  passenger: PassengerType;
  itinerary: Itinerary;
}

const PassengerDetails: React.FC<PassengerDetailsProps> = ({
  passenger,
  itinerary,
}) => (
  <div className="bg-white shadow-lg rounded-md">
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4  p-4 shadow-lg rounded-md">
      <p>
        <span className="bg-slate-400 px-2 py-1 rounded text-white">
          {passenger.type}
        </span>
      </p>

      <h2 className="text-base sm:text-xl font-extrabold">
        {`${passenger.title} ${passenger.givenName} ${passenger.surname}`}
      </h2>
      <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 mt-4">
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Flight No:</span>{" "}
          {itinerary.flightNumber}
        </p>
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Class:</span> {itinerary.class}
        </p>
        <p className="text-base sm:text-lg">
          <FaSuitcase className="inline-block mr-2 text-gray-500" />
          <span className="font-semibold">Baggage:</span> {itinerary.baggage}
        </p>

        <p className="text-base sm:text-lg">
          <FaUtensils className="inline-block mr-2 text-gray-500" />
          <span className="font-semibold">Meals:</span>{" "}
          {itinerary.meals ? (
            <span className="text-green-600">Included</span>
          ) : (
            <span className="text-red-500">Not Included</span>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default PassengerDetails;
