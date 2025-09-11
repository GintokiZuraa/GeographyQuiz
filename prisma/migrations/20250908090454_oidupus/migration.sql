-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "area" TEXT NOT NULL,
    "maxArea" TEXT NOT NULL,
    "timeTravel" INTEGER NOT NULL,
    "coolness" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horse" (
    "id" TEXT NOT NULL,
    "tier" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "epicness" INTEGER NOT NULL,

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profession" (
    "id" TEXT NOT NULL,
    "worker" INTEGER NOT NULL,
    "crafter" INTEGER NOT NULL,
    "lootboxer" INTEGER NOT NULL,
    "merchant" INTEGER NOT NULL,
    "enchanter" INTEGER NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdleProfile" (
    "id" TEXT NOT NULL,
    "pack" INTEGER NOT NULL,

    CONSTRAINT "IdleProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdleLeague" (
    "username" TEXT NOT NULL,
    "point" INTEGER NOT NULL,

    CONSTRAINT "IdleLeague_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "IdleItem" (
    "name" TEXT NOT NULL,
    "pack" INTEGER,
    "type" TEXT,
    "price" INTEGER,
    "percent" INTEGER,
    "percentHistory" JSONB,
    "note" TEXT,
    "lastUpdate" DOUBLE PRECISION,

    CONSTRAINT "IdleItem_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "channelID" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoidReminder" (
    "area" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "VoidReminder_pkey" PRIMARY KEY ("area")
);

-- CreateTable
CREATE TABLE "RestartChannel" (
    "id" TEXT NOT NULL,

    CONSTRAINT "RestartChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelOwner" (
    "channelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChannelOwner_pkey" PRIMARY KEY ("channelId")
);

-- CreateTable
CREATE TABLE "IdleStonk" (
    "name" TEXT NOT NULL,
    "period" TEXT,
    "returnPercent" DOUBLE PRECISION,
    "riskLevel" DOUBLE PRECISION,
    "percentHistory" JSONB,
    "lastUpdate" DOUBLE PRECISION,

    CONSTRAINT "IdleStonk_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "UserMemory" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserMemory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnouncementChannel" (
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "AnnouncementChannel_pkey" PRIMARY KEY ("guildId")
);

-- CreateTable
CREATE TABLE "player_scores" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "flag" INTEGER NOT NULL DEFAULT 0,
    "capital" INTEGER NOT NULL DEFAULT 0,
    "language" INTEGER NOT NULL DEFAULT 0,
    "state" INTEGER NOT NULL DEFAULT 0,
    "kabupaten" INTEGER NOT NULL DEFAULT 0,
    "province" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_currency" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "gems" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerProfiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "badges" TEXT[],
    "unlockedTitles" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Horse_id_key" ON "Horse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profession_id_key" ON "Profession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IdleProfile_id_key" ON "IdleProfile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IdleLeague_username_key" ON "IdleLeague"("username");

-- CreateIndex
CREATE UNIQUE INDEX "IdleItem_name_key" ON "IdleItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Reminder_id_key" ON "Reminder"("id");

-- CreateIndex
CREATE UNIQUE INDEX "VoidReminder_area_key" ON "VoidReminder"("area");

-- CreateIndex
CREATE UNIQUE INDEX "RestartChannel_id_key" ON "RestartChannel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IdleStonk_name_key" ON "IdleStonk"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserMemory_userId_key" ON "UserMemory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "player_scores_userId_key" ON "player_scores"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "player_currency_userId_key" ON "player_currency"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerProfiles_userId_key" ON "PlayerProfiles"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profession" ADD CONSTRAINT "Profession_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdleProfile" ADD CONSTRAINT "IdleProfile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_scores" ADD CONSTRAINT "player_scores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PlayerProfiles"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
