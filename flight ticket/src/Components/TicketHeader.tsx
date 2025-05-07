import React from "react";
import { BookingType, PassengerType } from "../types";

interface TicketHeaderProps {
  passenger: PassengerType;
  ticket: BookingType;
}

const TicketHeader: React.FC<TicketHeaderProps> = ({ passenger, ticket }) => (
  <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 mt-4">
    <h2 className="text-base sm:text-xl font-bold">
      Thanks for choosing {ticket.companyName}
    </h2>
    <h2 className="text-base sm:text-xl font-extrabold">
      {`${passenger.title} ${passenger.givenName} ${passenger.surname}`}
    </h2>
    <p className="text-base sm:text-lg">
      <span className="font-extrabold">PNR:</span> {ticket.airlinePnr}
    </p>
    <p className="text-base sm:text-lg">
      <span className="font-extrabold">Booking Reference:</span>{" "}
      {ticket.orderId}
    </p>
  </div>
);

export default TicketHeader;
