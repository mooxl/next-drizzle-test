"use client";
import { deleteNote } from "@/actions/note";
import { selectNotesSchema } from "@/db/schema";
import Link from "next/link";
import { z } from "zod";

type Props = {
  note: z.infer<typeof selectNotesSchema>;
  link?: boolean;
};

const Note = ({ note, link }: Props) => (
  <div className="p-3 bg-gray-100 space-y-3 rounded-md">
    <div className="flex justify-between">
      <h1>{note.title}</h1>
      <button
        onClick={async () => {
          await deleteNote({ id: note.id });
        }}
      >
        X
      </button>
    </div>
    <p className="line-clamp-3">{note.content}</p>
    <p>{note.createdAt?.toLocaleString("de-DE")}</p>
    {link && (
      <Link
        className="bg-gray-500 px-2 py-1 inline-block text-white rounded-md"
        href={`/notes/${note.id}`}
      >
        Read more
      </Link>
    )}
  </div>
);

export default Note;
