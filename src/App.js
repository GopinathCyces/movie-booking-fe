import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin";
import MovieList from "./Components/MovieList";
import Booking from "./Components/Booking";
import Account from "./Components/Account";
import Seat from "./Components/Seat";

export let screensData = [
  {
    id: 1,
    time: "9.00 AM",
    seats: [
      {
        id:1,
        name: "A1",
        Booked: true,
      },
      {
        id: 2,
        name: "A2",
        Booked: true,
      },
      {
        id: 3,
        name: "A3",
        Booked: false,
      },
      {
        id: 4,
        name: "A4",
        Booked: false,
      },
      {
        id: 5,
        name: "A5",
        Booked: false,
      },
      {
        id: 6,
        name: "A6",
        Booked: false,
      },
      {
        id: 7,
        name: "A7",
        Booked: false,
      },
      {
        id: 8,
        name: "A8",
        Booked: false,
      },
      {
        id: 9,
        name: "A9",
        Booked: true,
      },
      {
        id: 10,
        name: "A10",
        Booked: true,
      },
      {
        id:11,
        name: "B1",
        Booked: false,
      },
      {
        id: 12,
        name: "B2",
        Booked: false,
      },
      {
        id: 13,
        name: "B3",
        Booked: false,
      },
      {
        id: 14,
        name: "B4",
        Booked: true,
      },
      {
        id: 15,
        name: "B5",
        Booked: true,
      },
      {
        id: 16,
        name: "B6",
        Booked: true,
      },
      {
        id: 17,
        name: "B7",
        Booked: false,
      },
      {
        id: 18,
        name: "B8",
        Booked: false,
      },
      {
        id: 19,
        name: "B9",
        Booked: false,
      },
      {
        id: 20,
        name: "B10",
        Booked: false,
      },
      { 
        id:21,
        name: "C1",
        Booked: false,
      },
      { 
        id: 22,
        name: "C2",
        Booked: false,
      },
      { 
        id: 23,
        name: "C3",
        Booked: false,
      },
      { 
        id: 24,
        name: "C4",
        Booked: false,
      },
      { 
        id: 25,
        name: "C5",
        Booked: false,
      },
      { 
        id: 26,
        name: "C6",
        Booked: false,
      },
      {
        id: 27,
        name: "C7",
        Booked: false,
      },
      { 
        id: 28,
        name: "C8",
        Booked: false,
      },
      {
        id: 29,
        name: "C9",
        Booked: false,
      },
      {
        id: 30,
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 2,
    time: "10.15 AM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 3,
    time: "11.00 AM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 4,
    time: "2.30 PM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 5,
    time: "4.00 PM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 6,
    time: "5.30 PM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 7,
    time: "7.45 PM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
  {
    id: 8,
    time: "10.30 PM",
    seats: [
      {
        name: "A1",
        Booked: false,
      },
      {
        name: "A2",
        Booked: false,
      },
      {
        name: "A3",
        Booked: false,
      },
      {
        name: "A4",
        Booked: false,
      },
      {
        name: "A5",
        Booked: false,
      },
      {
        name: "A6",
        Booked: false,
      },
      {
        name: "A7",
        Booked: false,
      },
      {
        name: "A8",
        Booked: false,
      },
      {
        name: "A9",
        Booked: false,
      },
      {
        name: "A10",
        Booked: false,
      },
      {
        name: "B1",
        Booked: false,
      },
      {
        name: "B2",
        Booked: false,
      },
      {
        name: "B3",
        Booked: false,
      },
      {
        name: "B4",
        Booked: true,
      },
      {
        name: "B5",
        Booked: true,
      },
      {
        name: "B6",
        Booked: true,
      },
      {
        name: "B7",
        Booked: false,
      },
      {
        name: "B8",
        Booked: false,
      },
      {
        name: "B9",
        Booked: false,
      },
      {
        name: "B10",
        Booked: false,
      },
      {
        name: "C1",
        Booked: false,
      },
      {
        name: "C2",
        Booked: false,
      },
      {
        name: "C3",
        Booked: false,
      },
      {
        name: "C4",
        Booked: false,
      },
      {
        name: "C5",
        Booked: false,
      },
      {
        name: "C6",
        Booked: false,
      },
      {
        name: "C7",
        Booked: false,
      },
      {
        name: "C8",
        Booked: false,
      },
      {
        name: "C9",
        Booked: false,
      },
      {
        name: "C10",
        Booked: false,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/timings" element={<Booking />} />
        <Route path="/seats" element={<Seat />} />
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
