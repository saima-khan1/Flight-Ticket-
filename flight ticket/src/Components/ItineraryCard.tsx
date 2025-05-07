import React from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BookingType, Itinerary } from "../types";
import getFlightDuration from "../utils/getFlightDuration";

interface FlightRouteProps {
  itinerary: Itinerary;
  ticket: BookingType;
}

const ItineraryCard: React.FC<FlightRouteProps> = ({ itinerary, ticket }) => (
  <div className="bg-white shadow-lg rounded-md">
    <div className="p-2 sm:p-4  flex flex-col sm:flex-row sm:items-center justify-between gap-1">
      <p className="font-semibold text-lg sm:text-2xl">
        {itinerary.from} to {itinerary.to}
      </p>
      <p className="text-base sm:text-lg">
        <span className="font-semibold">Status:</span>
        <span
          className={`ml-2 px-2 py-0.5 rounded-full font-medium ${
            ticket.status === "CANCELLED"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {ticket.status}
        </span>
      </p>
      <p className="text-base sm:text-2xl">
        <span className="font-extralight">Reserved on:</span>{" "}
        {new Date(itinerary.departureTime).toLocaleDateString()}
      </p>
    </div>

    <div className="flex items-center justify-between text-2xl bg-slate-100 sm:text-3xl font-bold p-3 sm:p-6 sm:mr-2 sm:ml-2 mt-2 gap-2">
      <FaPlaneDeparture className="inline-block text-indigo-500" />
      <p className="text-lg sm:text-3xl">{itinerary.airportFromCode}</p>
      <div className="flex-1 flex items-center relative mx-0">
        <div className="w-full border-t-4 border-gray-400 border-dashed">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 flex flex-col items-center">
            <span className="text-gray-500 text-2xl bg-white px-1">
              <img src={ticket.airlineLogoUrl} className="w-8 h-auto" />
            </span>
            <span className="text-sm sm:text-lg font-semibold text-gray-600 whitespace-nowrap">
              {getFlightDuration(
                itinerary.departureTime,
                itinerary.arrivalTime
              )}
            </span>
          </div>
        </div>
      </div>
      <p className="text-lg sm:text-3xl">{itinerary.airportToCode}</p>
      <FaPlaneArrival className="inline-block mr-1 text-indigo-500" />
    </div>

    <div className="flex justify-between items-center text-xl text-gray-500 font-semibold mr-2 ml-2 sm:mr-4 sm:ml-4 sm:text-3xl flex-wrap gap-2">
      <div className="flex flex-col items-center">
        <div className="text-sm sm:text-xl">
          {new Date(itinerary.departureTime).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            weekday: "short",
          })}
        </div>
      </div>

      <div className="flex flex-col items-center sm:mt-0">
        <div className="text-sm sm:text-xl">
          {new Date(itinerary.arrivalTime).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            weekday: "short",
          })}
        </div>
      </div>
    </div>

    <div className="flex justify-between flex-row sm:text-xl mr-2 ml-2 sm:mr-4 sm:ml-4 p-1 text-stone-700 font-bold gap-2">
      <p>
        {new Date(itinerary.departureTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>
        {new Date(itinerary.arrivalTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  </div>
);

export default ItineraryCard;
