import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Client from "./entities/client.entity";
import Contact from "./entities/contact.entity";
import { fixFieldsTelephoneAndEmail1679445405187 } from "./migrations/1679445405187-fixFieldsTelephoneAndEmail";

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
        entities: [User, Client, Contact],
        migrations: [fixFieldsTelephoneAndEmail1679445405187],
      }
);

export default AppDataSource;
