import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ toDo, deleteToDo }) {
  const [todos, setTodos] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  const count = toDo.length;
  let errormsg;
  if (count === 0) {
    errormsg = "No Items ";
  } else {
    errormsg = "";
  }

  // Function to handle edit icon click
  const handleEditClick = (id, task) => {
    setEditTaskId(id);
    setEditTaskText(task);
  };

  // Function to handle task update
  const handleTaskUpdate = (id, updatedTask) => {
    if (updatedTask !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((toDo) =>
          toDo.id === id ? { ...toDo, description: updatedTask } : toDo,
        ),
      );

      setEditTaskId(null);
      setEditTaskText("");
    }
  };

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      <p>{errormsg}</p>
      {toDo.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          deleteToDo={deleteToDo}
          handleEditClick={handleEditClick}
          editTaskId={editTaskId}
          editTaskText={editTaskText}
          handleTaskUpdate={handleTaskUpdate}
        />
      ))}
    </div>
  );
}

export default ToDoList;
