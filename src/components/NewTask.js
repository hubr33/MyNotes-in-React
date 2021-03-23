import React from "react";

const NewTask = (props) => {
  const handleDelete = (e) => {
    const del = e.target.id;
    const check = document.getElementById(`${del}`);
    check.remove();
  };
  return (
    <div
      id={props.id}
      style={
        props.check
          ? { backgroundColor: "red" }
          : { backgroundColor: props.color }
      }
      className="task"
    >
      <h1
        style={
          props.check
            ? { textDecoration: "underline", letterSpacing: "2px" }
            : null
        }
      >
        {props.work}
      </h1>
      <button>
        <i
          id={props.id}
          onClick={handleDelete}
          className="far fa-times-circle"
        ></i>
      </button>
      <p>{props.text}</p>
    </div>
  );
};

export default NewTask;
