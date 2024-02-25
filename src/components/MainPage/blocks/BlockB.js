import React from "react";
import Room from "../Room";

const BlockB = ({rooms}) => {
  return (
    <div className="border block-B">
      <div className="hall-L border d-flex">
        {rooms.map((room) =>
          room.number >= 21 && room.number <= 26 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall-L border d-flex">
        {rooms.map((room) =>
          room.number >= 15 && room.number <= 20 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
    </div>
  );
};

export default BlockB;
