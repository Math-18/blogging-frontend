import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px); // Subtrai a largura da sidebar
  margin-left: 250px; // Compensa a posição da sidebar com margem

  @media (max-width: 800px) {
    width: 100%; // Para telas menores, o conteúdo ocupará toda a largura
    margin-left: 0; // Sem margem para telas menores
  }
`;

export const ContentWrapper = styled.div<{ sidebarOpen: boolean }>`
  flex-grow: 1; // O conteúdo vai ocupar o espaço restante ao lado da sidebar
  padding-left: ${(props) =>
    props.sidebarOpen
      ? "20px"
      : "0"}; // Adiciona padding entre a sidebar e o conteúdo
  transition: margin-left 0.3s ease, width 0.3s ease;

  @media (max-width: 800px) {
    width: 100%; // Em resoluções menores, o conteúdo vai ocupar toda a largura
    padding-left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #2e2e2e;
  color: white;
`;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
`;

export const ActionButtonView = styled.button`
  background-color: #0d54c0;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1873fa;
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

export const ActionButtonDelete = styled.button`
  background-color: #800020;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c50233;
  }
`;

// =============================
// ESTILOS PARA O MODAL
// =============================

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 50%;
  max-height: 80vh;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ModalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ModalListItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
`;

export const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;
