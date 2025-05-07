import React from "react";
import { BookingType } from "../types";

interface BookingInfoProps {
  ticket: BookingType;
}

const BookingInfo: React.FC<BookingInfoProps> = ({ ticket }) => (
  <div>
    <div className="grid grid-cols-1 gap-2 text- text-gray-700 mt-0 sm:mt-2">
      <p className="text-base sm:text-lg">
        {" "}
        <span className="font-extrabold">Booked by :</span> {ticket.reservedBy}
      </p>

      <p className="text-base sm:text-lg">
        <span className="font-extrabold">Phone No:</span>{" "}
        {ticket.agentContactNumber}
      </p>
      {/* <p className="text-base sm:text-lg">
        <span className="font-semibold">Issuing office:</span>{" "}
        {ticket.companyName}
      </p> */}
    </div>
  </div>
);
export default BookingInfo;
