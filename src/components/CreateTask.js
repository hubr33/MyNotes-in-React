import React from "react";

const CreateTask = (props) => {
  return (
    <React.Fragment>
      <div className={props.active ? "shadow active" : "shadow"}></div>
      <div className={props.active ? "panel active" : "panel"}>
        <h2 className="mainTitle">Dodaj zadanie</h2>
        <label className="select" htmlFor="category">
          Wybierz kategorię
        </label>
        <select id="category" onChange={props.activity}>
          <option value="0" selected={props.select} disabled>
            {" "}
            - Wybierz -{" "}
          </option>
          <option value="Praca">Praca</option>
          <option value="Studia">Studia</option>cd
          <option value="Spotkanie">Spotkanie</option>
          <option value="Zakupy">Zakupy</option>
        </select>
        <input
          className="inputText"
          maxLength="100"
          onChange={props.onchange}
        ></input>
        <p className="error">Uzupełnij powyższe pola</p>
        <label className="checkbox">
          Ważne
          <input
            className="inputCheckbox"
            type="checkbox"
            onClick={props.checkbox}
            checked={props.checked}
          />
        </label>
        <div className="buttonWrapper">
          <button className="addNewTask" onClick={props.addNewTask}>
            Dodaj
          </button>
          <button onClick={props.deactive} className="cancelNewTask">
            Anuluj
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateTask;
