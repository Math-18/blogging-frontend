import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c1c;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #800020;
  margin-bottom: 15px;
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  color: #2e2e2e;
  margin-bottom: 20px;
`;

export const ViewButton = styled.button`
  background-color: #800020;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #800020;
    transition: background-color 0.3s ease;
  }
`;

export const SearchBar = styled.input`
  width: 98%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #800020;
  font-size: 1rem;
  color: #ffffff;
  background-color: #333333;
`;

export const PostAuthor = styled.p`
  font-size: 1rem;
  color: #800020;
  margin-top: 10px;
  font-style: italic;
`;

export const LayoutButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;

// MODAL

export const TitleModal = styled.text`
  font-size: 32px;
  color: white;
  font-weight: 500;
`;

export const LayoutScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

export const ButtonModal = styled.button`
  font-size: 20px;
  background-color: #800020;
  color: white;
  font-weight: 500;
  border-radius: 6px;
  height: 46px;
  width: auto;
  cursor: pointer;
  border: none;
`;

export const ScoreText = styled.text`
  font-size: 18px;
  color: white;
`;

export const QuestionsText = styled.text`
  font-size: 20px;
  color: white;
`;

export const LayoutQuestion = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const LabelQuestions = styled.div`
  color: white;
`;

