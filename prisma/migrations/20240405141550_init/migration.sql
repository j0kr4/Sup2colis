-- CreateTable
CREATE TABLE "Hub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "poids" REAL NOT NULL,
    "destination" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL,
    "hubId" INTEGER,
    CONSTRAINT "Package_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Hub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("adresse", "destination", "id", "nom", "poids", "trackingId") SELECT "adresse", "destination", "id", "nom", "poids", "trackingId" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
