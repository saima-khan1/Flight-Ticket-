import React from "react";
import { BookingType } from "../types";

interface BookingInfoProps {
  ticket: BookingType;
}

const BookingInfo: React.FC<BookingInfoProps> = ({ ticket }) => (
  <div>
    <div className="grid grid-cols-1 gap-2 text- text-gray-700 mt-0 sm:mt-0">
      <p className="text-base sm:text-lg">
        {" "}
        <span className="font-bold">Booked by :</span> {ticket.reservedBy}
      </p>

      <p className="text-base sm:text-lg">
        <span className="font-bold">Phone No:</span> {ticket.agentContactNumber}
      </p>
      {/* <p className="text-base sm:text-lg">
        <span className="font-semibold">Issuing office:</span>{" "}
        {ticket.companyName}
      </p> */}
    </div>
  </div>
);
export default BookingInfo;
