/*
  Warnings:

  - You are about to drop the column `buffetGuestsQttId` on the `qtds_convidados` table. All the data in the column will be lost.
  - You are about to drop the column `buffetGuestsQttId` on the `buffets` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_qtds_convidados" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "guestsQtt" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "buffetId" BIGINT
);
INSERT INTO "new_qtds_convidados" ("guestsQtt", "id", "price") SELECT "guestsQtt", "id", "price" FROM "qtds_convidados";
DROP TABLE "qtds_convidados";
ALTER TABLE "new_qtds_convidados" RENAME TO "qtds_convidados";
CREATE TABLE "new_buffets" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventId" BIGINT,
    "durationId" BIGINT,
    "guestsQttId" BIGINT
);
INSERT INTO "new_buffets" ("description", "eventId", "guestsQttId", "id", "name") SELECT "description", "eventId", "guestsQttId", "id", "name" FROM "buffets";
DROP TABLE "buffets";
ALTER TABLE "new_buffets" RENAME TO "buffets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
