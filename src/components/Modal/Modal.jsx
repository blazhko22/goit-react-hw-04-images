import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({src, setShowModal}) {

  useEffect(() => {
    window.addEventListener("keydown", onKeydovnCloseModal);
    return () => window.removeEventListener("keydown", onKeydovnCloseModal);
  })
  
  const onKeydovnCloseModal = (e) => {
    if (e.code === "Escape") {
      setShowModal(false);
    }
  };
  const onBackdropClickCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  
  return createPortal(
    <div
      className={s.Overlay}
      onClick={onBackdropClickCloseModal}
    >
      <img
        className={s.Modal}
        src={src}
        alt="Pictures"
      />
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func,
  setShowModal: PropTypes.func,
};