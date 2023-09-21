import Note from "@/components/note/note";
import { db } from "@/db/config";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";

type Params = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Params) => {
  const note = await db.query.notes.findFirst({
    where: eq(notes.id, params.id),
  });
  if (!note) {
    throw new Error("Note not found");
  }
  return <Note note={note} />;
};

export default Page;
