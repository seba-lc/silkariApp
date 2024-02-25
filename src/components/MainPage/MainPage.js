import React, { useContext, useEffect, useState } from 'react';
import './MainPage.css';
import BlockA from './blocks/BlockA';
import BlockB from './blocks/BlockB';
import BlockC from './blocks/BlockC';
import BlockE from './blocks/BlockE';
import BlockD from './blocks/BlockD';
import RoomContext from '../../context/Rooms/RoomContext';
import IssueContext from '../../context/Issues/IssueContext';

const MainPage = () => {
  const { roomData, bringRoomData } = useContext(RoomContext);
  const { allIssues, bringIssues, notDoneIssuesFilter, notDoneIssues} = useContext(IssueContext);
  const [rooms, setRooms] = useState([]);

  const createMap = () => {
    const roomNumbers = [];
    const prueba = [];
    for(let i=1; i<=89; i++){
      roomNumbers.push({
        number: i,
        issue: notDoneIssues.find(item => item.roomAsigned.substring(0, item.roomAsigned.length-1) === i.toString()) !== undefined
      });
    };
    setRooms(roomNumbers);
  }

  useEffect(() => {
    bringRoomData();
    bringIssues();
  }, [])

  useEffect(() => {
    notDoneIssuesFilter();
    createMap();
  }, [allIssues])

  return (
    <div className='mainPage-style d-flex justify-content-center align-items-center'>
      <BlockA rooms={rooms} />
      <div className='d-flex flex-column m-4'>
        <BlockC rooms={rooms} />
        <BlockB rooms={rooms} />
      </div>
      <div className='d-flex flex-column m-4'>
        <BlockE rooms={rooms} />
        <BlockD rooms={rooms} />
      </div>
    </div>
  );
};

export default MainPage;