import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(10px);
`;

export const ModalContainer = styled.div`
  padding: 24px;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px #800020;
  position: relative;
  background-color: black;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #800020;

  &:hover {
    color: #000;
  }
`;
