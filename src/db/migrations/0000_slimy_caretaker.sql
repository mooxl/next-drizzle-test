CREATE SCHEMA "testing";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testing"."notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(20) NOT NULL,
	"text" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
