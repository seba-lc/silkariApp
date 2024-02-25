import React, { useEffect, useState } from "react";
import "./IssuePage.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { axiosBackendClient } from "../../settings/axiosSettings";
import { useLocation } from "react-router-dom";
import { getFormatedDate } from "../../helpers/getFormatedDate";

const IssuePage = () => {
  const [items, setItems] = useState([]);
  const [issueUpdated, setIssueUpdated] = useState({
    _id: "",
    description: "",
    entryDate: "",
    status: "",
    sign: "",
    partUsed: "",
    partName: "",
    quantity: 0, //Esto lo deberia arreglar para que quede dentro de parts used. tendria que armar un dato de stock aca y recien meterlo al array
    roomAsigned: "",
    //A estos datos los separo despues para mandarlos al back
    updateDescription: "",
    updateDate: "",
    updateSign: "maintenance"
  })
  const location = useLocation();
  const data = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateDataDB = {
      description: issueUpdated.updateDescription,
      entryDate: issueUpdated.updateDate,
      sign: issueUpdated.updateSign,
      updateStatus: issueUpdated.status
    }
    const stockDB = {
      item: issueUpdated.partUsed,
      entryQuantity: -issueUpdated.quantity,
      entryDate: issueUpdated.updateDate,
      sign: issueUpdated.updateSign
    }
    try {
      const response = await axiosBackendClient.post('/issues/update', [updateDataDB, stockDB, issueUpdated._id, issueUpdated.partName]);
      if(response.status === 200) {
        console.log(response.data.message);
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyUp = (e) => {
    setIssueUpdated({
      ...issueUpdated,
      [e.target.name]: e.target.value
    })
  };

  const handleChange = (e) => {
    setIssueUpdated({
      ...issueUpdated,
      status: e.target.id
    })
  };

  const handleSelectChange = (e) => {
    setIssueUpdated({
      ...issueUpdated,
      partUsed: e.target.value.split(',')[0],
      partName: e.target.value.split(',')[1]
    })
  }

  const setIssueComing = () => {
    const date = getFormatedDate();
    setIssueUpdated({
      ...issueUpdated,
      _id: data?._id,
      description: data?.description,
      entryDate: data?.entryDate,
      sign: data?.sign,
      roomAsigned: data?.roomAsigned,
      status: data?.status,
      updateDate: date
    })
  }

  const bringItems = async () => {
    try {
      const response = await axiosBackendClient.get('/items');
      if(response.data.length !== 0){
        setItems(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    bringItems();
    setIssueComing();
  }, [])

  return (
    <div className="issuePage-style d-flex flex-column justify-content-center align-items-center">
      <div>
        <u>Formulario para actualizar un issue</u>
      </div>
      <Form onSubmit={handleSubmit} className="p-5">
        <FloatingLabel className="" label="Issue Description">
          <Form.Control
            className="issue-input-style"
            type="text"
            placeholder="Issue Description"
            onKeyUp={handleKeyUp}
            name="entryQuantity"
            maxLength={50}
            value={issueUpdated.description}
            disabled
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Date">
          <Form.Control
            className="issue-input-style"
            type="text"
            placeholder="Date"
            onKeyUp={handleKeyUp}
            name="entryDate"
            maxLength={50}
            value={issueUpdated.entryDate}
            disabled
          />
        </FloatingLabel>

        <FloatingLabel className="" label="Sign">
          <Form.Control
            className="issue-input-style"
            type="text"
            placeholder="Sign"
            onKeyUp={handleKeyUp}
            name="sign"
            maxLength={50}
            value={issueUpdated.sign}
            disabled
          />
        </FloatingLabel>
        <FloatingLabel className="" label="Room">
          <Form.Control
            className="issue-input-style"
            type="text"
            placeholder="Room"
            onKeyUp={handleKeyUp}
            name="roomAsigned"
            maxLength={50}
            value={issueUpdated.roomAsigned}
            disabled
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between align-items-center my-3">
          <Form.Check
            type="radio"
            label="Not Done"
            className="px-1"
            id="not-done"
            name="status"
            onChange={handleChange}
            checked={issueUpdated.status === "not-done"}
          />
          <Form.Check
            type="radio"
            label="Done"
            name="status"
            id="done"
            className="px-1"
            onChange={handleChange}
            checked={issueUpdated.status === "done"}
          />
          <Form.Check
            type="radio"
            label="Contractor Needed"
            className="px-1"
            id="contractor"
            name="status"
            onChange={handleChange}
            checked={issueUpdated.status === "contractor"}
          />
        </div>
        {/* EL SELECT VA A CAMBIAR LUEGO PORQUE TENGO QUE TENER LA POSIBILIDAD DE ELEGIR VARIAS PARTES */}
        <div className="d-flex mb-3">
          <Form.Select onChange={handleSelectChange}> 
            <option>Item used</option>
            {
              items.map(item => (
                <option key={item._id} value={[item._id, item.itemName]}>{item.itemName}</option>
              ))
            }
          </Form.Select>
          <input className="quantityInput-style ms-3" type="number" name="quantity" placeholder="quantity" onKeyUp={handleKeyUp} />
        </div>
        <FloatingLabel className="" label="Update (description)">
          <Form.Control
            className="issue-input-style"
            type="text"
            placeholder="Update (description)"
            onKeyUp={handleKeyUp}
            name="updateDescription"
            maxLength={100}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Update Issue
        </Button>
      </Form>
    </div>
  );
};

export default IssuePage;
