import { TaskModel } from "../../components/modal/task-model";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../hooks/filter-context";
import { SortFunc, SortTime, SearchTask } from "../../helpers/filter-func";
import { TaskFilter } from "../../components/filter/filter";
export default function TaskPage() {
  const [showModal, setShowModal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({});
  const {
    filter: { sortByPriority, sortByTime },
    filterDispatch
  } = useFilter();
  const saveToTaskList = (task) => {
    if (!task.name) {
      alert("task title required");
    } else {
      setTodoList([...todoList, task]);
      localStorage.setItem("todoList", JSON.stringify([...todoList, task]));
      setShowModal(false);
    }
  };
  const getTaskListLocal = () => {
    return JSON.parse(localStorage.getItem("todoList"));
  };
  const deleteTask = (id) => {
    const list = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todoList", JSON.stringify(list));
    setTodoList(list);
  };
  const editTask = (id) => {
    setIsEdit(true);
    setShowModal(true);
    const currentTodo = todoList.find((todo) => todo.id === id);
    setUpdateTodo(currentTodo);
  };
  const updateTaskList = ({
    id,
    name,
    description,
    timer,
    breakTimer,
    priorityTag
  }) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            name: name,
            description: description,
            timer: timer,
            breakTimer: breakTimer,
            priorityTag: priorityTag
          }
        : todo
    );
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
    setTodoList(updatedTodos);
    setIsEdit(false);
    setShowModal(false);
  };
  useEffect(() => {
    const saveTaskListLocal = getTaskListLocal();
    if (saveTaskListLocal) {
      setTodoList(saveTaskListLocal);
    }
  }, []);
  const Priorities = { Low: 1, Medium: 2, High: 3 };
  const [filters, setFilters] = useState({
    searchByTitle: "",
    filterOpen: false
  });
  const handleSearchTask = (e) => {
    filterDispatch({ type: "FILTER_CLEAR", payload: {} });
    setFilters({ ...filters, searchByTitle: e.target.value });
  };
  const filterByPriority = SortFunc(todoList, sortByPriority, Priorities);
  const sortedData = SearchTask(filterByPriority, filters.searchByTitle);
  const filterdData = SortTime(sortedData, sortByTime);
  return (
    <div className="task-container flex-col flex-space-between margin-btm">
      <div className="margin-auto ">
        <h2>Hey,Welcome Back!</h2>
        {todoList.length > 0 ? (
          <h4>You have {todoList.length} tasks for Today,All the Best</h4>
        ) : (
          ""
        )}
        <div className="margin-sm margin-auto flex-row justify-center flex-space-between">
          <h3 className="margin-sm">To-Do List</h3>
          <div>
            <button
              className="cursor-pointer primary-btn"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              <i class="fa fa-plus-circle flex-end" aria-hidden="true"></i>
              Create Task
            </button>
          </div>
        </div>
        {todoList.length > 0 ? "" : <h4>No Tasks,lets..create tasks</h4>}
        <div className="flex-row flex-center flex-wrap flex-space-between margin-l">
          <div>
            <input
              type="search"
              className="border-searchbox search-task bd-sm"
              placeholder="search task"
              value={filters.searchByTitle}
              onChange={handleSearchTask}
            />
            <i className="fa fa-search search-filter border-searchbox"></i>
          </div>
          <div className="position-relative">
            <button
              className="primary-btn cursor-pointer"
              onClick={() =>
                setFilters({ ...filters, filterOpen: !filters.filterOpen })
              }
            >
              <i className="fa fa-tasks cursor-pointer"></i>
              filter
            </button>
          </div>
        </div>
        {filters.filterOpen ? <TaskFilter /> : ""}
        {showModal ? (
          <TaskModel
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            updateTodo={updateTodo}
            setUpdateTodo={setUpdateTodo}
            saveToTaskList={saveToTaskList}
            updateTaskList={updateTaskList}
          />
        ) : (
          ""
        )}
        {todoList &&
          filterdData.map(
            ({
              id,
              name,
              timer,
              description,
              breakTimer,
              date,
              time,
              priorityTag
            }) => (
              <div
                className="flex-row gap flex-space-between task-list"
                key={id}
              >
                <Link
                  to="/pomodoro"
                  state={{
                    id,
                    name,
                    timer,
                    description,
                    date,
                    time,
                    breakTimer,
                    priorityTag
                  }}
                >
                  <span className="name padding-sm">{name}</span>
                </Link>
                <div>
                  <i
                    className="fa fa-pencil-square-o cursor-pointer"
                    aria-hidden="true"
                    onClick={() => editTask(id)}
                  ></i>
                  <i
                    className="fa fa-trash-o cursor-pointer"
                    aria-hidden="true"
                    onClick={() => deleteTask(id)}
                  ></i>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
