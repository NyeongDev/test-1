import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function Card({ todo }) {
  return (
    <div className="cardItem">
      <p>{todo}</p>
    </div>
  );
}

function App() {
  const [todo, setTodo] = useState("");

  const handleChangeTodo = e => {
    setTodo(e.target.value);
  };

  function submitHandler() {
    const uniqueId = uuid();
    const temp = { id: uniqueId, todo: todo };
    setTodo([temp, ...todo]);
    setTodo("");
  }

  return (
    <>
      <div className="header">
        <div className="input-group">
          <input onChange={handleChangeTodo} value={todo}></input>
          <button onClick={submitHandler} className="add-button">
            추가하기
          </button>
        </div>
        <h1>Todo List</h1>
      </div>
      <div className="cardContainer">
        {/* {todo.map(todo => {
          return (
            <div className="cardItem">
              <p>{todo}</p>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default App;
