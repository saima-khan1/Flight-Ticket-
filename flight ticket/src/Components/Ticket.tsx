import { mockFlightTickets } from "../mock/flightData";

const TicketList = () => {
  return (
    <div className="p-6">
      {mockFlightTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-xl font-bold">{ticket.name}</h2>
          <p className="text-xl">
            <span className="font-bold">Passport Number:</span>{" "}
            {ticket.passportNumber}
          </p>
          <p className="text-xl">
            <span className="font-bold">PNR:</span> {ticket.pnr}
          </p>
          <div className="border rounded-sm p-0 shadow  bg-white">
            <div>
              <p className="bg-slate-200 p-4 mt-0">Flight details</p>
            </div>
            <div className="flex justify-between text-3xl p-1 font-medium">
              <p className="text-sm">
                {new Date(ticket.departureTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="text-sm">
                {new Date(ticket.arrivalTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {/* <div className="flex justify-between text-3xl p-2 font-bold">
              <p>{ticket.to}</p>
              <p>{ticket.from}</p>
            </div> */}
            <div className="flex items-center justify-between text-xl font-bold p-2 gap-2">
              <p>{ticket.from}</p>

              <div className="flex items-center flex-1 mx-2 relative">
                <div className="w-full border-t border-gray-400 border-dashed"></div>
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-1 text-gray-500 text-xxl">
                  ✈
                </span>
              </div>

              <p>{ticket.to}</p>
            </div>

            <div className="flex justify-between text-3xl p-1 font-medium">
              <p className="text-sm">
                {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="text-sm">
                {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <p>Flight No: {ticket.flightNumber}</p>
            <p>Departure: {new Date(ticket.departureTime).toLocaleString()}</p>
            <p>Arrival: {new Date(ticket.arrivalTime).toLocaleString()}</p>
            <p>
              Status:{" "}
              <span
                className={`font-semibold ${
                  ticket.status === "Delayed"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {ticket.status}
              </span>
            </p>
            <p>Baggage: {ticket.baggage}</p>
            <p>Meals: {ticket.meals.join(", ")}</p>
            <p className="font-semibold">Price: ${ticket.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
