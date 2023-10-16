import { PlusIcon } from "lucide-react";
import { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";

type NewTodoProps = {
  addTodo: (id: string, title: string, completed: boolean) => void;
};
export const NewTodo = ({ addTodo }): NewTodoProps => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() === "") return;
    addTodo(crypto.randomUUID(), value, false);
    setValue("");
  };
  return (
    <div className="flex items-center gap-2 w-full">
      <ModeToggle />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex gap-2 items-center grow"
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="grow p-1"
        />
        <Button>
          <PlusIcon />
        </Button>
      </form>
    </div>
  );
};
