import { mockFlightTickets } from "../mock/flightData";

const TicketList = () => {
  return (
    <div className="p-4  sm:p-6 space-y-8">
      {mockFlightTickets.map((ticket) => (
        <div key={ticket.id} className="space-y-4">
          <h2 className="text-xl font-bold">{ticket.name}</h2>

          <p className="text-lg">
            <span className="font-bold">Passport Number:</span>{" "}
            {ticket.passportNumber}
          </p>

          <p className="text-lg">
            <span className="font-bold">PNR:</span> {ticket.pnr}
          </p>

          <div className="border rounded-md shadow bg-white">
            <div className="bg-slate-200 p-4 flex flex-col sm:flex-row justify-between gap-2">
              <p className="font-semibold text-2xl">Flight details</p>
              <p className="text-2xl text-gray-600">
                <span className="font-bold"> Reserved on </span>:{" "}
                {ticket.reservedOn}
              </p>
            </div>

            <div className="flex justify-between text-lg text-gray-500 p-2">
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

            <div className="flex items-center justify-between text-2xl sm:text-3xl font-bold p-2 gap-2">
              <p>{ticket.airportFromCode}</p>
              <div className="flex-1 flex items-center relative mx-2">
                <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-gray-500 text-2xl bg-white px-1">
                  ✈
                </span>
              </div>
              <p>{ticket.airportToCode}</p>
            </div>

            <div className="flex justify-between text-lg text-gray-500 p-2">
              <p>
                {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>
                {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-lg text-gray-500 p-2 gap-1 sm:gap-2">
              <p>{ticket.from}</p>
              <p>{ticket.to}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-800">
            <p>
              <span className="font-bold">Flight No:</span>{" "}
              {ticket.flightNumber}
            </p>

            <p>
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

            <p>
              <span className="font-bold">Baggage:</span> {ticket.baggage}
            </p>

            <p>
              <span className="font-bold">Meals:</span>
              <span
                className={`ml-1 ${
                  ticket.meals ? "text-green-600" : "text-red-600"
                }`}
              >
                {ticket.meals ? "🍽️ Included" : "❌ Not Included"}
              </span>
            </p>

            <p className="font-semibold">
              <span className="font-bold">Price:</span>
              {ticket.price.toFixed(2)}
            </p>

            <p>
              <span className="font-bold">Booked by:</span> {ticket.reservedBy}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
