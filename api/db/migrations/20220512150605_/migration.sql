-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "gender" TEXT,
    "oldId" TEXT,
    "slug" TEXT,
    "email" TEXT,
    "facebookId" TEXT,
    "phoneNumber" TEXT,
    "birthday" DATETIME,
    "joinDate" DATETIME,
    "dayOfBirth" INTEGER,
    "monthOfBirth" INTEGER,
    "yearOfBirth" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "groupId" TEXT,
    CONSTRAINT "Profile_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("birthday", "createdAt", "dayOfBirth", "email", "facebookId", "fullName", "gender", "id", "joinDate", "monthOfBirth", "oldId", "phoneNumber", "slug", "updatedAt", "yearOfBirth") SELECT "birthday", "createdAt", "dayOfBirth", "email", "facebookId", "fullName", "gender", "id", "joinDate", "monthOfBirth", "oldId", "phoneNumber", "slug", "updatedAt", "yearOfBirth" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_oldId_key" ON "Profile"("oldId");
CREATE UNIQUE INDEX "Profile_slug_key" ON "Profile"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
