import React, { useState } from "react";
import "./RoomFormPage.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const RoomFormPage = () => {
  const [roomState, setRoomState] = useState({
    room: '',
    roomStatus: '',
    guestIn: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(roomState);
  };

  const handleKeyUp = (e) => {
    setRoomState({
      ...roomState,
      [e.target.name]: e.target.value
    })
  };

  const handleChange = (e) => {
    setRoomState({
      ...roomState,
      [e.target.name]: e.target.id
    })
  };

  const handleCheckChange = (e) => {
    setRoomState({
      ...roomState,
      [e.target.id]: e.target.checked
    })
  }

  return (
    <div className="roomPage-style d-flex flex-column justify-content-center align-items-center">
      <div>
        <u>Formulario para actualizar el estado de las habitaciones</u>
      </div>
      <div>
        <u>Por ahora esto no tendría uso porque actualizo las habitaciones desde el mapa</u>
      </div>
      {/* <Form onSubmit={handleSubmit} className="p-5">
        <FloatingLabel className="mb-3" label="Room">
          <Form.Control
            className="room-input-style"
            type="text"
            placeholder="Room"
            onKeyUp={handleKeyUp}
            name="room"
            maxLength={50}
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Form.Check
            type="radio"
            label="RTS"
            name="roomStatus"
            id="RTS"
            className="px-1"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="RTC"
            className="px-1"
            id="RTC"
            // defaultChecked={true}
            name="roomStatus"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="CLEAN"
            name="roomStatus"
            id="CLEAN"
            className="px-1"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="CHECKED"
            className="px-1"
            id="CHECKED"
            // defaultChecked={true}
            name="roomStatus"
            onChange={handleChange}
          />
        </div>
        <Form.Check
          className="mb-3"
          type="checkbox"
          label="Guest In House"
          id="guestIn"
          onChange={handleCheckChange}
        />
        <Button variant="primary" type="submit" className="mb-3 w-100">
          Update Room
        </Button>
      </Form> */}
    </div>
  );
};

export default RoomFormPage;
