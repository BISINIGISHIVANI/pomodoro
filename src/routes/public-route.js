import { Home } from "../pages/home/home";
import TaskPage from "../pages/tasks/task-page";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { PomodoroPage } from "../pages/pomodoro/pomodoro-page";
export const PublicRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/pomodoro" element={<PomodoroPage/>} />
      </Routes>
      <Footer />
    </>
  );
};
