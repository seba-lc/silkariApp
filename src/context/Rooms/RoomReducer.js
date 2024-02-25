import { GET_ROOM, GET_ROOM_DATA, UPDATE_ROOM } from "../../type";


export default (state, action) => {
  switch(action.type){
    case GET_ROOM_DATA:
      return {
        ...state,
        roomData: action.payload
      }

    case GET_ROOM:
      return {
        ...state,
        roomState: action.payload
      }

    case UPDATE_ROOM:
      const newRoomData = state.roomData.concat([]);
      const roomEdited = newRoomData.find(room => room._id === action.payload._id);
      const roomEditedIndex = newRoomData.indexOf(roomEdited);
      newRoomData[roomEditedIndex] = action.payload
      return {
        ...state,
        roomData: newRoomData,
        roomState: newRoomData.filter(room => room.room === action.payload.room)
      }
  }
  
}