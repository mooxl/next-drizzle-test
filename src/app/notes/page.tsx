import CreateNote from "@/components/note/create";
import Note from "@/components/note/note";
import { db } from "@/db/config";
import { notes as notesDb } from "@/db/schema";

const Page = async () => {
  const notes = await db.select().from(notesDb);
  return (
    <>
      <h2 className="my-10">Notes</h2>
      <div className="grid grid-cols-4 gap-10">
        {notes.map((note) => (
          <Note key={note.id} note={note} link />
        ))}
      </div>
      <CreateNote />
    </>
  );
};
export default Page;
