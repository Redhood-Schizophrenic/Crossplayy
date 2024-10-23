-- CreateTable
CREATE TABLE `DeviceCategory` (
    `id` VARCHAR(191) NOT NULL,
    `CategoryName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DeviceCategory_id_key`(`id`),
    UNIQUE INDEX `DeviceCategory_CategoryName_key`(`CategoryName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Devices` (
    `id` VARCHAR(191) NOT NULL,
    `CategoryId` VARCHAR(191) NOT NULL,
    `DeviceName` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL DEFAULT 'Active',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Devices_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gaming_Sessions` (
    `id` VARCHAR(191) NOT NULL,
    `CustomerName` VARCHAR(191) NULL,
    `CustomerContact` VARCHAR(191) NULL,
    `Date` VARCHAR(191) NOT NULL,
    `Hours` DOUBLE NOT NULL,
    `Minutes` INTEGER NOT NULL,
    `InTime` VARCHAR(191) NOT NULL,
    `OutTime` VARCHAR(191) NOT NULL,
    `Discount` VARCHAR(191) NULL,
    `WaterBottles` INTEGER NOT NULL,
    `Snacks` INTEGER NOT NULL,
    `NoOfPlayer` INTEGER NOT NULL,
    `PlayerType` VARCHAR(191) NOT NULL DEFAULT 'Single',
    `SessionPrice` DOUBLE NOT NULL,
    `TotalPrice` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Gaming_Sessions_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `DeviceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
