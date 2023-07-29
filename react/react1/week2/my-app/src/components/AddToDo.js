import { useState, useEffect } from "react";

function AddToDo({ handleAddToDo }) {
  const [description, setDescription] = useState(" ");
  const [message, setMessage] = useState("");
  useEffect(
    () => {
      // console.log("description", description);
    },
    [description],
    [message],
  );

  function saveToDo(e) {
    e.preventDefault();

    if (description.trim().length !== 0) {
      setMessage("Added Successfully");
      handleAddToDo(description);
    } else {
      setMessage("Please enter to do");
    }

    setDescription(" ");
  }

  return (
    <div>
      <form onSubmit={(e) => saveToDo(e)}>
        <label>Add To Do List</label>
        <div>
          <h2>{message}</h2>
          <input
            type="text"
            placeholder="to do list"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Save TODO List</button>
        </div>
        <br />
      </form>
      <br />
    </div>
  );
}

export default AddToDo;
