import serviceAgent from "../assets/serviceAgent.svg";
import totalService from "../assets/totalService.svg";
import airportRep from "../assets/airportRep.svg";
import baggageAssist from "../assets/baggageAssist.svg";
import fastTrack from "../assets/fastTrack.svg";
import visa from "../assets/visa.svg";
import garbarataAssist from "../assets/garbarataAssist.svg";
import upTrend from "../assets/upTrend.svg";
import downTrend from "../assets/downTrend.svg";

export const pages = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Reservation",
    link: "/reservation",
  },
  {
    name: "Invoice",
    link: "/invoice",
  },
  {
    name: "Report",
    link: "/report",
  },
  {
    name: "Setting",
    link: "/setting",
  },
];

export const dashboardOpts = [
  {
    name: "Service Agent",
    order: 6,
    trend: "up",
    trendInfo: "Up from yesterday",
    percentage: "8.5%",
    trendIcon: upTrend,
    icon: serviceAgent,
    size: 45,
  },
  {
    name: "Total Service Request",
    order: 2785,
    trend: "up",
    trendInfo: "Up from past week",
    percentage: "1.3%",
    trendIcon: upTrend,
    icon: totalService,
    size: 47,
  },
  {
    name: "Airport Representative Assistance",
    order: 2362,
    trend: "down",
    trendInfo: "Down from yesterday",
    percentage: "4.3%",
    trendIcon: downTrend,
    icon: airportRep,
    size: 53,
  },
  {
    name: "Baggage Assistance",
    order: 49,
    trend: "up",
    trendInfo: "Up from yesterday",
    percentage: "1.8%",
    trendIcon: upTrend,
    icon: baggageAssist,
    size: 45,
  },
  {
    name: "Garbarata Assistance",
    order: 1,
    trend: "up",
    trendInfo: "Up from yesterday",
    percentage: "8.5%",
    trendIcon: upTrend,
    icon: garbarataAssist,
    size: 45,
  },
  {
    name: "Fast Track",
    order: 229,
    trend: "up",
    trendInfo: "Up from yesterday",
    percentage: "8.5%",
    trendIcon: upTrend,
    icon: fastTrack,
    size: 45,
  },
  {
    name: "Visa on Arrival",
    order: 144,
    trend: "up",
    trendInfo: "Up from yesterday",
    percentage: "8.5%",
    trendIcon: upTrend,
    icon: visa,
    size: 45,
  },
];

export const reservationInfo = [
  {
    display: "CODE",
    name: "code",
  },
  {
    display: "NAME",
    name: "name",
  },
  {
    display: "FLIGHT NO",
    name: "flight",
  },
  {
    display: "DATE",
    name: "date",
  },
  {
    display: "TYPE",
    name: "type",
  },
  {
    display: "TIME",
    name: "time",
  },
  {
    display: "TRANSPORT",
    name: "transport",
  },
  {
    display: "REMARKS",
    name: "remarks",
  },
];

export const reservationData = [
  {
    code: "0001",
    name: "Christine Brooks",
    flight: "CX 708",
    date: "02 Jan 2024",
    type: "ARRIVAL",
    time: "10.15",
    transport: "Silverbird Taxi",
    remarks: "ARRIVAL",
  },
  {
    code: "0002",
    name: "Rosie Pearson",
    flight: "GA 108",
    date: "05 Jan 2024",
    type: "ARRIVAL",
    time: "12.15",
    transport: "Alphard",
    remarks: "ARRIVAL",
  },
  {
    code: "0003",
    name: "Darrell Caldwell",
    flight: "SQ 123",
    date: "05 Jan 2024",
    type: "ARRIVAL",
    time: "13.20",
    transport: "Silverbird Taxi",
    remarks: "ARRIVAL",
  },
  {
    code: "0004",
    name: "Gilbert Johnston",
    flight: "CX 723",
    date: "05 Jan 2024",
    type: "ARRIVAL",
    time: "13.25",
    transport: "Silverbird Taxi",
    remarks: "ARRIVAL",
  },
  {
    code: "0005",
    name: "Alan Cain",
    flight: "GA 772",
    date: "05 Jan 2024",
    type: "ARRIVAL",
    time: "14.30",
    transport: "Silverbird Taxi",
    remarks: "ARRIVAL",
  },
  {
    code: "0006",
    name: "Alfred Murray",
    flight: "GA 877",
    date: "06 Jan 2024",
    type: "ARRIVAL",
    time: "14.45",
    transport: "Alphard",
    remarks: "ARRIVAL",
  },
  {
    code: "0007",
    name: "Maggie Sullivan",
    flight: "QR 236",
    date: "06 Jan 2024",
    type: "ARRIVAL",
    time: "15.00",
    transport: "Hyundai Ioniq 5",
    remarks: "ARRIVAL",
  },
  {
    code: "0008",
    name: "Rosie Todd",
    flight: "QS 221",
    date: "08 Jan 2024",
    type: "ARRIVAL",
    time: "15.10",
    transport: "Silverbird Taxi",
    remarks: "ARRIVAL",
  },
];
