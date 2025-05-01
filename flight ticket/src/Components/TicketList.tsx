// import { useState } from "react";
// import { assets } from "../assets/assets";
// import { mockFlightTickets } from "../mock/flightData";
// import {
//   FaSuitcase,
//   FaUtensils,
//   FaPlaneDeparture,
//   FaPlaneArrival,
// } from "react-icons/fa";
// import { BookingType, PassengerType } from "../types";

// const TicketList = () => {
//   const initialActiveIndices = mockFlightTickets.reduce((acc, ticket) => {
//     acc[ticket.orderId] = 0;
//     return acc;
//   }, {} as { [orderId: string]: number });

//   const [activeIndices, setActiveIndices] = useState(initialActiveIndices);

//   function getFlightDuration(start: string, end: string): string {
//     const startTime = new Date(start);
//     const endTime = new Date(end);
//     const diffInMs = endTime.getTime() - startTime.getTime();
//     const hours = Math.floor(diffInMs / (1000 * 60 * 60));
//     const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
//     return `${hours}h ${minutes}m`;
//   }

//   return (
//     <div className="min-h-screen w-full bg-gray-100">
//       <div className="w-11/12 mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-10">
//         <div className="bg-slate-50 p-2 sm:p-6 space-y-8 shadow rounded-xl">
//           {mockFlightTickets.map((ticket: BookingType) => {
//             const passenger: PassengerType = ticket.passengers[0];
//             const activeIndex = activeIndices[ticket.orderId];
//             const itinerary = ticket.itineraries[activeIndex];

//             return (
//               <div key={ticket.orderId} className="space-y-4">
//                 <img src={assets.image7} className="w-32 h-auto" />
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 mt-4">
//                   <h2 className="text-base sm:text-xl font-extrabold">
//                     {`${passenger.title} ${passenger.givenName} ${passenger.surname}`}
//                   </h2>
//                   <p className="text-base sm:text-lg">
//                     <span className="font-extrabold">PNR:</span>{" "}
//                     {ticket.airlinePnr}
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     <span className="font-extrabold">Booking Reference:</span>{" "}
//                     {ticket.orderId}
//                   </p>
//                 </div>
//                 {ticket.itineraries.length > 1 && (
//                   <div className="p-2 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-1">
//                     {ticket.itineraries.map((itinerary, index) => (
//                       <span
//                         key={index}
//                         onClick={() =>
//                           setActiveIndices((prev) => ({
//                             ...prev,
//                             [ticket.orderId]: index,
//                           }))
//                         }
//                         className={`cursor-pointer px-8 py-3 rounded-xl text-white ${
//                           activeIndex === index ? "bg-blue-600" : "bg-slate-400"
//                         }`}
//                       >
//                         {itinerary.airportFromCode} - {itinerary.airportToCode}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 <div className="bg-slate-100">
//                   <div className="p-2 sm:p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-1">
//                     <p className="font-medium text-lg sm:text-2xl">
//                       {itinerary.from} to {itinerary.to}
//                     </p>
//                     <p className="text-base sm:text-lg">
//                       <span className="font-semibold">Status:</span>
//                       <span
//                         className={`ml-2 px-2 py-0.5 rounded-full font-medium ${
//                           ticket.status === "CANCELLED"
//                             ? "bg-red-100 text-red-600"
//                             : "bg-green-100 text-green-600"
//                         }`}
//                       >
//                         {ticket.status}
//                       </span>
//                     </p>
//                     <p className="text-base sm:text-2xl">
//                       <span className="font-extralight">Reserved on:</span>{" "}
//                       {new Date(itinerary.departureTime).toLocaleDateString()}
//                     </p>
//                   </div>

//                   <div className="flex items-center justify-between text-2xl bg-slate-100 sm:text-3xl font-bold p-3 sm:p-6 sm:mr-2 sm:ml-2 mt-2 gap-2">
//                     <FaPlaneDeparture className="inline-block text-indigo-500" />
//                     <p className="text-lg sm:text-3xl">
//                       {itinerary.airportFromCode}
//                     </p>
//                     <div className="flex-1 flex items-center relative mx-0">
//                       <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
//                       <div className="absolute left-1/2 -translate-x-1/2 -top-4 flex flex-col items-center">
//                         <span className="text-gray-500 text-2xl bg-white px-1">
//                           <img src={assets.logo} className="w-8 h-auto" />
//                         </span>
//                         <span className="text-sm sm:text-lg font-semibold text-gray-600 whitespace-nowrap">
//                           {getFlightDuration(
//                             itinerary.departureTime,
//                             itinerary.arrivalTime
//                           )}
//                         </span>
//                       </div>
//                     </div>
//                     <p className="text-lg sm:text-3xl">
//                       {itinerary.airportToCode}
//                     </p>
//                     <FaPlaneArrival className="inline-block mr-1 text-indigo-500" />
//                   </div>

