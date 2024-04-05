-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "poids" REAL NOT NULL,
    "destination" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL
);
