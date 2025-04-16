export interface FlightTicket {
  id: string;
  name: string;
  passportNumber: string;
  pnr: number;
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
}

export const mockFlightTickets: FlightTicket[] = [
  {
    id: "1",
    name: " Mr John Doe",
    passportNumber: "X1234567",
    pnr: 5665,
    airportFromCode: " JFK",
    airportToCode: "LHR",
    from: "  New York",
    to: "London",

    flightNumber: "BA178",
    reservedOn: "15-04-2025",
    departureTime: "2025-04-20T18:30:00Z",
    arrivalTime: "2025-04-21T06:45:00Z",
    status: "CONFIRMED",
    baggage: "2 x 23kg",
    meals: true,
    price: 10000,
    reservedBy: "Mr John Doe",
  },
];
