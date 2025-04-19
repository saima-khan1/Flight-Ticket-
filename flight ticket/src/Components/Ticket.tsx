// import { mockFlightTickets } from "../mock/flightData";

// const TicketList = () => {
//   return (
//     <div className="p-4  sm:p-6 space-y-8">
//       {mockFlightTickets.map((ticket) => (
//         <div key={ticket.id} className="space-y-4">
//           <h2 className="text-xl font-bold">{ticket.name}</h2>

//           <p className="text-lg">
//             <span className="font-bold">Passport Number:</span>{" "}
//             {ticket.passportNumber}
//           </p>

//           <p className="text-lg">
//             <span className="font-bold">PNR:</span> {ticket.pnr}
//           </p>

//           <div className="border rounded-md shadow bg-white">
//             <div className="bg-slate-200 p-4 flex flex-col sm:flex-row justify-between gap-2">
//               <p className="font-semibold text-2xl">Flight details</p>
//               <p className="text-2xl text-gray-600">
//                 <span className="font-bold"> Reserved on </span>:{" "}
//                 {ticket.reservedOn}
//               </p>
//             </div>

//             <div className="flex justify-between text-lg text-gray-500 p-2">
//               <p>
//                 {new Date(ticket.departureTime).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </p>
//               <p>
//                 {new Date(ticket.arrivalTime).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </p>
//             </div>

//             <div className="flex items-center justify-between text-2xl sm:text-3xl font-bold p-2 gap-2">
//               <p>{ticket.airportFromCode}</p>
//               <div className="flex-1 flex items-center relative mx-2">
//                 <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
//                 <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-gray-500 text-2xl bg-white px-1">
//                   ✈
//                 </span>
//               </div>
//               <p>{ticket.airportToCode}</p>
//             </div>

//             <div className="flex justify-between text-lg text-gray-500 p-2">
//               <p>
//                 {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </p>
//               <p>
//                 {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-between text-lg text-gray-500 p-2 gap-1 sm:gap-2">
//               <p>{ticket.from}</p>
//               <p>{ticket.to}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-800">
//             <p>
//               <span className="font-bold">Flight No:</span>{" "}
//               {ticket.flightNumber}
//             </p>

//             <p>
//               <span className="font-bold">Status:</span>
//               <span
//                 className={`ml-1 font-semibold ${
//                   ticket.status === "CANCELLED"
//                     ? "text-red-600"
//                     : "text-green-600"
//                 }`}
//               >
//                 {ticket.status}
//               </span>
//             </p>

//             <p>
//               <span className="font-bold">Baggage:</span> {ticket.baggage}
//             </p>

//             <p>
//               <span className="font-bold">Meals:</span>
//               <span
//                 className={`ml-1 ${
//                   ticket.meals ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {ticket.meals ? "🍽️ Included" : "❌ Not Included"}
//               </span>
//             </p>

//             <p className="font-semibold">
//               <span className="font-bold">Price:</span>
//               {ticket.price.toFixed(2)}
//             </p>

//             <p>
//               <span className="font-bold">Booked by:</span> {ticket.reservedBy}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TicketList;
// import { mockFlightTickets } from "../mock/flightData";

// const TicketList = () => {
//   return (
//     <div className="p-4 sm:p-6 space-y-10 bg-gray-50 min-h-screen">
//       {mockFlightTickets.map((ticket) => (
//         <div
//           key={ticket.id}
//           className="rounded-2xl shadow-md bg-white border border-gray-200 overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//             <div>
//               <h2 className="text-2xl font-bold">{ticket.name}</h2>
//               <p className="text-sm opacity-90">
//                 Passport:{" "}
//                 <span className="font-medium">{ticket.passportNumber}</span>
//               </p>
//               <p className="text-sm opacity-90">
//                 PNR: <span className="font-medium">{ticket.pnr}</span>
//               </p>
//             </div>
//             <div className="mt-4 sm:mt-0 text-sm sm:text-base">
//               <span className="font-medium">Reserved on:</span>{" "}
//               {ticket.reservedOn}
//             </div>
//           </div>

//           {/* Flight Info */}
//           <div className="p-6 space-y-4">
//             {/* Times */}
//             <div className="flex justify-between items-center text-gray-500 text-lg">
//               <span>
//                 {new Date(ticket.departureTime).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </span>
//               <span>
//                 {new Date(ticket.arrivalTime).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </span>
//             </div>

