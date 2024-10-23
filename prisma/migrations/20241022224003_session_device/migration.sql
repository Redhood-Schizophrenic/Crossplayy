/*
  Warnings:

  - Added the required column `DeviceId` to the `Gaming_Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Gaming_Sessions` ADD COLUMN `DeviceId` VARCHAR(191) NOT NULL,
    ADD COLUMN `Status` VARCHAR(191) NOT NULL DEFAULT 'Open';

-- AddForeignKey
ALTER TABLE `Gaming_Sessions` ADD CONSTRAINT `Gaming_Sessions_DeviceId_fkey` FOREIGN KEY (`DeviceId`) REFERENCES `Devices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
