import React from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({room}) => {
  let navigate = useNavigate();

  return (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border pointer room' onClick={() => navigate(`/${room.number}`)}>
      <div>{room.number}</div>
      {
        room.issue ? (
          <div className='d-flex rounded-circle bubble mt-1'>
            s
          </div>
        ) : null
      }
    </div>
  );
};

export default Room;