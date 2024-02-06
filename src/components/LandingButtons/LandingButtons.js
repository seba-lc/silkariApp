import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingButtons = () => {

  let navigate = useNavigate();

  return (
    <div className='border d-flex'>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/')}>Main</div>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/bookings')}>Bookings</div>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/rooms')}>Rooms</div>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/items')}>Items</div>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/stock')}>Stock</div>
      <div className='border p-1 m-1 pointer' onClick={() => navigate('/issue')}>Issues</div>
    </div>
  );
};

export default LandingButtons;