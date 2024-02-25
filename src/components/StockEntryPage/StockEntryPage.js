import React, { useEffect, useState } from "react";
import "./StockEntryPage.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { axiosBackendClient } from "../../settings/axiosSettings";

const StockEntryPage = () => {
  const [items, setItems] = useState([]);
  const [newStock, setNewStock] = useState({
    item: '',
    area: '',
    entryQuantity: 0,
    entryDate: '',
    sign: 'user'
  })

  const setDate = () => {
    let todayDate = new Date();
    const month = (todayDate.getMonth()+1).toString();
    const date = `${todayDate.getDate()}-${month.length === 1 ? '0' + month : month}-${todayDate.getFullYear()}`
    setNewStock({
      ...newStock,
      entryDate: date
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axiosBackendClient.post('/stock', newStock);
    if(response.status === 200) {
      console.log(response.data.message);
      e.target.reset();
    }
  };

  const handleKeyUp = (e) => {
    setNewStock({
      ...newStock,
      [e.target.name]: e.target.value
    })
  };

  const handleChange = (e) => {
    setNewStock({
      ...newStock,
      [e.target.name]: e.target.id
    })
  }

  const handleSelectChange = (e) => {
    setNewStock({
      ...newStock,
      item: e.target.value
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
    setDate();
  }, [])

  return (
    <div className="stockEntryPage-style d-flex flex-column justify-content-center align-items-center">
      <div>
        <u>Formulario para la entrada de Stock</u>
      </div>
      <Form onSubmit={handleSubmit} className="p-5">
        <Form.Select onChange={handleSelectChange}>
          <option>Select Item</option>
          {
            items.map(item => (
              <option key={item._id} value={item._id}>{item.itemName}</option>
            ))
          }
        </Form.Select>
        <div className="d-flex justify-content-evenly align-items-center my-3">
          <Form.Check
            type="radio"
            label="Housekeeping"
            name="area"
            id="housekeeping"
            className="px-1"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Maintenance"
            className="px-1"
            id="maintenance"
            name="area"
            onChange={handleChange}
          />
        </div>
        <FloatingLabel className="" label="Enter quantity">
          <Form.Control
            className="stock-input-style"
            type="number"
            placeholder="Enter quantity"
            onKeyUp={handleKeyUp}
            name="entryQuantity"
            maxLength={50}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Set Stock entry
        </Button>
      </Form>
    </div>
  );
};

export default StockEntryPage;
