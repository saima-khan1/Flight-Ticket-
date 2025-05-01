import React from "react";
import { BookingType } from "../types";

interface BookingInfoProps {
  ticket: BookingType;
}

const BookingInfo: React.FC<BookingInfoProps> = ({ ticket }) => (
  <div className="grid grid-cols-1  mt-6 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 ">
    <p className="text-base sm:text-lg">
      <span className="font-semibold">Booked by:</span> {ticket.reservedBy}
    </p>

    <p className="text-base sm:text-lg">
      <span className="font-semibold">Phone No:</span>{" "}
      {ticket.agentContactNumber}
    </p>
    <p className="text-base sm:text-lg">
      <span className="font-semibold">Issuing office:</span>{" "}
      {ticket.companyName}
    </p>
  </div>
);
export default BookingInfo;
