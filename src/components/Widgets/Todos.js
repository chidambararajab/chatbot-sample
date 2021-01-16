import React, { useEffect } from "react";
import "./Todos.css";

const Todos = (props) => {
  const { setState } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const datas = data.slice(0, 6);
        setState((state) => ({ ...state, todos: datas }));
      });
  }, []);

  console.log(props.todos);

  const renderTodos = () => {
    return props.todos.map((todo) => {
      return (
        <li className="todos__list--item" key={todo.id}>
          {"- " + todo.title}
        </li>
      );
    });
  };

  return (
    <div className="todos">
      {/* <button>Javascript</button> */}
      <ul className="todos__list">{renderTodos()}</ul>
    </div>
  );
};

export default Todos;
