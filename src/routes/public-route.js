import { Home } from "../pages/home/home";
import TaskPage from "../pages/tasks/task-page";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
export const PublicRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
      <Footer />
    </>
  );
};
