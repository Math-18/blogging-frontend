import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableData,
  ActionButtonEdit,
  ActionButtonDelete,
  ContentWrapper,
} from './style';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import DeleteModal from '../DeleteModal/DeleteModal';
import Navbar from '../Navbar/Navbar';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleViewPost = (id: number) => {
    navigate(`/manage`, { state: { action: 'edit', postId: id } });
  };

  const handleDeletePost = async (id: number) => {
    try {
      await api.delete(`/posts/admin/delete/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      console.log('Post deletado com ID:', id);
      setSelectedPost(null); // Fecha o modal
    } catch (error) {
      console.error('Erro ao deletar o post:', error);
    }
  };

  return (
    <div>
      <Navbar
        title="Postagens"
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          marginTop: '60px',
        }}
      >
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <ContentWrapper sidebarOpen={sidebarOpen}>
          <Container>
            {posts.length < 1 ? (
              <p className="text-center font-bold text-2xl text-gray-400 mt-6">
                Sem Registros
              </p>
            ) : (
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Titulo</TableHeader>
                    <TableHeader>Descrição</TableHeader>
                    <TableHeader>Autor</TableHeader>
                    <TableHeader>Tema</TableHeader>
                    <TableHeader>Data</TableHeader>
                    <TableHeader>Ações</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableData>{post.title || 'Sem título'}</TableData>
                      <TableData>
                        {post.description || 'Sem descrição'}
                      </TableData>
                      <TableData>{post.author || 'Sem autor'}</TableData>
                      <TableData>{post.subject || 'Sem tema'}</TableData>
                      <TableData>
                        {post.createdDate
                          ? new Date(post.createdDate).toLocaleDateString(
                              'pt-BR',
                              {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              },
                            )
                          : 'Sem data'}
                      </TableData>

                      <TableData>
                        <ActionButtonEdit
                          onClick={() => handleViewPost(post.id)}
                        >
                          Editar
                        </ActionButtonEdit>
                        <ActionButtonDelete
                          onClick={() => setSelectedPost(post.id)}
                        >
                          Deletar
                        </ActionButtonDelete>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            )}
          </Container>

          {selectedPost && (
            <DeleteModal
              postId={selectedPost}
              onConfirm={handleDeletePost} // Chama a função de delete
              onClose={() => setSelectedPost(null)} // Fecha o modal
            />
          )}
        </ContentWrapper>
      </div>
    </div>
  );
};

export default PostList;
