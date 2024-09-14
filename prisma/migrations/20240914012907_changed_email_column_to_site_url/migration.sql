/*
  Warnings:

  - You are about to drop the column `name` on the `UserFeedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserFeedback" DROP COLUMN "name",
ADD COLUMN     "siteUrl" TEXT;
