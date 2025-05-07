import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

import { BookingType, PassengerType } from "../../types";
import { styles } from "./styles";
interface TicketPDFProps {
  ticket: BookingType;
  passenger: PassengerType;
  activeIndex: number;
  barcodeImage: string;
}

interface TicketPDFProps {
  ticket: BookingType;
  passenger: PassengerType;
  activeIndex: number;
  barcodeImage: string;
}

const TicketPDF: React.FC<TicketPDFProps> = ({
  ticket,
  passenger,
  activeIndex,
  barcodeImage,
}) => {
  const itinerary = ticket.itineraries[activeIndex];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image style={styles.logo} src={ticket.companyLogoUrl} />
            <Text>{ticket.companyName}</Text>
            <Text>{ticket.agentContactNumber}</Text>
          </View>

          <View style={styles.headerRight}>
            <Image style={styles.barcode} src={barcodeImage} />
          </View>
        </View>

        <View style={styles.routeSection}>
          <Text>{itinerary.from}</Text>
          <View style={styles.dashedLine} />
          <Image style={styles.logo2} src={ticket.airlineLogoUrl} />
          <View style={styles.dashedLine} />
          <Text>{itinerary.to}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Passenger Information</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Name of Traveller:</Text>
            <Text>
              {passenger.title} {passenger.givenName} {passenger.surname}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Booking Reference:</Text>
            <Text>{ticket.orderId}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>PNR No:</Text>
            <Text>{ticket.airlinePnr}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Status:</Text>
            <Text>{ticket.status}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Meals:</Text>
            <Text>{itinerary.meals ? "Included" : "Not Included"}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Baggage:</Text>
            <Text>{itinerary.baggage}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Departure Information</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text>
              <Text style={styles.label}>From:</Text>{" "}
            </Text>
            <Text>{itinerary.from}</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.column}>
              <Text style={styles.label}>To:</Text> <Text>{itinerary.to}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Class:</Text>
            <Text>{itinerary.class}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Departure Time:</Text>{" "}
            <Text> {new Date(itinerary.departureTime).toLocaleString()}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Arrival Time:</Text>{" "}
            <Text> {new Date(itinerary.arrivalTime).toLocaleString()}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Flight No:</Text>{" "}
            <Text>{itinerary.flightNumber}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.terms}>
          Please arrive 2 hours before your scheduled departure. Tickets are
          non-refundable and non-transferable.
        </Text>
      </Page>
    </Document>
  );
};

export default TicketPDF;
