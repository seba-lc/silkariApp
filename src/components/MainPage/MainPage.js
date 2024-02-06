import React from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  
  let navigate = useNavigate();

  return (
    <div className='mainPage-style d-flex flex-column justify-content-around align-items-center'>
      <div className='border d-flex'>
        <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Bookings</div>
        <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Rooms</div>
        <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Items</div>
        <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Stock</div>
        <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Issues</div>
      </div>
      <div>Aca ira el mapa del Silkari o la lista de habitaciones</div>
      <div></div>
    </div>
  );
};

export default MainPage;