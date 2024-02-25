import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import RoomContext from "../../context/Rooms/RoomContext";

const SideForm = ({roomData, setUpdateMood}) => {
  const [roomState, setRoomState] = useState({
    _id: roomData?._id,
    room: roomData?.room,
    roomStatus: roomData?.roomStatus,
    guestIn: roomData?.guestIn,
  });
  const { updateRoom } = useContext(RoomContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await updateRoom(roomState);
    error ? console.log('Algo malió sal') : setUpdateMood(false);
  };

  const handleChange = (e) => {
    setRoomState({
      ...roomState,
      [e.target.name]: e.target.id,
    });
  };

  const handleCheckChange = (e) => {
    setRoomState({
      ...roomState,
      [e.target.id]: e.target.checked
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="border side-style px-3">
      <div>Side {roomData?.side}</div>
      <div className="d-flex justify-content-start align-items-center mb-3">
        <Form.Check
          type="radio"
          label="RTS"
          name="roomStatus"
          id="RTS"
          className="px-4"
          defaultChecked={roomData?.roomStatus === "RTS"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="RTC"
          className="px-4"
          id="RTC"
          defaultChecked={roomData?.roomStatus === "RTC"}
          name="roomStatus"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="CLEAN"
          name="roomStatus"
          id="CLEAN"
          className="px-4"
          onChange={handleChange}
          defaultChecked={roomData?.roomStatus === "CLEAN"}
        />
        <Form.Check
          type="radio"
          label="CHECKED"
          className="px-4"
          id="CHECKED"
          name="roomStatus"
          onChange={handleChange}
          defaultChecked={roomData?.roomStatus === "CHECKED"}
        />
      </div>
      <Form.Check
        className="mb-3"
        type="checkbox"
        label="Guest In House"
        id="guestIn"
        onChange={handleCheckChange}
        defaultChecked={roomData?.guestIn}
      />
      <Button variant="primary" type="submit" className="mb-3 w-100">
        Update Room
      </Button>
    </Form>
  );
};

export default SideForm;
