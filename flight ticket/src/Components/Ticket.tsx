import { assets } from "../assets/assets";
import { mockFlightTickets } from "../mock/flightData";
import {
  FaSuitcase,
  FaUtensils,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";
import { BookingType, PassengerType } from "../types";

const TicketList = () => {
  function getFlightDuration(start: string, end: string): string {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const diffInMs = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100  ">
      <div className=" w-11/12  mx-auto  px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-slate-50 p-6 space-y-8 shadow rounded-xl">
          {mockFlightTickets.map((ticket: BookingType) => {
            const passenger: PassengerType = ticket.passengers[0];
            const itinerary = ticket.itineraries[0];

            return (
              <div key={ticket.orderId} className="space-y-4 ">
                <img src={assets.image7} className="w-32 h-auto" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
                  <h2 className="text-xl font-bold">
                    {`${passenger.title} ${passenger.givenName} ${passenger.surname}`}
                  </h2>
                  <p className="text-lg">
                    <span className="font-bold">PNR:</span> {ticket.airlinePnr}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Passport Number:</span>{" "}
                    {passenger.passportNo}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Booking Reference:</span>{" "}
                    {ticket.orderId}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Class:</span> {itinerary.class}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Status:</span>

                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full  font-medium ${
                        ticket.status === "CANCELLED"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </p>
                </div>

                <div className="border rounded-2xl shadow bg-white">
                  <div className="bg-blue-600 p-4 text-white flex flex-col  sm:flex-row sm:items-center justify-between gap-2">
                    <p className="font-semibold text-xl sm:text-2xl">
                      {itinerary.from}-{itinerary.to}
                    </p>
                    <p className="text-base sm:text-xl">
                      <span className="font-bold">Reserved on:</span>{" "}
                      {new Date(itinerary.departureTime).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-xl  text-gray-500 p-4 sm:text-3xl flex-wrap gap-2">
                    <div className="flex items-center mt-4">
                      <FaPlaneDeparture className="inline-block mr-2 text-indigo-500" />
                      <span className="hidden sm:inline font-bold">
                        Departure:
                      </span>
                      &nbsp;
                      <div className="hidden sm:inline ">
                        {new Date(itinerary.departureTime).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>

                    <div className="flex items-center mt-4 sm:mt-0  ">
                      <FaPlaneArrival className="inline-block mr-2 text-indigo-500" />
                      <span className="hidden sm:inline font-bold">
                        Arrival:
                      </span>
                      &nbsp;
                      <div className="hidden sm:inline ">
                        {new Date(itinerary.arrivalTime).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-2xl sm:text-3xl  font-bold p-4  mt-2 gap-2">
                    <p>{itinerary.airportFromCode}</p>
                    <div className="flex-1 flex items-center relative mx-2">
                      <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 flex flex-col items-center">
                        <span className="text-base text-gray-600 whitespace-nowrap">
                          {getFlightDuration(
                            itinerary.departureTime,
                            itinerary.arrivalTime
                          )}
                        </span>
                        <span className="text-gray-500 text-2xl bg-white px-1">
                          ✈
                        </span>
                      </div>
                    </div>
                    <p>{itinerary.airportToCode}</p>
                  </div>

                  <div className="flex justify-between flex-row text-base sm:text-xl  p-4 font-bold gap-2">
                    <p>
                      {new Date(itinerary.departureTime).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                    <p>
                      {new Date(itinerary.arrivalTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between text-lg text-gray-500 p-4 mt-3 gap-4">
                    <p>
                      <span className="font-bold">Flight No:</span>{" "}
                      {itinerary.flightNumber}
                    </p>
                    <p>
                      <FaSuitcase className="inline-block mr-2 text-gray-500" />
                      <span className="font-bold">Baggage:</span>{" "}
                      {itinerary.baggage}
                    </p>
                    <p>
                      <FaUtensils className="inline-block mr-2 text-gray-500" />
                      <span className="font-bold">Meals:</span>{" "}
                      {itinerary.meals ? (
                        <span className="text-green-600">Included</span>
                      ) : (
                        <span className="text-red-500">Not Included</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1  mt-6 sm:grid-cols-2 gap-4 text-sm text-gray-700 ">
                  <p className="text-lg">
                    <span className="font-bold">Booked by:</span>{" "}
                    {ticket.reservedBy}
                  </p>

                  <p className="text-lg">
                    <span className="font-bold">Phone No:</span>{" "}
                    {ticket.agentContactNumber}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Issuing office:</span>{" "}
                    {ticket.companyName}
                  </p>
                </div>

                <div className="mt-10 p-6 bg-gray-100 rounded-lg text-lg text-gray-700 leading-relaxed">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Ticket Terms & Conditions
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      This ticket is non-transferable and valid only for the
                      named passenger.
                    </li>
                    <li>
                      Any changes or cancellations must be made at least 24
                      hours prior to departure.
                    </li>
                    <li>
                      Refunds are subject to the airline’s cancellation policy
                      and may incur service fees.
                    </li>
                    <li>
                      Passengers must present valid photo identification and the
                      original ticket upon check-in.
                    </li>
                    <li>
                      Check-in closes 60 minutes before departure for
                      international flights and 45 minutes for domestic flights.
                    </li>
                    <li>
                      Excess baggage fees may apply if your luggage exceeds the
                      permitted allowance.
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
