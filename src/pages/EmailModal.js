import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Wizard from "./Wizard";
import { FaTimes } from "react-icons/fa";

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    top: "20%",
    left: "35%",
    right: "25%",
    bottom: "20%",
    // marginLeft: "10%",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    backgroundColor: "#f6f4ee",
    borderRadius: "8px",
  },
};
const closeButton = {
  // padding: "0.5rem",
  position: "relative",
  float: "right",
  color: "#8e8169",
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EmailModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#8e8169";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Contact Agents</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact</h2> */}
        {/* BUG: button doesn't work all of a sudden */}
        <FaTimes style={closeButton} onClick={closeModal} />
        <form>
          <Wizard />
        </form>
      </Modal>
    </div>
  );
}

export default EmailModal;
