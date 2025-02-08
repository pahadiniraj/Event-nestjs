/*
  Warnings:

  - You are about to drop the `_EventsToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_EventsToUser" DROP CONSTRAINT "_EventsToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventsToUser" DROP CONSTRAINT "_EventsToUser_B_fkey";

-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_EventsToUser";

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
