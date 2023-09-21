import { pgSchema, text, varchar, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const schema = pgSchema("testing");

export const notes = schema.table("notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 20 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const insertNoteSchema = createInsertSchema(notes, {
  title: (schema) => schema.title.min(4).max(20),
  content: (schema) => schema.content.min(1),
});
export const selectNotesSchema = createSelectSchema(notes);
