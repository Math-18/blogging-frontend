import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import LoginComponent from "../components/LoginComponent";
import ManagePostComponent from "../components/ManagePost";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import PostDetails from "../components/PostDetails";
import PostList from "../components/PostList";
import AdminPostList from "../components/AdminPostList";
import Students from "../components/Students";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/manage"
            element={<ProtectedRoute element={<ManagePostComponent />} />}
          />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/posts/admin"
            element={<ProtectedRoute element={<AdminPostList />} />}
          />
          <Route
            path="/alunos"
            element={<ProtectedRoute element={<Students />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
