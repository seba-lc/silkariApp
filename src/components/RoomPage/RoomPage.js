import React, { useContext, useEffect } from "react";
import "./RoomPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import RoomContext from "../../context/Rooms/RoomContext";
import Side from "./Side";

const RoomPage = () => {
  const { roomState, getRoom } = useContext(RoomContext);

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getRoom(location.pathname.substring(1));
  }, []);

  return (
    <div className="roomPage-style d-flex flex-column justify-content-evenly align-items-center">
      <div className="w-100">
        <div className="ps-4">
          <button className="pointer border inline" onClick={() => navigate("/")}>Back</button>
        </div>
        <div className="text-center">ROOM N°{location.pathname.substring(1)}</div>
      </div>
      <div className="d-flex">
        {roomState?.map((roomData, index) => (
          <Side key={index} roomData={roomData} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
