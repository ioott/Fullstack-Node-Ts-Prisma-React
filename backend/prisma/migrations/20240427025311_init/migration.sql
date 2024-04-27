/*
  Warnings:

  - You are about to drop the column `durationId` on the `buffets` table. All the data in the column will be lost.
  - You are about to drop the column `guestsQttId` on the `buffets` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_buffets" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "eventId" BIGINT
);
INSERT INTO "new_buffets" ("active", "description", "eventId", "id", "name") SELECT "active", "description", "eventId", "id", "name" FROM "buffets";
DROP TABLE "buffets";
ALTER TABLE "new_buffets" RENAME TO "buffets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
