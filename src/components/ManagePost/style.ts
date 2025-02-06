import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const Container = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  overflow-y: auto;
  max-height: 92vh;
`;

export const Label = styled.label`
  color: #800020;
  font-size: 18px;
  width: 500px;
  line-height: 20px;
  font-weight: bold;
  margin: 10px 0 0px;
  display: block;
  text-align: left;
  margin-left: 14px;
`;

export const Title = styled.h1`
  color: #800020;
  text-align: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 15px 0;
  border: 1px solid #800020;
  border-radius: 4px;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const Select = styled.select`
  width: 94%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #800020;
  border-radius: 4px;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const TextareaDescription = styled.textarea`
  width: 100%;
  max-width: 460px;
  height: 40px;
  padding: 10px;
  margin: 12px auto;
  border: 1px solid #800020;
  border-radius: 4px;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 460px;
  height: 80px;
  padding: 10px;
  margin: 12px auto;
  border: 1px solid #800020;
  border-radius: 4px;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #800020;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  width: 120px;
  margin-left: 20px;

  &:hover {
    background-color: black;
  }

  &:disabled {
    background-color: #aaaaaa;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const BackButton = styled.button`
  background-color: #800020;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  width: 120px;

  &:hover {
    background-color: black;
  }
`;

export const PositionButtons = styled.div`
  display: flex;
  margin-top: 30px;
  width: 97%;
  justify-content: end;
`;

// MODAL
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 26px;
  color: black;
`;

export const ModalBody = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: #800020;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(128, 0, 32, 0.3);
  border-top: 4px solid #800020;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
  margin: auto;
`;
