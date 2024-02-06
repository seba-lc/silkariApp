import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Booking from './pages/Booking';
import Room from './pages/Room';
import Item from './pages/Item';
import Stock from './pages/Stock';
import Issue from './pages/Issue';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bookings" element={<Booking />} />
      <Route path="/rooms" element={<Room />} />
      <Route path="/items" element={<Item />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/issue" element={<Issue />} />
    </Routes>
    </>
  );
}

export default App;

//CON EL COMANDO RSC SE CREA EL FUNCTIONAL COMPONENT!!!!!!!!!!!!!!!!!!!!
