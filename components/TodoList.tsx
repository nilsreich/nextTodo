"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DeleteIcon } from "lucide-react";

type TodoList = {
  todos:
    | {
        id: string;
        title: string;
        completed: boolean;
      }[]
    | null;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoList) => {
  return (
    <div className="flex flex-col gap-2 p-2 grow overflow-scroll sidebar-hide">
      {todos &&
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex items-center gap-2 bg-secondary p-1 rounded"
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="mx-2"
              />
              <div
                className={`${
                  todo.completed ? "line-through" : ""
                } grow text-lg`}
              >
                {todo.title}
              </div>
              <Button variant={"ghost"} onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
    </div>
  );
};
