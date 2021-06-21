import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ clearSelectedOption, selectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={clearSelectedOption}
    contentLabel="Selected Option"
    appElement={document.getElementById('app')}
    closeTimeoutMS={250}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={clearSelectedOption}>OK!</button>
  </Modal>
);

export default OptionModal;
