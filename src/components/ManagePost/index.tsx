import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import {
  AppContainer,
  Container,
  Label,
  Title,
  Input,
  Select,
  Button,
  Textarea,
  BackButton,
  PositionButtons,
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalBody,
  CloseButton,
} from "./style";

interface LocationState {
  action: string;
}

const ManagePostComponent = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const action = state?.action || "default";

  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectPost, setSelectPost] = useState(false);

  const id: number = 1;

  const themes = [
    "Matemática",
    "Ciências",
    "História",
    "Geografia",
    "Literatura",
    "Esporte",
    "Saúde",
    "Artes",
    "Física",
    "Química",
    "Biologia",
    "Tecnologia",
    "Informática",
    "Saúde",
    "Economia",
    "Filosofia",
    "Sociologia",
    "Inglês",
    "Francês",
    "Espanhol",
    "Anúncios",
  ];

  useEffect(() => {
    if (title && descricao && autor && theme) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }

    const returnSelectPost = async () => {
      if (action === "edit") {
        try {
          const response = await api.get(`/posts/${id}`);
          console.log("Post fetched:", response.data);
          setSelectPost(response.data.data);
        } catch (error) {
          console.error("Erro ao buscar o post:", error);
        }
      }
    };

    returnSelectPost();
  }, [title, descricao, autor, theme, id, action]);

  const createPost = async () => {
    try {
      const body = {
        title: title,
        content: descricao,
        author: autor,
        subject: theme,
      };
      const response = await api.post(`/posts`, body);
      console.log("heyy1", response);
      setCreateSuccess(true);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      setCreateSuccess(false);
    }
  };

  const editPost = async () => {
    try {
      const body = {
        title: title,
        content: descricao,
        author: autor,
        subject: theme,
      };
      const response = await api.post(`/posts/admin/update`, body);
      console.log("heyy2", response);

      setEditSuccess(true);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      setEditSuccess(false);
    }
  };

  const handleBack = () => {
    if (action === "criar") {
      setTitle("");
      setDescricao("");
      setAutor("");
      setTheme("");
    }
    navigate("/login");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createPost();

    if (createSuccess) {
      setShowCreateModal(false);
      setTitle("");
      setDescricao("");
      setAutor("");
      setTheme("");
      navigate("/login"); //Alterar para navegar para a tela do matheus
    } else {
      console.log("no");
      setShowCreateModal(true);
    }
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();
    await editPost();

    if (editSuccess) {
      setShowEditModal(false);
      setTitle("");
      setDescricao("");
      setAutor("");
      setTheme("");
      navigate("/login"); //Alterar para navegar para a tela do matheus
    } else {
      console.log("no");
      setShowEditModal(true);
    }
  };

  // MODAL
  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <AppContainer>
        <Container>
          <Title>
            {action === "create" ? "Criar Nova Postagem" : "Editar Postagem"}
          </Title>
          <form onSubmit={handleSubmit}>
            {/* TÍTULO */}
            <Label htmlFor="title">Título</Label>
            <Input
              type="text"
              placeholder="Digite o título da postagem"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* DESCRIÇÃO */}
            <Label htmlFor="title">Descrição</Label>
            <Textarea
              placeholder="Digite a descrição da postagem"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            {/* AUTOR */}
            <Label htmlFor="title">Autor</Label>
            <Input
              type="text"
              placeholder="Digite o autor da postagem"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />

            {/* TEMA */}
            <Label htmlFor="title">Tema</Label>
            <Select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              required
            >
              <option value="" disabled>
                Selecione o tema
              </option>
              {themes.map((themeValue) => (
                <option key={themeValue} value={themeValue}>
                  {themeValue}
                </option>
              ))}
            </Select>

            <PositionButtons>
              <BackButton onClick={handleBack}>Voltar</BackButton>
              <Button
                onClick={action === "create" ? handleSubmit : handleEdit}
                // type="submit"
                disabled={isSaveDisabled}
              >
                {action === "create" ? "Criar" : "Salvar"}
              </Button>
            </PositionButtons>
          </form>
        </Container>
      </AppContainer>
      {showCreateModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>Erro ao criar postagem</ModalTitle>
            <ModalBody>
              Não foi possível criar a postagem. <br />
              Tente novamente mais tarde.
            </ModalBody>
            <CloseButton onClick={closeCreateModal}>Fechar</CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
      {showEditModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>Erro ao editar postagem</ModalTitle>
            <ModalBody>
              Não foi possível editar a postagem. <br />
              Tente novamente mais tarde.
            </ModalBody>
            <CloseButton onClick={closeEditModal}>Fechar</CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default ManagePostComponent;
