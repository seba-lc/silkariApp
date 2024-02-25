import React, { useState } from 'react';
import './ItemPage.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { axiosBackendClient } from '../../settings/axiosSettings';

const ItemsPage = () => {
  const [newItem, setNewItem] = useState({
    itemName: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axiosBackendClient.post('/items', newItem);
    if(response.status === 200){
      console.log(response.data.message);
      e.target.reset();
    }
  }

  const handleKeyUp = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value.trim()
    });
  }

  return (
    <div className='itemPage-style d-flex flex-column justify-content-center align-items-center'>
      <div><u>Formulario para agregar Items</u></div>
      <Form onSubmit={handleSubmit} className='p-5'>
        <FloatingLabel className="mb-3" label="Item name">
          <Form.Control className="item-input-style" type="text" placeholder="Item name" onKeyUp={handleKeyUp} name="itemName" maxLength={50} />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="mb-3 w-100">
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default ItemsPage;