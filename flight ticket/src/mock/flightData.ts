export interface FlightTicket {
  id: string;
  name: string;
  passportNumber: string;
  pnr: number;
  from: string;
  to: string;
  flightNumber: string;

  departureTime: string;
  arrivalTime: string;
  status: "On Time" | "Delayed" | "Cancelled";
  baggage: string;
  meals: string[];
  price: number;
}

export const mockFlightTickets: FlightTicket[] = [
  {
    id: "1",
    name: " Mr John Doe",
    passportNumber: "X1234567",
    pnr: 5665,
    from: " JFK",
    to: "LHR",
    flightNumber: "BA178",
    departureTime: "2025-04-20T18:30:00Z",
    arrivalTime: "2025-04-21T06:45:00Z",
    status: "On Time",
    baggage: "2 x 23kg",
    meals: ["Dinner", "Breakfast"],
    price: 820.0,
  },
];
