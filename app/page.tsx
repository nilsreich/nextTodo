"use client";
import { useState, useEffect } from "react";
import { TodoList } from "@/components/TodoList";
type TodoProps = {
  id: string;
  title: string;
  completed: boolean;
};

const initData = [
  {
    id: "32sasd",
    title: "nix",
    completed: false,
  },
];
export default function Home() {
  const [todos, setTodos] = useState<TodoProps[]>(initData);
  return (
    <main>
      <TodoList todos={todos} />
    </main>
  );
}
