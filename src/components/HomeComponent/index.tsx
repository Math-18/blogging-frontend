import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  StyledButton,
  ButtonText,
  MainText,
  Divider,
} from "./style";
import Modal from "../ModalQuiz";

const HomeComponent = () => {
  const navigate = useNavigate();

  const goToLoginScreen = () => {
    navigate("/login");
  };

  const goToLoginStudents = () => {
    navigate("/posts");
  };

  return (
    <>
      <Container>
        <StyledButton onClick={goToLoginScreen}>
          <MainText>PROFESSORES E FUNCIONÁRIOS</MainText>
          <Divider />
          <ButtonText>Acesse o portal de professores e funcionários</ButtonText>
        </StyledButton>

        <StyledButton onClick={goToLoginStudents}>
          <MainText>ALUNOS</MainText>
          <Divider />
          <ButtonText>Acesse o portal de estudantes</ButtonText>
        </StyledButton>
      </Container>
    </>
  );
};

export default HomeComponent;
