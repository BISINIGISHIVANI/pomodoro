import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const themeFromLocal = JSON.parse(localStorage.getItem("darkMode"));

  const [darkMode, setDarkMode] = useState(themeFromLocal || false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return (
    <div className={`nav-container ${darkMode}`}>
      <nav className="flex-row flex-wrap flex-center">
        <div>
          <ul className="flex-row gap-md flex-wrap list-none">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/tasks">
                <i class="fa fa-tasks"></i>Task
              </Link>
            </li>
            <li>
              <Link to="/pomodoro">
                <i className="fa fa-clock-o"></i>Pomodoro
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex-row gap-md flex-wrap list-none">
            <li>
              {darkMode ? (
                <i
                  className="fa fa-sun-o"
                  onClick={() => setDarkMode(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-moon-o cursor-pointer"
                  onClick={() => setDarkMode(true)}
                ></i>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