//             {/* Airports */}
//             <div className="flex items-center justify-between text-3xl font-bold">
//               <span>{ticket.airportFromCode}</span>
//               <div className="flex-1 mx-4 relative">
//                 <div className="border-t-2 border-dashed border-gray-400"></div>
//                 <div className="absolute left-1/2 -translate-x-1/2 -top-4 text-2xl bg-white px-2 text-gray-600">
//                   ✈
//                 </div>
//               </div>
//               <span>{ticket.airportToCode}</span>
//             </div>

//             {/* Dates & Cities */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
//               <div>
//                 <span className="font-semibold">Departure:</span>{" "}
//                 {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 })}{" "}
//                 - {ticket.from}
//               </div>
//               <div>
//                 <span className="font-semibold">Arrival:</span>{" "}
//                 {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 })}{" "}
//                 - {ticket.to}
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
//               <p>
//                 <span className="font-semibold">Flight No:</span>{" "}
//                 {ticket.flightNumber}
//               </p>
//               <p>
//                 <span className="font-semibold">Status:</span>{" "}
//                 <span
//                   className={`ml-1 font-semibold ${
//                     ticket.status === "CANCELLED"
//                       ? "text-red-600"
//                       : "text-green-600"
//                   }`}
//                 >
//                   {ticket.status}
//                 </span>
//               </p>
//               <p>
//                 <span className="font-semibold">Baggage:</span> {ticket.baggage}
//               </p>
//               <p>
//                 <span className="font-semibold">Meals:</span>{" "}
//                 {ticket.meals ? (
//                   <span className="text-green-600">🍽️ Included</span>
//                 ) : (
//                   <span className="text-red-600">❌ Not Included</span>
//                 )}
//               </p>
//               <p>
//                 <span className="font-semibold">Booked by:</span>{" "}
//                 {ticket.reservedBy}
//               </p>
//               <p>
//                 <span className="font-semibold">Price:</span>{" "}
//                 <span className="font-bold text-indigo-700">
//                   ${ticket.price.toFixed(2)}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TicketList;
import { mockFlightTickets } from "../mock/flightData";
import {
  FaSuitcase,
  FaUtensils,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";

const TicketList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {mockFlightTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="rounded-2xl shadow-md bg-white border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center gap-3 ">
              <div>
                <h2 className="text-3xl font-bold mb-4 ">{ticket.name}</h2>
                <p className="text-3xl opacity-90 mb-4">
                  Passport No:{" "}
                  <span className="font-medium">{ticket.passportNumber}</span>
                </p>
                <p className="text-3xl opacity-90">PNR: {ticket.pnr}</p>
              </div>
            </div>
            <div className="mt-4  text-3xl ">
              <span className="font-medium">Reserved on:</span>{" "}
              {ticket.reservedOn}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between text-3xl font-bold text-gray-800">
              <span>{ticket.airportFromCode}</span>
              <div className="flex-1 mx-4 relative">
                <div className="border-t-2 border-dashed border-gray-300"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 text-2xl bg-white px-2 text-gray-600">
                  ✈
                </div>
              </div>
              <span>{ticket.airportToCode}</span>
            </div>

            <div className="flex justify-between text-gray-500 text-3xl">
              <span>
                {new Date(ticket.departureTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>
                {new Date(ticket.arrivalTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-gray-600 mt-2 text-3xl">
              <div>
                <FaPlaneDeparture className="inline-block mr-2 text-indigo-500" />
                <span className="font-semibold">Departure:</span>{" "}
                {new Date(ticket.departureTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
                - {ticket.from}
              </div>
              <div>
                <FaPlaneArrival className="inline-block mr-2 text-indigo-500" />
                <span className="font-semibold">Arrival:</span>{" "}
                {new Date(ticket.arrivalTime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
                - {ticket.to}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-3xl text-gray-700 mt-4">
              <p>
                <span className="font-semibold">Flight No:</span>{" "}
                {ticket.flightNumber}
              </p>

              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`ml-1 px-2 py-1 rounded-full text-xs font-bold ${
                    ticket.status === "CANCELLED"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </p>

              <p>
                <FaSuitcase className="inline-block mr-2 text-gray-500" />
                <span className="font-semibold">Baggage:</span> {ticket.baggage}
              </p>

              <p>
                <FaUtensils className="inline-block mr-2 text-gray-500" />
                <span className="font-semibold">Meals:</span>{" "}
                {ticket.meals ? (
                  <span className="text-green-600">Included 🍽️</span>
                ) : (
                  <span className="text-red-600">Not Included ❌</span>
                )}
              </p>

              <p>
                <span className="font-semibold">Booked by:</span>{" "}
                {ticket.reservedBy}
              </p>

              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="font-bold text-indigo-700">
                  ${ticket.price.toFixed(2)}
                </span>
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-end pt-4">
              <QRCodeCanvas value={ticket.pnr} size={100} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
