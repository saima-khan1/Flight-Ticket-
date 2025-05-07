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
  );
};

export default TicketList;
