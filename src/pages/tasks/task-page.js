import { TaskModal } from "../../components/modal/task-modal";
import { useEffect, useState } from "react";
export default function TaskPage() {
  const [showModal, setShowModal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({});
  const saveToTaskList = (task) => {
    if (!task.name) {
      alert("task title required");
    } else {
      setTodoList([...todoList, task]);
      localStorage.setItem("todoList", JSON.stringify([...todoList, task]));
      setShowModal(false);
    }
    console.log(task.name);
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
  const updateTaskList = ({ id, name, description, timer }) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id
        ? { ...todo, name: name, description: description, timer: timer }
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
        {showModal ? (
          <TaskModal
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
          todoList.map(({ id, name }) => (
            <div className="flex-row gap flex-space-between task-list" key={id}>
              <span>{name}</span>
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
          ))}
      </div>
    </div>
  );
}
