-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tipos_para_opcionais" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qtt" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_tipos_para_opcionais" ("id", "price", "qtt", "type") SELECT "id", "price", "qtt", "type" FROM "tipos_para_opcionais";
DROP TABLE "tipos_para_opcionais";
ALTER TABLE "new_tipos_para_opcionais" RENAME TO "tipos_para_opcionais";
CREATE TABLE "new_qtds_convidados" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "guestsQtt" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "buffetId" BIGINT
);
INSERT INTO "new_qtds_convidados" ("buffetId", "guestsQtt", "id", "price") SELECT "buffetId", "guestsQtt", "id", "price" FROM "qtds_convidados";
DROP TABLE "qtds_convidados";
ALTER TABLE "new_qtds_convidados" RENAME TO "qtds_convidados";
CREATE TABLE "new_opcionais" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qtt" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_opcionais" ("description", "id", "name", "qtt") SELECT "description", "id", "name", "qtt" FROM "opcionais";
DROP TABLE "opcionais";
ALTER TABLE "new_opcionais" RENAME TO "opcionais";
CREATE TABLE "new_buffets" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "eventId" BIGINT,
    "durationId" BIGINT,
    "guestsQttId" BIGINT
);
INSERT INTO "new_buffets" ("description", "durationId", "eventId", "guestsQttId", "id", "name") SELECT "description", "durationId", "eventId", "guestsQttId", "id", "name" FROM "buffets";
DROP TABLE "buffets";
ALTER TABLE "new_buffets" RENAME TO "buffets";
CREATE TABLE "new_duracoes" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "duration" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "buffetId" BIGINT
);
INSERT INTO "new_duracoes" ("buffetId", "duration", "id") SELECT "buffetId", "duration", "id" FROM "duracoes";
DROP TABLE "duracoes";
ALTER TABLE "new_duracoes" RENAME TO "duracoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
