"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DataForm({ data, type }: { type: string }) {
  const [newName, setnewName] = useState("");
  const [surname, setsurname] = useState("");
  const router = useRouter();

  const handeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnewName(event.target.value);
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsurname(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      fetch("api/add-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newName,
          surname,
        }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
    setnewName("");
    setsurname("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="border border-black w-[250px] m-3 p-2">
          <label htmlFor="name" className="mr-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={handeNameChange}
            className="w-full p-1"
            required
          />
        </div>
        <div className="border border-black w-[250px] m-3 p-2">
          <label htmlFor="surname" className="text-cyan mr-3">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleSurnameChange}
            className="w-full p-1"
            required
          />
        </div>
        <Button type="submit" className="ml-3">
          {type === "add" ? "Add" : "Edit"}
        </Button>
      </form>
    </section>
  );
}

export default DataForm;
