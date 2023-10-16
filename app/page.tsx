"use client";
import { useState, useEffect } from "react";
import { TodoList } from "@/components/TodoList";
import { NewTodo } from "@/components/NewTodo";
import { Label } from "@/components/ui/label";
type TodoProps = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoList = {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const data = window.localStorage.getItem("todos");

export default function Home() {
  const [todos, setTodos] = useState<TodoProps[] | null>(JSON.parse(data));

  const toggleTodo = (id: string) => {
    const newTodos = todos!.flatMap((todo) =>
      todo.id === id ? [{ ...todo, completed: !todo.completed }] : [todo],
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos!.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (id: string, title: string, completed: boolean) => {
    setTodos([...(todos || []), { id, title, completed }]);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="flex flex-col h-[100svh] p-2">
      <Label>Todos</Label>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <NewTodo addTodo={addTodo} />
    </main>
  );
}
