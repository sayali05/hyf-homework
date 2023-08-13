import React, { useState } from "react";

function ToDoItem(props) {
  const { toDo, deleteToDo, handleEditClick, editTaskId, handleTaskUpdate } =
    props;
  const [updatedTask, setUpdatedTask] = useState(toDo.description);

  // Function to handle task update
  const handleUpdate = () => {
    handleTaskUpdate(toDo.id, updatedTask);
  };

  const [checked, setChecked] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  const isChecked = (toDo) =>
    checked.includes(toDo.description) ? "checked-item" : "not-checked-item";

  return (
    <div key={toDo.id}>
      <ul>
        <li class="todo-list">
          <div className="list-item-list">
            {toDo.id === editTaskId ? (
              <>
                <input
                  type="text"
                  value={updatedTask}
                  onChange={(e) => setUpdatedTask(e.target.value)}
                />
              </>
            ) : (
              <>
                <span className={isChecked(toDo)}>{updatedTask} |</span>
                <span className={isChecked(toDo)}>{toDo.deadline}</span>
              </>
            )}
          </div>
          <input
            type="checkbox"
            value={toDo.description}
            onChange={handleCheck}
          />
          {toDo.id === editTaskId ? (
            <button
              className="list-items-icons"
              id="edit"
              title="Update"
              onClick={handleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              className="list-items-icons"
              id="edit"
              title="Edit"
              onClick={() => handleEditClick(toDo.id, toDo.description)}
            >
              Edit
            </button>
          )}
          <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default ToDoItem;
