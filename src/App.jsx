import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router";
import DarkModeProvider from "./context/DarkModeContext";
import FreelancerLayout from "./features/Freelancer/FreelancerLayout";
import OwnerLayout from "./features/owner/OwnerLayout";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import NoteFound from "./pages/NoteFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Home from "./pages/Home";
const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div className="max-w-screen-2xl mx-auto bg-secondary-0 ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
