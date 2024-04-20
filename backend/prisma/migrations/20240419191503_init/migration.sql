-- CreateTable
CREATE TABLE "clientes" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "buffets" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "eventId" BIGINT,
    "durationId" BIGINT,
    "guestsQttId" BIGINT
);

-- CreateTable
CREATE TABLE "duracoes" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "duration" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "buffetId" BIGINT
);

-- CreateTable
CREATE TABLE "qtds_convidados" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "guestsQtt" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "buffetId" BIGINT
);

-- CreateTable
CREATE TABLE "juncao_buffet_duracao" (
    "buffetId" BIGINT NOT NULL,
    "durationId" BIGINT NOT NULL,

    PRIMARY KEY ("buffetId", "durationId"),
    CONSTRAINT "juncao_buffet_duracao_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "juncao_buffet_duracao_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "duracoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "juncao_buffet_convidados" (
    "buffetId" BIGINT NOT NULL,
    "guestsQttId" BIGINT NOT NULL,

    PRIMARY KEY ("buffetId", "guestsQttId"),
    CONSTRAINT "juncao_buffet_convidados_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "juncao_buffet_convidados_guestsQttId_fkey" FOREIGN KEY ("guestsQttId") REFERENCES "qtds_convidados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "opcionais" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qtt" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "tipos_para_opcionais" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qtt" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "juncao_opcional_tipo" (
    "typeId" BIGINT NOT NULL,
    "optionalId" BIGINT NOT NULL,

    PRIMARY KEY ("typeId", "optionalId"),
    CONSTRAINT "juncao_opcional_tipo_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "tipos_para_opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "juncao_opcional_tipo_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "evaluation" INTEGER,
    "type" TEXT,
    "birthdayPerson" TEXT,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME,
    "address" TEXT,
    "partyTheme" TEXT,
    "responsible" TEXT,
    "structure" TEXT,
    "contract" TEXT,
    "obs" TEXT,
    "clientId" BIGINT NOT NULL,
    "buffetId" BIGINT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "eventos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "eventos_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "evento_opcional" (
    "eventId" BIGINT NOT NULL,
    "optionalId" BIGINT NOT NULL,

    PRIMARY KEY ("eventId", "optionalId"),
    CONSTRAINT "evento_opcional_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "evento_opcional_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "clientId" BIGINT NOT NULL,
    "eventId" BIGINT NOT NULL,
    "date" DATETIME NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "pagamentos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pagamentos_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
