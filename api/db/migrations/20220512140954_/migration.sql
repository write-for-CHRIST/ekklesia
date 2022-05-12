-- CreateTable
CREATE TABLE "Profile" (
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
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_oldId_key" ON "Profile"("oldId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_slug_key" ON "Profile"("slug");
