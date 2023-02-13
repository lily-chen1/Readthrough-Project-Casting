import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Wizard from './Wizard';
import { FaTimes } from "react-icons/fa";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f6f4ee'
  },
};
const closeButton = {
    position: 'relative',
        
    padding: '1.5em',
 }
 

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function EmailModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact</h2>
        <FaTimes style={closeButton} onClick={closeModal}/>
        <form>
         <Wizard/>
        </form>
      </Modal>
    </div>
  );
}

export default EmailModal;