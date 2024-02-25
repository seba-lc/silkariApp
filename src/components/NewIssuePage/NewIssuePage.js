import React, { useContext, useEffect, useState } from "react";
import "./NewIssuePage.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { axiosBackendClient } from "../../settings/axiosSettings";
import { useLocation, useNavigate } from "react-router-dom";
import IssueContext from "../../context/Issues/IssueContext";

const IssuePage = () => {
  const [newIssue, setNewIssue] = useState({
    description: "",
    entryDate: "08-02-2024",
    status: "not-done", //por defecto es algo que no esta hecho
    sign: "user",
    partsUsed: [],
    updates: [],
    roomAsigned: "",
  });
  const {addIssue} = useContext(IssueContext);

  const location = useLocation();
  let navigate = useNavigate();

  const setInitialValues = () => {
    let todayDate = new Date();
    const month = (todayDate.getMonth()+1).toString();
    const date = `${todayDate.getDate()}-${month.length === 1 ? '0' + month : month}-${todayDate.getFullYear()}`
    setNewIssue({
      ...newIssue,
      entryDate: date,
      roomAsigned: location.pathname.split('/')[location.pathname.split('/').length-1]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = await addIssue(newIssue);
    if(!errors){
      navigate(`/${newIssue.roomAsigned.substring(0, newIssue.roomAsigned.length-1)}`)
    }
  };

  const handleKeyUp = (e) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setInitialValues();
  }, [])

  return (
    <div className="newIssuePage-style d-flex flex-column justify-content-center align-items-center">
      <div>
        <u>Formulario para la entrada de un Issue</u>
      </div>
      <div>(Tengo que hacer otro formulario para modificar un issue luego)</div>
      <Form onSubmit={handleSubmit} className="p-5">
        <FloatingLabel className="" label="Issue Description">
          <Form.Control
            className="newIssue-input-style"
            type="text"
            placeholder="Issue Description"
            onKeyUp={handleKeyUp}
            name="description"
            maxLength={50}
          />
        </FloatingLabel>
        {/* <FloatingLabel className="" label="Date - automatic">
          <Form.Control
            className="newIssue-input-style"
            type="text"
            placeholder="Date - automatic"
            onKeyUp={handleKeyUp}
            name="entryDate"
            maxLength={50}
          />
        </FloatingLabel> */}
        <FloatingLabel className="" label="Sign - automatic">
          <Form.Control
            className="newIssue-input-style"
            type="text"
            placeholder="Sign - automatic"
            onKeyUp={handleKeyUp}
            name="sign"
            maxLength={50}
          />
        </FloatingLabel>
        {/* <FloatingLabel className="" label="Room">
          <Form.Control
            className="newIssue-input-style"
            type="text"
            placeholder="Room"
            onKeyUp={handleKeyUp}
            name="roomAsigned"
            maxLength={50}
          />
        </FloatingLabel> */}
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Set Issue
        </Button>
      </Form>
    </div>
  );
};

export default IssuePage;
