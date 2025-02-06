import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #800020;
  margin-bottom: 20px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #4d4d4d;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 1.25rem;
  color: #4d4d4d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const Author = styled.p`
  font-size: 1rem;
  color: #800020;
  text-align: right;
  font-style: italic;
  margin-top: 10px;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #800020;
`;

export const BackButton = styled.button`
  background-color: #800020;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #800020;
    transition: background-color 0.3s ease;
  }
`;
