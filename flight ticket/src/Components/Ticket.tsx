import { assets } from "../assets/assets";
import { mockFlightTickets } from "../mock/flightData";
import {
  FaSuitcase,
  FaUtensils,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-100 py-12 px-6 m-8">
      <div className="max-w-7xl min-h-screen  mx-auto p-4 bg-white sm:p-6 space-y-8 shadow rounded-xl">
        {mockFlightTickets.map((ticket) => (
          <div key={ticket.id} className="space-y-4">
            <img src={assets.image7} className="w-32 h-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
              <h2 className="text-xl font-bold">{ticket.name}</h2>

              <p className="text-lg">
                <span className="font-bold">PNR:</span> {ticket.pnr}
              </p>
              <p className="text-lg">
                <span className="font-bold">Passport Number:</span>{" "}
                {ticket.passportNumber}
              </p>

              <p className="text-lg">
                <span className="font-bold">Booking Reference:</span>{" "}
                {ticket.orderId}
              </p>
              <p className="text-lg">
                <span className="font-bold">Status:</span>
                <span
                  className={`ml-1 font-semibold ${
                    ticket.status === "CANCELLED"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </p>
            </div>
            {/* <div className="my-4 h-[2px] w-full bg-black"></div> */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
              <p className="text-lg">
                <span className="font-bold">Booked by:</span>{" "}
                {ticket.reservedBy}
              </p>
              <p className="text-lg">
                <span className="font-bold">Class:</span> {ticket.class}
              </p>
              <p className="text-lg">
                <span className="font-bold">Issuing office:</span>{" "}
                {ticket.companyName}
              </p>

              {/* <p>
                <span className="font-bold">Booked by:</span>{" "}
                {ticket.reservedBy}
              </p> */}
            {/* </div> */}
            <div className="border rounded-2xl shadow bg-white">
              <div className="bg-blue-600 p-4  text-white flex flex-col sm:flex-row justify-between gap-2">
                <p className="font-semibold text-2xl">
                  {ticket.from}-{ticket.to}
                </p>

                <p className="text-2xl ">
                  <span className="font-bold"> Reserved on </span>:{" "}
                  {ticket.reservedOn}
                </p>
              </div>

              <div className="flex justify-between items-center text-xl text-gray-500 p-4">
                <div className="flex items-center mt-4">
                  <FaPlaneDeparture className="inline-block mr-2 text-indigo-500" />
                  <span className="font-bold">Departure:</span>&nbsp;
                  {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                </div>

                <div className="flex items-center mt-4 ">
                  <FaPlaneArrival className="inline-block mr-2 text-indigo-500" />
                  <span className="font-bold">Arrival:</span>&nbsp;
                  {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                </div>
              </div>
              <div className="flex items-center justify-between text-2xl sm:text-3xl font-bold p-4 gap-2">
                <p>{ticket.airportFromCode}</p>

                <div className="flex-1 flex items-center relative mx-2">
                  <div className="w-full border-t-4 border-gray-400 border-dashed"></div>

                  <div className="absolute left-1/2 -translate-x-1/2 -top-10 flex flex-col items-center">
                    <span className="text-base text-gray-600 whitespace-nowrap">
                      {getFlightDuration(
                        ticket.departureTime,
                        ticket.arrivalTime
                      )}
                    </span>
                    <span className="text-gray-500 text-2xl bg-white px-1">
                      ✈
                    </span>
                  </div>
                </div>

                <p>{ticket.airportToCode}</p>
              </div>

              <div className="flex justify-between text-xl p-4 font-bold">
                <p>
                  {new Date(ticket.departureTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  {new Date(ticket.arrivalTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className="flex justify-between text-lg text-gray-500 p-4 mt-3">
                <p>
                  <span className="font-bold">Flight No:</span>{" "}
                  {ticket.flightNumber}
                </p>

                <p>
                  <FaSuitcase className="inline-block mr-2 text-gray-500" />
                  <span className="font-bold">Baggage:</span> {ticket.baggage}
                </p>

                <p>
                  <FaUtensils className="inline-block mr-2 text-gray-500" />
                  <span className="font-bold">Meals:</span>{" "}
                  {ticket.meals ? (
                    <span className="text-green-600">Included</span>
                  ) : (
                    <span className="text-red-500">Not Included</span>
                  )}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
              <p className="text-lg">
                <span className="font-bold">Booked by:</span>{" "}
                {ticket.reservedBy}
              </p>
              <p className="text-lg">
                <span className="font-bold">Class:</span> {ticket.class}
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
                  This ticket is non-transferable and valid only for the named
                  passenger.
                </li>
                <li>
                  Any changes or cancellations must be made at least 24 hours
                  prior to departure.
                </li>
                <li>
                  Refunds are subject to the airline’s cancellation policy and
                  may incur service fees.
                </li>
                <li>
                  Passengers must present valid photo identification and the
                  original ticket upon check-in.
                </li>
                <li>
                  Check-in closes 60 minutes before departure for international
                  flights and 45 minutes for domestic flights.
                </li>
                <li>
                  Excess baggage fees may apply if your luggage exceeds the
                  permitted allowance.
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
