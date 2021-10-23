import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, btnCheckTodo, btnDeleteTodo }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo
          btnDeleteTodo={btnDeleteTodo}
          btnAdd={btnCheckTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
}
