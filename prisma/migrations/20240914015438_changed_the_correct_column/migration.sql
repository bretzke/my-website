/*
  Warnings:

  - You are about to drop the column `email` on the `UserFeedback` table. All the data in the column will be lost.
  - Added the required column `name` to the `UserFeedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserFeedback" DROP COLUMN "email",
ADD COLUMN     "name" VARCHAR(255) NOT NULL;
