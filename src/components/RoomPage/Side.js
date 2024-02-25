import React, { useContext, useEffect, useState } from "react";
import SideForm from "./SideForm";
import { useLocation, useNavigate } from "react-router-dom";
import IssueContext from "../../context/Issues/IssueContext";
import MyModal from "../MyModal/MyModal";
import IssuesList from "./IssuesList";

const Side = ({ roomData }) => {
  const [updateMood, setUpdateMood] = useState(false);
  const {notDoneIssues, allIssues} = useContext(IssueContext);
  const [roomIssues, setRoomIssues] = useState([]);

  //MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();
  const location = useLocation();

  const getRoomIssues = () => {
    const roomIssuesData = notDoneIssues.concat([]);
    const data = roomIssuesData.filter(item => item.roomAsigned === roomData.room+roomData.side);
    setRoomIssues(data);
  }

  useEffect(() => {
    getRoomIssues();
  }, [roomData])

  return (
    <>
      {
        updateMood ? (
          <SideForm roomData={roomData} setUpdateMood={setUpdateMood} />
        ) : (
          <div className="border side-style px-3 d-flex flex-column align-items-start">
            <div>Side {roomData?.side}</div>
            <div>Guest In: {roomData?.guestIn.toString()}</div>
            <div>Status: {roomData?.roomStatus}</div>
            <button onClick={() => updateMood ? setUpdateMood(false) : setUpdateMood(true)}>Update Information</button>
            <button onClick={() => navigate(`/newissue/${location.pathname.substring(1)+roomData?.side}`)}>Add Room Issue</button>
            {
              roomIssues?.length !== 0 ? (
                <button onClick={handleShow}>Check Issues ({`${roomIssues.length}`})</button>
              ) : null
            }
          </div>
        )
      }

      <MyModal
        show={show}
        handleClose={handleClose}
        modalTitle="Room Issues"
      >
        <IssuesList roomIssues={roomIssues} />
      </MyModal>
      
    </>
  );
};

export default Side;
