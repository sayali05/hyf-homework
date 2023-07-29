import React, { useState } from "react";

function AddToDo({ handleAddToDo }) {
  const [description, setDescription] = useState(" ");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Check if the deadline is not empty and is not before the current day
    if (selectedDate !== "") {
      const currentDate = new Date().toISOString().split("T")[0]; // Get current date
      if (selectedDate >= currentDate) {
        setDate(selectedDate);
      } else {
        // Handle case when deadline is before the current day
        // You can show an error message or perform any desired action here
        console.log("Invalid deadline");
      }
    }
  };

  function saveToDo(e) {
    e.preventDefault();

    if (description.trim().length !== 0) {
      setMessage("Added Successfully");
      handleAddToDo(description, date);
    } else {
      setMessage("Please enter to do description");
    }

    setDescription(" ");
    setDate("");
  }

  return (
    <div>
      <form onSubmit={(e) => saveToDo(e)}>
        <label>Add To Do List</label>
        <div>
          <h2>{message}</h2>
          <label>Todo description</label>
          <input
            type="text"
            placeholder="to do list"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label>Deadline</label>
          <input
            type="date"
            placeholder="Enter the deadline"
            className="form-control"
            value={date}
            onChange={handleDateChange}
          />
          <br />
          <button>Save TODO List</button>
        </div>
        <br />
      </form>
      <br />
    </div>
  );
}

export default AddToDo;
