import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Contact from "./entities/contact.entity";
import { fixDeleteClientEntity1679507260797 } from "./migrations/1679507260797-fixDeleteClientEntity";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.DB,
        logging: true,
        synchronize: false,
        entities: [User, Contact],
        migrations: [fixDeleteClientEntity1679507260797],
      }
);

export default AppDataSource;
