import styled from "styled-components";

export const LoginStudentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

export const LoginBoxStudent = styled.div`
  background-color: #333;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

export const TitleStudent = styled.h1`
  color: white;
  text-align: center;
`;

export const InputStudent = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #800020;
  border-radius: 4px;
  background-color: #222;
  color: white;

  &:focus {
    outline: none;
    border-color: white;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #800020;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 120px;
  font-size: 15px;

  &:hover {
    background-color: #a0002f;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  color: white;
  border: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
