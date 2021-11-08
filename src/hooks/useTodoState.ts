import { useState, useCallback } from "react";

interface ITodo {
  text: string;
  completed: boolean;
}

const initialTodosState = [
  {
    text: "Learn React",
    completed: false,
  },
];

export const useTodoState = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodosState);

  function removeTodo(todoIndex: number) {
    const todosOldState = [...todos];
    todosOldState.splice(todoIndex, 1);
    setTodos(todosOldState);
  }

  function toggleChecked(todoIndex: number) {
    const todosOldState = [...todos];
    todosOldState[todoIndex].completed = !todosOldState[todoIndex].completed;
    setTodos(todosOldState);
  }

  const addTodo = useCallback((todoText: string) => {
    const newTodo = {
      text: todoText,
      completed: false,
    };

    setTodos((previous) => [...previous, newTodo]);
  }, []);

  return {
    removeTodo,
    addTodo,
    toggleChecked,
    todos,
  };
};
