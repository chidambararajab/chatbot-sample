import React, { useEffect } from "react";
import "./Javascript.css";
import axios from "axios";

const Javascript = (props) => {
  const { setState } = props;
  const url =
    "https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      // .then((data) => {
      //   const datas = data.slice(0, 6);
      //   setState((state) => ({ ...state, todos: datas }));
      // Displaying results to console
      .then((json) => console.log(json));
  }, []);

  // console.log(props.learnings);

  // const renderTodos = () => {
  //   return props.todos.map((todo) => {
  //     return (
  //       <li className="todos__list--item" key={todo.id}>
  //         {"- " + todo.title}
  //       </li>
  //     );
  //   });
  // };

  return (
    <div className="todos">
      {/* <button>Javascript</button> */}
      {/* <ul className="todos__list">{renderTodos()}</ul> */}
    </div>
  );
};
export default Javascript;
