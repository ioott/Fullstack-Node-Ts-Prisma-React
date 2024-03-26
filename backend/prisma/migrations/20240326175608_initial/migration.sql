-- CreateTable
CREATE TABLE "clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "buffets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "duracaoId" INTEGER NOT NULL,
    "qtdConvidadosId" INTEGER NOT NULL,
    CONSTRAINT "buffets_duracaoId_fkey" FOREIGN KEY ("duracaoId") REFERENCES "buffet_duracao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "buffets_qtdConvidadosId_fkey" FOREIGN KEY ("qtdConvidadosId") REFERENCES "buffet_convidados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "buffet_duracao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duracao" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "buffet_convidados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qtdConvidados" INTEGER NOT NULL,
    "preco" REAL NOT NULL,
    "buffetId" INTEGER
);

-- CreateTable
CREATE TABLE "opcionais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "qtdId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    CONSTRAINT "opcionais_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "opcional_tipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "opcionais_qtdId_fkey" FOREIGN KEY ("qtdId") REFERENCES "opcional_qtd" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "opcionais_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos_opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "opcional_tipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "opcionalId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "opcional_qtd" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qtd" INTEGER NOT NULL,
    "preco" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "aniversariante" TEXT,
    "data" DATETIME NOT NULL,
    "horarioInicial" DATETIME NOT NULL,
    "endereco" TEXT NOT NULL,
    "temaFesta" TEXT,
    "responsavel" TEXT,
    "estrutura" TEXT,
    "clienteId" INTEGER NOT NULL,
    "buffetId" INTEGER NOT NULL,
    "opcionalId" INTEGER NOT NULL,
    "contrato" TEXT,
    "obs" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "eventos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "eventos_buffetId_fkey" FOREIGN KEY ("buffetId") REFERENCES "buffets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "eventos_opcionalId_fkey" FOREIGN KEY ("opcionalId") REFERENCES "eventos_opcionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "eventos_opcionais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "pagamentos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pagamentos_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
