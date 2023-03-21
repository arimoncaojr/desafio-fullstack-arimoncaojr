import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Client from "./entities/client.entity";
import Contact from "./entities/contact.entity";
import { removeCreateClient1679440943730 } from "./migrations/1679440943730-removeCreate_client";
import { fixCreateMultiContacts1679441792147 } from "./migrations/1679441792147-fixCreateMultiContacts";

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
        migrations: [fixCreateMultiContacts1679441792147],
      }
);

export default AppDataSource;
