/*
  Warnings:

  - You are about to drop the `buffet_convidados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eventos_opcionais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `opcional_qtd` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `opcional_tipo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `aniversariante` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `contrato` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `estrutura` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `horarioInicial` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `opcionalId` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `responsavel` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `temaFesta` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `buffets` table. All the data in the column will be lost.
  - You are about to drop the column `duracaoId` on the `buffets` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `buffets` table. All the data in the column will be lost.
  - You are about to drop the column `qtdConvidadosId` on the `buffets` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `opcionais` table. All the data in the column will be lost.
  - You are about to drop the column `eventoId` on the `opcionais` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `opcionais` table. All the data in the column will be lost.
  - You are about to drop the column `qtdId` on the `opcionais` table. All the data in the column will be lost.
  - You are about to drop the column `tipoId` on the `opcionais` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `eventoId` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `pagamentos` table. All the data in the column will be lost.
  - The primary key for the `buffet_duracao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `duracao` on the `buffet_duracao` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `buffet_duracao` table. All the data in the column will be lost.
  - Added the required column `adress` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionalId` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `buffets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationId` to the `buffets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guestsQttId` to the `buffets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `buffets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `opcionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `opcionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `opcionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtt` to the `opcionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `opcionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buffetId` to the `buffet_duracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationId` to the `buffet_duracao` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "buffet_convidados";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "eventos_opcionais";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "opcional_qtd";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "opcional_tipo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "duracoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "qtd_convidados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guestsQtt" INTEGER NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "buffet_qtdConvidados" (
    "buffetId" INTEGER NOT NULL,
    "guestsQttId" INTEGER NOT NULL,

    PRIMARY KEY ("buffetId", "guestsQttId"),
    CONSTRAINT "buffet_qtdConvidados_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "buffet_qtdConvidados_guestsQttId_fkey" FOREIGN KEY ("guestsQttId") REFERENCES "qtd_convidados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "opcionais_tipos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qtt" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "opcional_opcionalTipo" (
    "typeId" INTEGER NOT NULL,
    "optionalId" INTEGER NOT NULL,

    PRIMARY KEY ("typeId", "optionalId"),
    CONSTRAINT "opcional_opcionalTipo_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "opcionais_tipos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "opcional_opcionalTipo_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "evento_opcional" (
    "eventId" INTEGER NOT NULL,
    "optionalId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("eventId", "optionalId"),
    CONSTRAINT "evento_opcional_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "evento_opcional_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "birthdayPerson" TEXT,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME NOT NULL,
    "adress" TEXT NOT NULL,
    "partyTheme" TEXT,
    "responsible" TEXT,
    "structure" TEXT,
    "contract" TEXT,
    "obs" TEXT,
    "clientId" INTEGER NOT NULL,
    "buffetId" INTEGER NOT NULL,
    "optionalId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "eventos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "eventos_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_eventos" ("buffetId", "createdAt", "id", "obs", "updatedAt") SELECT "buffetId", "createdAt", "id", "obs", "updatedAt" FROM "eventos";
DROP TABLE "eventos";
ALTER TABLE "new_eventos" RENAME TO "eventos";
CREATE TABLE "new_buffets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationId" INTEGER NOT NULL,
    "guestsQttId" INTEGER NOT NULL,
    "guestsQuantityId" INTEGER,
    CONSTRAINT "buffets_guestsQuantityId_fkey" FOREIGN KEY ("guestsQuantityId") REFERENCES "qtd_convidados" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_buffets" ("id") SELECT "id" FROM "buffets";
DROP TABLE "buffets";
ALTER TABLE "new_buffets" RENAME TO "buffets";
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_clientes" ("cpf", "createdAt", "email", "id", "updatedAt") SELECT "cpf", "createdAt", "email", "id", "updatedAt" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
CREATE TABLE "new_opcionais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qtt" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL
);
INSERT INTO "new_opcionais" ("id") SELECT "id" FROM "opcionais";
DROP TABLE "opcionais";
ALTER TABLE "new_opcionais" RENAME TO "opcionais";
CREATE TABLE "new_pagamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "pagamentos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pagamentos_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pagamentos" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "pagamentos";
DROP TABLE "pagamentos";
ALTER TABLE "new_pagamentos" RENAME TO "pagamentos";
CREATE TABLE "new_buffet_duracao" (
    "buffetId" INTEGER NOT NULL,
    "durationId" INTEGER NOT NULL,

    PRIMARY KEY ("buffetId", "durationId"),
    CONSTRAINT "buffet_duracao_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "buffet_duracao_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "duracoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "buffet_duracao";
ALTER TABLE "new_buffet_duracao" RENAME TO "buffet_duracao";
CREATE UNIQUE INDEX "buffet_duracao_buffetId_key" ON "buffet_duracao"("buffetId");
CREATE UNIQUE INDEX "buffet_duracao_durationId_key" ON "buffet_duracao"("durationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "buffet_qtdConvidados_buffetId_key" ON "buffet_qtdConvidados"("buffetId");

-- CreateIndex
CREATE UNIQUE INDEX "buffet_qtdConvidados_guestsQttId_key" ON "buffet_qtdConvidados"("guestsQttId");

-- CreateIndex
CREATE UNIQUE INDEX "opcional_opcionalTipo_typeId_key" ON "opcional_opcionalTipo"("typeId");

-- CreateIndex
CREATE UNIQUE INDEX "opcional_opcionalTipo_optionalId_key" ON "opcional_opcionalTipo"("optionalId");

-- CreateIndex
CREATE UNIQUE INDEX "evento_opcional_eventId_key" ON "evento_opcional"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "evento_opcional_optionalId_key" ON "evento_opcional"("optionalId");
