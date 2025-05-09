export type BookingType = {
  Adult: number;
  agentContactNumber: string;
  airlineLogoUrl?: string;
  orderId: string;
  airlinePnr: string;
  child: number;
  companyName: string;
  companyId: any;
  companyLogoUrl?: string;
  created_at?: string;
  currency: string;
  finalDealAdult: number;
  finalDealChild: number;
  finalDealInfant: number;

  groupId: any;
  _id: any;
  infant: number;
  passengers: PassengerType[];
  itineraries: Itinerary[];
  remarks?: string;
  reservedBy: string;
  saleFare: number;
  spreadSheetId: string;
  status: "CREATED" | "RESERVED" | "CONFIRMED" | "CANCELLED";
};

export type PassengerType = {
  type: "Adult" | "child" | "infant";
  dob: string;
  finalDeal: number;
  givenName: string;
  passengerId: string;
  passportDOE: string;
  passportNo: string;
  remarks: string;
  status: string;
  surname: string;
  title: "MR" | "MRS" | "MS" | "CHD" | "INF";
};
export type Itinerary = {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  airportFromCode: string;
  airportToCode: string;
  baggage: string;
  class: string;
  flightNumber: string;
  meals: boolean;
};
