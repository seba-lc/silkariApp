import React from "react";
import Room from "../Room";

const BlockD = ({rooms}) => {
  return (
    <div className="border block-D">
      <div className="hall-L border d-flex">
        {rooms.map((room) =>
          room.number >= 45 && room.number <= 53 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall-L border d-flex">
        {rooms.map((room) =>
          room.number >= 54 && room.number <= 62 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
    </div>
  );
};

export default BlockD;