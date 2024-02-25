import React from "react";
import Room from "../Room";

const BlockA = ({ rooms }) => {
  return (
    <div className="border block-A d-flex">
      <div className="border hall-P d-flex flex-column">
        {rooms.map((room) =>
          room.number >= 7 && room.number <= 14 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
      <div className="border hall-P d-flex flex-column">
        {rooms.map((room) =>
          room.number >= 1 && room.number <= 3 ? <Room key={room.number} room={room} /> : null
        )}
        <Room key="r" room="R" /> {/*aca deberia mandar un objeto como room para arreglarlo pero queda bien asi como esta*/}
        <Room key="p" room="P" /> {/*aca deberia mandar un objeto como room para arreglarlo pero queda bien asi como esta*/}
        {rooms.map((room) =>
          room.number >= 4 && room.number <= 6 ? <Room key={room.number} room={room} /> : null
        )}
      </div>
    </div>
  );
};

export default BlockA;
