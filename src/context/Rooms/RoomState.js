import { useReducer } from "react";
import RoomReducer from "./RoomReducer";
import { axiosBackendClient } from "../../settings/axiosSettings";
import { GET_ROOM, GET_ROOM_DATA, UPDATE_ROOM } from "../../type";
import RoomContext from "./RoomContext";


const RoomState = ({ children }) => {
  const initialState = {
    roomData: [], //son todas las habitaciones
    roomState: [], //es el side A y B de una habitación seleccionada
  };

  const [state, dispatch] = useReducer(RoomReducer, initialState);

  const bringRoomData = async () => {
    try {
      const response = await axiosBackendClient.get('/rooms');
      if(response.status === 200){
        dispatch({
          type: GET_ROOM_DATA,
          payload: response.data
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getRoom = (room) => {
    const roomSelected = state.roomData.filter(item => item.room === room.toString());
    dispatch({
      type: GET_ROOM,
      payload: roomSelected
    })
  }

  const updateRoom = async (roomState) => {
    let error = false;
    try {
      const response = await axiosBackendClient.post('/rooms/edit', roomState);
      if(response.status === 200) {
        dispatch({
          type: UPDATE_ROOM,
          payload: response.data.room
        })
        return error;
      }
      return error = true;
    } catch (error) {
      console.log(error);
      return error = true;
    }
  }

  return (
    <RoomContext.Provider
      value={{
        roomData: state.roomData,
        roomState: state.roomState,
        bringRoomData,
        getRoom,
        updateRoom
      }}
    >
      {children}
    </RoomContext.Provider>
  )

}

export default RoomState;