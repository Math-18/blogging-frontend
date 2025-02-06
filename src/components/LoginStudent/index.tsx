import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/backArrow.png";
import {
  LoginStudentContainer,
  LoginBoxStudent,
  TitleStudent,
  InputStudent,
  Button,
  BackButton,
} from "./style";

const LoginStudentComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/posts");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <LoginStudentContainer>
        <BackButton onClick={handleBack}>
          <img src={backIcon} width={26} height={26} alt="Voltar" />
          Voltar
        </BackButton>
        <LoginBoxStudent>
          <TitleStudent>Login</TitleStudent>
          <InputStudent type="text" placeholder="Username" />
          <InputStudent type="password" placeholder="Password" />
          <Button onClick={handleLogin}>Sign In</Button>
        </LoginBoxStudent>
      </LoginStudentContainer>
    </>
  );
};

export default LoginStudentComponent;
