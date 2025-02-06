import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import backIcon from '../../assets/backArrow.png';
import {
  LoginContainer,
  LoginBox,
  Title,
  Input,
  Button,
  BackButton,
} from './style';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      navigate('/posts/admin', { state: { action: 'create' } });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <LoginContainer>
        <BackButton onClick={handleBack}>
          <img src={backIcon} width={26} height={26} alt="Voltar" />
          Voltar
        </BackButton>
        <LoginBox>
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign In</Button>
        </LoginBox>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
