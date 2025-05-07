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
      </ul>{" "}
    </div>
  );
};

export default TicketTerms;
