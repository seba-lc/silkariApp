import React from "react";
import Room from "../Room";

const BlockE = ({rooms}) => {
  return (
    <div className="border block-E mb-4">
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 63 && room.number <= 71 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 72 && room.number <= 80 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="hall border d-flex">
        {rooms.map((room) =>
          room.number >= 81 && room.number <= 89 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
    </div>
  );
};

export default BlockE;