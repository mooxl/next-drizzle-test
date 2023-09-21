import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = "postgres://user:password@localhost:5432/db";

const runMigrate = async () => {
  const db = drizzle(postgres(connectionString, { max: 1 }));
  console.log("⏳ Running migrations...");
  const start = Date.now();
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  const end = Date.now();
  console.log(`✅ Migrations completed in ${end - start}ms`);
  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
