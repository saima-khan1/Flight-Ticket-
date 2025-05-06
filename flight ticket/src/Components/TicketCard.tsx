import React from "react";
import { BookingType } from "../types";
import TicketHeader from "./TicketHeader";
import ItineraryTabs from "./ItineraryTabs";
import PassengerDetails from "./PassengerDetails";
import BookingInfo from "./BookingInfo";
import ItineraryCard from "./ItineraryCard";
import TicketTerms from "./TicketTerms";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFTicketDocument from "./PDFTicketDocumnet/PDFTicketDocument";
import { LuDownload } from "react-icons/lu";

interface TicketCardProps {
  ticket: BookingType;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  activeIndex,
  setActiveIndex,
}) => {
  const itinerary = ticket.itineraries[activeIndex];
  const passenger = ticket.passengers[0];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <img
          src={ticket.companyLogoUrl}
          className="h-10 w-auto object-contain"
        />

        <PDFDownloadLink
          document={
            <PDFTicketDocument
              ticket={ticket}
              passenger={passenger}
              activeIndex={activeIndex}
            />
          }
          fileName="flight-tickets.pdf"
        >
          {({ loading }) =>
            loading ? (
              <span>Preparing...</span>
            ) : (
              <LuDownload className="w-8 h-8" />
            )
          }
        </PDFDownloadLink>
      </div>
      <TicketHeader passenger={passenger} ticket={ticket} />

      <ItineraryTabs
        itineraries={ticket.itineraries}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ItineraryCard itinerary={itinerary} ticket={ticket} />

      <PassengerDetails itinerary={itinerary} passenger={passenger} />
      <BookingInfo ticket={ticket} />
      <TicketTerms />
    </div>
  );
};

export default TicketCard;
