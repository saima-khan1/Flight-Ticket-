const TicketTerms = () => {
  return (
    <div className="mt-10 p-2 sm:p-6 bg-slate-100 rounded-lg text-sm sm:text-lg text-gray-700 leading-relaxed">
      {" "}
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        Ticket Terms & Conditions{" "}
      </h3>{" "}
      <ul className="list-disc pl-5 space-y-1">
        {" "}
        <li>
          This ticket is non-transferable and valid only for the named
          passenger.{" "}
        </li>{" "}
        <li>
          Any changes or cancellations must be made at least 24 hours prior to
          departure.{" "}
        </li>{" "}
        <li>
          Refunds are subject to the airline’s cancellation policy and may incur
          service fees.{" "}
        </li>{" "}
        <li>
          Passengers must present valid photo identification and the original
          ticket upon check-in.{" "}
        </li>{" "}
        <li>
          Check-in closes 60 minutes before departure for international flights
          and 45 minutes for domestic flights.{" "}
        </li>{" "}
        <li>
          Excess baggage fees may apply if your luggage exceeds the permitted
          allowance.{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default TicketTerms;
