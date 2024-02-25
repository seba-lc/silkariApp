import { Modal } from 'react-bootstrap';

const MyModal = ({ children, modalTitle, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="market-font-style">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;