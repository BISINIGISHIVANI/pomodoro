import "./navbar.css";
import { useEffect, useState } from "react";
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
              <i class="fa fa-tasks"></i>Task
            </li>
            <li>
              <i className="fa fa-clock-o"></i>Pomodoro
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
