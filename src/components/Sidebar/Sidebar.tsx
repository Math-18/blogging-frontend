import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Usando ícone de usuário
import {
  SidebarContainer,
  UserIcon,
  UserName,
  Divider,
  NavLinks,
  NavLinkItem,
} from "./SidebarStyle";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <UserIcon>
          <FaUserCircle size={60} />
        </UserIcon>
        <UserName>Bem-vindo(a)</UserName>
        <Divider />
        <NavLinks>
          <NavLinkItem onClick={() => navigate("/posts/admin")}>
            Postagens
          </NavLinkItem>
          <NavLinkItem onClick={() => navigate("/alunos")}>Alunos</NavLinkItem>
          <NavLinkItem onClick={() => navigate("/login")}>Sair</NavLinkItem>
        </NavLinks>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
