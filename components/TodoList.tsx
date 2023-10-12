"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DeleteIcon } from "lucide-react";

export const TodoList = ({ todos }) => {
  const toggleChecked = () => {
    console.log(e);
  };
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex items-center gap-2">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={toggleChecked}
            />
            <div className="grow">{todo.title}</div>
            <Button>
              <DeleteIcon />
            </Button>
          </div>
        );
      })}
    </>
  );
};
