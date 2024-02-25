import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Booking from './pages/Booking';
import RoomForm from './pages/RoomForm';
import Item from './pages/Item';
import StockEntry from './pages/StockEntry';
import NewIssue from './pages/NewIssue';
import Issue from './pages/Issue';
import RoomState from './context/Rooms/RoomState';
import Room from './pages/Room';
import Stock from './pages/Stock';
import IssueState from './context/Issues/IssueState';

function App() {
  return (
    <>
      <RoomState>
        <IssueState>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:room" element={<Room />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/rooms" element={<RoomForm />} />
            <Route path="/items" element={<Item />} />
            <Route path="/newstock" element={<StockEntry />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/newissue/:room" element={<NewIssue />} />
            <Route path="/issue" element={<Issue />} />
          </Routes>
        </IssueState>
      </RoomState>
    </>
  );
}

export default App;

//CON EL COMANDO RSC SE CREA EL FUNCTIONAL COMPONENT!!!!!!!!!!!!!!!!!!!!
