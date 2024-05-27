/*
  Warnings:

  - Added the required column `description` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expansion` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rearity` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "expansion" TEXT NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "rearity" TEXT NOT NULL,
ADD COLUMN     "resistances" "Type"[],
ADD COLUMN     "weaknesses" "Type"[],
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Pokemon_id_seq";
