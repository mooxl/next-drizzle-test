import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const connectionString = "postgres://user:password@localhost:5432/db";

export const db = drizzle(postgres(connectionString), { schema });
