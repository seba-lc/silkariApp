import React from "react";
import Room from "../Room";

const BlockC = ({rooms}) => {
  return (
    <div className="border block-C mb-4">
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 27 && room.number <= 32 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 33 && room.number <= 38 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 39 && room.number <= 44 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
    </div>
  );
};

export default BlockC;
