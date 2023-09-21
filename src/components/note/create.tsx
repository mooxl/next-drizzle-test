"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNoteSchema } from "@/db/schema";
import { z } from "zod";
import { createNote } from "@/actions/note";
const CreateNote = () => {
  const form = useForm<z.infer<typeof insertNoteSchema>>({
    resolver: zodResolver(insertNoteSchema),
  });
  return (
    <div className="mt-10 space-y-3">
      <h2 className="font-semibold">New Note</h2>
      <form
        onSubmit={form.handleSubmit(async ({ title, content }) => {
          await createNote({ title, content });
          form.reset();
        })}
        className="flex flex-col gap-y-3 w-80"
      >
        <label htmlFor="title">
          Title:{" "}
          <span className="text-red-500">
            {form.formState.errors.title?.message}
          </span>
        </label>
        <input {...form.register("title")} className="border-2" />
        <label htmlFor="content">
          Content:{" "}
          <span className="text-red-500">
            {form.formState.errors.content?.message}
          </span>
        </label>
        <textarea {...form.register("content")} className="border-2" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateNote;
