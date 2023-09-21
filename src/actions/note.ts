"use server";

import { db } from "@/db/config";
import { revalidatePath } from "next/cache";
import { action } from "@/lib/safeAction";
import { insertNoteSchema, notes, selectNotesSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createNote = action(
  insertNoteSchema,
  async ({ title, content }) => {
    await db.insert(notes).values({ title, content });
    revalidatePath("/notes");
  }
);

export const deleteNote = action(
  selectNotesSchema.pick({ id: true }),
  async ({ id }) => {
    await db.delete(notes).where(eq(notes.id, id));
    revalidatePath("/notes");
  }
);
