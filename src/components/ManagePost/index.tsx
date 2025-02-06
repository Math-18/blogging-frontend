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
  Spinner,
  TextareaDescription,
} from "./style";

interface LocationState {
  action: string;
  postId?: number;
}

const ManagePostComponent = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const action = state?.action || "default";
  const postId = state?.postId || null;

  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectPost, setSelectPost] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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
      if (action === "edit" && postId) {
        try {
          const response = await api.get(`/posts/${postId}`);
          const post = response.data.data;
          setTitle(post.title);
          setDescricao(post.description);
          setConteudo(post.content);
          setAutor(post.author);
          setTheme(post.subject);
          setSelectPost(response.data.data);
        } catch (error) {
          console.error("Erro ao buscar o post:", error);
        }
      }
    };

    returnSelectPost();
  }, [title, descricao, autor, theme, postId, action]);

  const createPost = async () => {
    setIsLoading(true);
    try {
      const body = {
        title: title,
        description: descricao,
        content: conteudo,
        author: autor,
        subject: theme,
      };
      console.log("erro", body);

      const response = await api.post(`/posts`, body);
      setCreateSuccess(true);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      setCreateSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const editPost = async () => {
    setIsLoading(true);
    try {
      const body = {
        title: title,
        description: descricao,
        content: conteudo,
        author: autor,
        subject: theme,
      };
      const response = await api.put(`/posts/admin/update/${postId}`, body);

      setEditSuccess(true);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      setEditSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (action === "criar") {
      setTitle("");
      setDescricao("");
      setConteudo("");
      setAutor("");
      setTheme("");
    }
    navigate("/posts/admin");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createPost();

      setShowCreateModal(false);
      setTitle("");
      setDescricao("");
      setConteudo("");
      setAutor("");
      setTheme("");
      navigate("/posts/admin");
    } catch (error) {
      console.log("Erro ao criar a postagem:", error);
      setShowCreateModal(true);
    }
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();

    try {
      await editPost();

      setShowEditModal(false);
      setTitle("");
      setDescricao("");
      setConteudo("");
      setAutor("");
      setTheme("");
      navigate("/posts/admin");
    } catch (error) {
      console.log("Erro ao editar a postagem", error);
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
        {isLoading ? (
          <Spinner />
        ) : (
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
              <TextareaDescription
                placeholder="Digite a descrição da postagem"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

              {/* CONTEUDO */}
              <Label htmlFor="title">Conteúdo</Label>
              <Textarea
                placeholder="Digite o conteúdo da postagem"
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
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
        )}
      </AppContainer>

      {/* MODAIS DE ERRO */}
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
