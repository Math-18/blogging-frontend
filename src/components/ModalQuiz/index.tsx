import React from "react";
import ReactDOM from "react-dom";
import { Overlay, ModalContainer, CloseButton } from "./style";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default Modal;