//                   <div className="flex justify-between items-center text-xl text-gray-500 font-semibold mr-2 ml-2 sm:mr-4 sm:ml-4 sm:text-3xl flex-wrap gap-2">
//                     <div className="flex flex-col items-center">
//                       <div className="text-sm sm:text-xl">
//                         {new Date(itinerary.departureTime).toLocaleDateString(
//                           "en-GB",
//                           {
//                             day: "2-digit",
//                             month: "short",
//                             weekday: "short",
//                           }
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-center sm:mt-0">
//                       <div className="text-sm sm:text-xl">
//                         {new Date(itinerary.arrivalTime).toLocaleDateString(
//                           "en-GB",
//                           {
//                             day: "2-digit",
//                             month: "short",
//                             weekday: "short",
//                           }
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-between flex-row sm:text-xl mr-2 ml-2 sm:mr-4 sm:ml-4 p-1 text-stone-700 font-bold gap-2">
//                     <p>
//                       {new Date(itinerary.departureTime).toLocaleTimeString(
//                         [],
//                         {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         }
//                       )}
//                     </p>
//                     <p>
//                       {new Date(itinerary.arrivalTime).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 bg-slate-100 p-4">
//                   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
//                     <p>
//                       <span className="bg-slate-400 px-2 py-1 rounded text-white">
//                         {passenger.type}
//                       </span>
//                     </p>
//                     <h2 className="text-base sm:text-xl font-extrabold">
//                       {`${passenger.title} ${passenger.givenName} ${passenger.surname}`}
//                     </h2>

//                     <div className="w-full border-t-4 border-gray-400 border-dashed"></div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 mt-4">
//                       <p>
//                         <span className="font-semibold">Flight No:</span>{" "}
//                         {itinerary.flightNumber}
//                       </p>
//                       <p>
//                         <FaSuitcase className="inline-block mr-2 text-gray-500" />
//                         <span className="font-semibold">Baggage:</span>{" "}
//                         {itinerary.baggage}
//                       </p>
//                       <p className="text-base sm:text-lg">
//                         <span className="font-semibold">Class:</span>{" "}
//                         {itinerary.class}
//                       </p>
//                       <p>
//                         <FaUtensils className="inline-block mr-2 text-gray-500" />
//                         <span className="font-semibold">Meals:</span>{" "}
//                         {itinerary.meals ? (
//                           <span className="text-green-600">Included</span>
//                         ) : (
//                           <span className="text-red-500">Not Included</span>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1  mt-6 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 ">
//                   <p className="text-base sm:text-lg">
//                     <span className="font-semibold">Booked by:</span>{" "}
//                     {ticket.reservedBy}
//                   </p>

//                   <p className="text-base sm:text-lg">
//                     <span className="font-semibold">Phone No:</span>{" "}
//                     {ticket.agentContactNumber}
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     <span className="font-semibold">Issuing office:</span>{" "}
//                     {ticket.companyName}
//                   </p>
//                 </div>

//                 <div className="mt-10 p-2 sm:p-6 bg-gray-100 rounded-lg text-sm sm:text-lg text-gray-700 leading-relaxed">
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">
//                     Ticket Terms & Conditions
//                   </h3>
//                   <ul className="list-disc pl-5 space-y-1">
//                     <li>
//                       This ticket is non-transferable and valid only for the
//                       named passenger.
//                     </li>
//                     <li>
//                       Any changes or cancellations must be made at least 24
//                       hours prior to departure.
//                     </li>
//                     <li>
//                       Refunds are subject to the airline’s cancellation policy
//                       and may incur service fees.
//                     </li>
//                     <li>
//                       Passengers must present valid photo identification and the
//                       original ticket upon check-in.
//                     </li>
//                     <li>
//                       Check-in closes 60 minutes before departure for
//                       international flights and 45 minutes for domestic flights.
//                     </li>
//                     <li>
//                       Excess baggage fees may apply if your luggage exceeds the
//                       permitted allowance.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketList;
import { useState } from "react";
import { mockFlightTickets } from "../mock/flightData";
import TicketCard from "./TicketCard";

const TicketList = () => {
  const initialActiveIndices = mockFlightTickets.reduce((acc, ticket) => {
    acc[ticket.orderId] = 0;
    return acc;
  }, {} as { [orderId: string]: number });

  const [activeIndices, setActiveIndices] = useState(initialActiveIndices);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="w-11/12 mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-10">
        <div className="bg-slate-50 p-2 sm:p-6 space-y-8 shadow rounded-xl">
          {mockFlightTickets.map((ticket) => (
            <TicketCard
              key={ticket.orderId}
              ticket={ticket}
              activeIndex={activeIndices[ticket.orderId]}
              setActiveIndex={(index) =>
                setActiveIndices((prev) => ({
                  ...prev,
                  [ticket.orderId]: index,
                }))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
