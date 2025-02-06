import React, { useState } from "react";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableData,
  ActionButtonView,
  ContentWrapper,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalList,
  CloseButton,
} from "./style";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

interface Student {
  id: number;
  nome: string;
  email: string;
  media: number;
  performance?: StudentPerformance[];
}

interface StudentPerformance {
  materia: string;
  acertos: number;
  erros: number;
}

const students: Student[] = [
  {
    id: 1,
    nome: "Carlos Silva",
    email: "carlos.silva@email.com",
    media: 8.5,
    performance: [
      { materia: "História", acertos: 75, erros: 25 },
      { materia: "Matemática", acertos: 50, erros: 50 },
    ],
  },
  {
    id: 2,
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    media: 7.2,
    performance: [
      { materia: "Português", acertos: 80, erros: 20 },
      { materia: "Geografia", acertos: 60, erros: 40 },
    ],
  },
  {
    id: 3,
    nome: "Mariana Oliveira",
    email: "mariana.oliveira@email.com",
    media: 9.1,
    performance: [
      { materia: "Ciências", acertos: 90, erros: 10 },
      { materia: "Física", acertos: 70, erros: 30 },
    ],
  },
  {
    id: 4,
    nome: "João Ferreira",
    email: "joao.ferreira@email.com",
    media: 6.8,
    performance: [
      { materia: "Tecnologia", acertos: 20, erros: 80 },
      { materia: "Física", acertos: 40, erros: 60 },
    ],
  },
  {
    id: 5,
    nome: "Fernanda Costa",
    email: "fernanda.costa@email.com",
    media: 0,
    performance: [],
  },
];

const Students = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        title="Alunos"
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        hideCreateButton={true}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          marginTop: "60px",
        }}
      >
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <ContentWrapper sidebarOpen={sidebarOpen}>
          <Container>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Média</TableHeader>
                  <TableHeader>Ações</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableData>{student.nome}</TableData>
                    <TableData>
                      <a href={`mailto:${student.email}`}>{student.email}</a>
                    </TableData>
                    <TableData>{student.media.toFixed(1)}</TableData>
                    <TableData>
                      <ActionButtonView
                        onClick={() => setSelectedStudent(student)}
                        disabled={
                          !student.performance ||
                          student.performance.length === 0
                        }
                      >
                        Ver performance
                      </ActionButtonView>
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>

            {/* Modal de Performance */}
            {selectedStudent && (
              <ModalOverlay>
                <ModalContent>
                  <ModalTitle>Performance de {selectedStudent.nome}</ModalTitle>
                  <ModalList>
                    {selectedStudent.performance &&
                      selectedStudent.performance.map((performance, index) => {
                        const data = {
                          labels: ["Acertos", "Erros"],
                          datasets: [
                            {
                              data: [performance.acertos, performance.erros],
                              backgroundColor: ["#7EC8E3", "#FFA6B6"],
                            },
                          ],
                        };
                        return (
                          <div key={index}>
                            <h4>{performance.materia}</h4>
                            <Pie data={data} />
                          </div>
                        );
                      })}
                  </ModalList>
                  <CloseButton onClick={() => setSelectedStudent(null)}>
                    Fechar
                  </CloseButton>
                </ModalContent>
              </ModalOverlay>
            )}
          </Container>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Students;
