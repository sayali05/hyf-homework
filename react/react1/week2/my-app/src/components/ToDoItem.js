import { useState } from "react";

function ToDoItem({ toDo, deleteToDo }) {
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
      <label className={isChecked(toDo)}>{toDo.description}</label>{" "}
      <input type="checkbox" value={toDo.description} onChange={handleCheck} />
      <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
