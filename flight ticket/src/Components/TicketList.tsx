import { useState } from "react";
import { mockFlightTickets } from "../mock/flightData";
import TicketCard from "./TicketCard";
import PDFTicketDocument from "./PDFTicketDocumnet/PDFTicketDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

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
        {/* <div className="mt-6 text-center">
          <PDFDownloadLink
            document={<PDFTicketDocument />}
            fileName="flight-tickets.pdf"
            className="w-48 h-12 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-md shadow-md flex items-center justify-center"
          >
            {({ loading }) => (loading ? "Preparing..." : "Download PDF")}
          </PDFDownloadLink>
        </div> */}
      </div>
    </div>
  );
};

export default TicketList;
