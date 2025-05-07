import React, { useState } from "react";
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
import { CanvasBarcode } from "./PDFTicketDocumnet/CanvasBarcode";

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
  const [barcodeDataUrl, setBarcodeDataUrl] = useState("");
  const itinerary = ticket.itineraries[activeIndex];
  const passenger = ticket.passengers[0];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <img
          src={ticket.companyLogoUrl}
          className="h-10 w-auto object-contain"
          alt="Company Logo"
        />

        <CanvasBarcode value={ticket.orderId} onDataUrl={setBarcodeDataUrl} />

        {barcodeDataUrl ? (
          <PDFDownloadLink
            document={
              <PDFTicketDocument
                ticket={ticket}
                passenger={passenger}
                activeIndex={activeIndex}
                barcodeImage={barcodeDataUrl}
              />
            }
            fileName="flight-ticket.pdf"
          >
            {({ loading }) =>
              loading ? (
                <span>Preparing PDF...</span>
              ) : (
                <LuDownload className="w-8 h-8" />
              )
            }
          </PDFDownloadLink>
        ) : (
          <p>Generating barcode…</p>
        )}
      </div>

      <div className="flex flex-col justify-between sm:flex-row gap-6 mt-6">
        <TicketHeader passenger={passenger} ticket={ticket} />
        <BookingInfo ticket={ticket} />
      </div>

      <ItineraryTabs
        itineraries={ticket.itineraries}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <ItineraryCard itinerary={itinerary} ticket={ticket} />
      <PassengerDetails itinerary={itinerary} passenger={passenger} />
      <TicketTerms />
    </div>
  );
};

export default TicketCard;
