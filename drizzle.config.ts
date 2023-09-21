import type { Config } from "drizzle-kit";

export default {
  schema: "src/db/schema.ts",
  out: "src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://user:password@localhost:5432/db",
  },
} satisfies Config;
