import React, { useState } from "react";
import "./BookingPage.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const BookingPage = () => {
  const [newBooking, setNewBooking] = useState({
    name: '',
    arrivalDate: '',
    departureDate: '',
    roomAsigned: '',
    arrivalTime: '',
    emailContact: 'example@gmail.com',
    phoneContact: '0482637955',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBooking);
  }

  const handleKeyUp = (e) => {
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value
    })
  }



  return (
    <div className="bookingPage-style d-flex flex-column justify-content-center align-items-center">
      <div>
        <u>Formulario para crear un booking</u>
      </div>
      <Form onSubmit={handleSubmit} className="p-5">
        <FloatingLabel className="" label="Guest name">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Guest name"
            onKeyUp={handleKeyUp}
            name="name"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Arrival date (DD-MM-AAAA)">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Arrival date (DD-MM-AAAA)"
            onKeyUp={handleKeyUp}
            name="arrivalDate"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Departure date (DD-MM-AAAA)">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Departure date (DD-MM-AAAA)"
            onKeyUp={handleKeyUp}
            name="departureDate"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Room asigned">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Room asigned"
            onKeyUp={handleKeyUp}
            name="roomAsigned"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Arrival time">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Arrival time"
            onKeyUp={handleKeyUp}
            name="arrivalTime"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Email contact">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Email contact"
            onKeyUp={handleKeyUp}
            name="emailContact"
            maxLength={50}
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Phone contact">
          <Form.Control
            className="booking-input-style"
            type="text"
            placeholder="Phone contact"
            onKeyUp={handleKeyUp}
            name="phoneContact"
            maxLength={50}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Set booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingPage;
