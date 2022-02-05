-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "max_speed" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
