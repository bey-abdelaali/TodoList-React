import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export function todosReducer(currentTodos, action) {
  switch (action.type) {
    case "Added":
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        details: "",
        isCompleted: false,
      };

      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;

    default:
      throw Error("Unknown Action " + action.type);
  }
  //   return [];
}
