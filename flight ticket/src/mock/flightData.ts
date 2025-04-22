export interface FlightTicket {
  id: string;
  name: string;
  passportNumber: string;
  pnr: string;
  airportFromCode: string;
  airportToCode: string;
  from: string;
  to: string;
  flightNumber: string;
  reservedOn: string;
  departureTime: string;
  arrivalTime: string;
  status: "CREATED" | "RESERVED" | "CONFIRMED" | "CANCELLED";
  baggage: string;
  meals: boolean;
  price: number;
  reservedBy: string;
  companyName: string;
  orderId: string;
  class: string;
}

export const mockFlightTickets: FlightTicket[] = [
  {
    id: "1",
    name: " Mr John Doe",
    passportNumber: "X1234567",
    pnr: "5665",
    airportFromCode: " NY",
    airportToCode: "LDN",
    from: "  New York",
    to: "London",

    flightNumber: "BA178",
    reservedOn: "15-04-2025",
    departureTime: "2025-04-20T18:30:00Z",
    arrivalTime: "2025-04-21T06:45:00Z",
    status: "CONFIRMED",
    baggage: "23kg",
    meals: true,
    price: 10000,
    reservedBy: "Khan",
    companyName: "Travels and tours",
    orderId: "412234444",
    class: "Economy",
  },
];

// export type BookingType = {
//   adult: number;
//   agentContactNumber: string;
//   orderId: string;
//   airlinePnr: string;
//   child: number;
//   companyName: string;
//   companyId: any;
//   created_at?: string;
//   currency: string;
//   finalDealAdult: number;
//   finalDealChild: number;
//   finalDealInfant: number;
//   groupId: any;
//   _id: any;
//   infant: number;
//   passengers: PassengerType[];
//   itineraries: Itinerary[];
//   remarks?: string;
//   reservedBy: string;
//   saleFare: number;
//   spreadSheetId: string;
//   status: "CREATED" | "RESERVED" | "CONFIRMED" | "CANCELLED";
// };

// export type PassengerType = {
//   type: "adult" | "child" | "infant";
//   dob: string;
//   finalDeal: number;
//   givenName: string;
//   passengerId: string;
//   passportDOE: string;
//   passportNo: string;
//   remarks: string;
//   status: string;
//   surname: string;
//   title: "MR" | "MRS" | "MS" | "CHD" | "INF";
// };
// export const mockBooking: BookingType = {
//   adult: 1,
//   child: 0,
//   infant: 0,
//   agentContactNumber: "+46 70 123 4567",
//   orderId: "ORD123456",
//   airlinePnr: "PNR7890",
//   companyName: "Sky Travels",
//   companyId: "company123",
//   created_at: "2025-04-19T10:00:00Z",
//   currency: "SEK",
//   finalDealAdult: 1200,
//   finalDealChild: 0,
//   finalDealInfant: 0,
//   groupId: "group456",
//   _id: "booking789",
//   passengers: [
//     {
//       type: "adult",
//       dob: "1990-05-15",
//       finalDeal: 1200,
//       givenName: "John",
//       passengerId: "passenger001",
//       passportDOE: "2030-05-15",
//       passportNo: "X1234567",
//       remarks: "",
//       status: "CONFIRMED",
//       surname: "Doe",
//       title: "MR",
//     },
//   ],
//   itineraries: [
//     {
//       departureTime: "2025-05-01T08:00:00Z",
//       arrivalTime: "2025-05-01T10:00:00Z",
//       from: "Stockholm Arlanda Airport",
//       to: "Copenhagen Airport",
//       flightNumber: "SK123",
//       airportFromCode: "ARN",
//       airportToCode: "CPH",
//     },
//     {
//       departureTime: "2025-05-01T12:00:00Z",
//       arrivalTime: "2025-05-01T14:00:00Z",
//       from: "Copenhagen Airport",
//       to: "Berlin Brandenburg Airport",
//       flightNumber: "SK456",
//       airportFromCode: "CPH",
//       airportToCode: "BER",
//     },
//   ],
//   remarks: "Vegetarian meal preferred.",
//   reservedBy: "Agent Smith",
//   saleFare: 1300,
//   spreadSheetId: "sheet123",
//   status: "CONFIRMED",
// };
