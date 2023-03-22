import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Contact from "./entities/contact.entity";
import { fixFieldTelephone1679517317002 } from "./migrations/1679517317002-fixFieldTelephone";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [User, Contact],
        migrations: [fixFieldTelephone1679517317002],
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
        migrations: [fixFieldTelephone1679517317002],
      }
);

export default AppDataSource;
