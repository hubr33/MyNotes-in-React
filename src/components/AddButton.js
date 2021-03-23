import React from "react";

const AddButton = (props) => {
  return (
    <button className="addToDo" onClick={props.click}>
      Dodaj zadanie
    </button>
  );
};

export default AddButton;
