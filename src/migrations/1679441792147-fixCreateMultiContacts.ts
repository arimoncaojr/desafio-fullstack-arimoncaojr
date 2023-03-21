import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreateMultiContacts1679441792147 implements MigrationInterface {
    name = 'fixCreateMultiContacts1679441792147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

}
