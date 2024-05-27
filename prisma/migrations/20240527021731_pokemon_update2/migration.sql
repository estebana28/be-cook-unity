/*
  Warnings:

  - You are about to drop the column `rearity` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `rarity` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "rearity",
ADD COLUMN     "rarity" TEXT NOT NULL;
