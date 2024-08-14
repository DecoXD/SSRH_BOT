-- CreateTable
CREATE TABLE `Candidate` (
    `candidate_id` VARCHAR(191) NOT NULL,
    `position` VARCHAR(255) NOT NULL,
    `educational_institution` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(45) NOT NULL,
    `address_id` INTEGER NOT NULL,
    `contact_id` INTEGER NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`candidate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidate_contact` (
    `candidate_contact_id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone_1` VARCHAR(45) NOT NULL,
    `phone_2` VARCHAR(45) NOT NULL,
    `phone_3` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`candidate_contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidate_address` (
    `candidate_address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `zip_code` VARCHAR(45) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `state` VARCHAR(45) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `number` VARCHAR(45) NOT NULL,
    `street` VARCHAR(45) NOT NULL,
    `neighborhood` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`candidate_address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enterprise_accounts` (
    `enterprise_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `cnpj` VARCHAR(45) NOT NULL,
    `owner` VARCHAR(45) NOT NULL,
    `corporate_name` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `contact_id` INTEGER NOT NULL,
    `address_id` INTEGER NOT NULL,

    PRIMARY KEY (`enterprise_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enterprise_address` (
    `enterprise_address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `street` VARCHAR(45) NOT NULL,
    `state` VARCHAR(45) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `number` INTEGER NULL,
    `complement` VARCHAR(45) NOT NULL,
    `neighborhood` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`enterprise_address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enterprise_contact` (
    `enterprise_contact_id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone_1` VARCHAR(45) NOT NULL,
    `phone_2` VARCHAR(45) NOT NULL,
    `phone_3` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`enterprise_contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Opportunities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `salary` INTEGER NOT NULL,
    `requirements` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expires` DATETIME(3) NOT NULL,
    `enterprise_id` VARCHAR(191) NOT NULL,
    `opportunity_type` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Selection_process` (
    `id_selection_process` VARCHAR(191) NOT NULL,
    `candidate_id` VARCHAR(191) NOT NULL,
    `enterprise_id` VARCHAR(191) NOT NULL,
    `opportunitie_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_selection_process`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `Candidate_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `Candidate_address`(`candidate_address_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `Candidate_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `Candidate_contact`(`candidate_contact_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise_accounts` ADD CONSTRAINT `Enterprise_accounts_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `Enterprise_contact`(`enterprise_contact_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise_accounts` ADD CONSTRAINT `Enterprise_accounts_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `Enterprise_address`(`enterprise_address_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Opportunities` ADD CONSTRAINT `Opportunities_enterprise_id_fkey` FOREIGN KEY (`enterprise_id`) REFERENCES `Enterprise_accounts`(`enterprise_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Selection_process` ADD CONSTRAINT `Selection_process_candidate_id_fkey` FOREIGN KEY (`candidate_id`) REFERENCES `Candidate`(`candidate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Selection_process` ADD CONSTRAINT `Selection_process_enterprise_id_fkey` FOREIGN KEY (`enterprise_id`) REFERENCES `Enterprise_accounts`(`enterprise_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Selection_process` ADD CONSTRAINT `Selection_process_opportunitie_id_fkey` FOREIGN KEY (`opportunitie_id`) REFERENCES `Opportunities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
