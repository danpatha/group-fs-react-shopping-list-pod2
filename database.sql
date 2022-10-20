-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

DROP TABLE IF EXISTS "shopping";

CREATE TABLE "shopping" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80),
	"quantity" INT, 
	"unit" varchar(20)
);

INSERT INTO "shopping"
	("name", "quantity", "unit")
VALUES ('Potatoes', '4', '2 lbs');
